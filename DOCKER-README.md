# Docker Deployment — sms-landing-website

Marketing site (Next.js) served at **https://smsservicespk.com** (+ www).

## Server facts

| Thing | Value |
|-------|-------|
| Project path | `/home/systemadmin/iot/sms-landing-website` |
| Container name | `sms-landing-website` |
| Image name | `sms-landing-website` |
| Port mapping | `3004:3000` (host 3004 → Next.js 3000) |
| Routing | HAProxy routes `smsservicespk.com` + `www` → `172.18.0.1:3004` |

The container listens on port 3000 internally (Next.js standalone). HAProxy
handles SSL and host-based routing — **no HAProxy change is needed for a
code-only redeploy.**

## Redeploy after new changes

SSH into the server, then:

```bash
cd /home/systemadmin/iot/sms-landing-website

# 1. Get latest code
git pull

# 2. Rebuild the image (--no-cache avoids stale layers)
docker build --no-cache -t sms-landing-website .

# 3. Replace the running container
docker stop sms-landing-website && docker rm sms-landing-website

docker run -d \
  --name sms-landing-website \
  --restart always \
  -p 3004:3000 \
  sms-landing-website
```

No `-e` / `--build-arg` values are required — this is a static marketing site
with no `NEXT_PUBLIC_*` or backend env vars.

## Verify

```bash
docker ps --filter "name=sms-landing-website"
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3004/       # expect 200
curl -s -o /dev/null -w "%{http_code}\n" https://smsservicespk.com/    # expect 200
```

## Troubleshooting

```bash
# Watch logs
docker logs sms-landing-website -f
```

- **502 Bad Gateway** → container not running or not on :3004. Check `docker ps`
  and that UFW allows Docker networks to reach port 3004.
- **Old content still showing** → the running container is a frozen snapshot of
  a previous build. Editing files on disk does nothing until you rebuild the
  image and recreate the container (the steps above).

## How the build works

- `next.config.mjs` sets `output: "standalone"`, so `npm run build` emits a
  self-contained server in `.next/standalone`.
- `Dockerfile` is a multi-stage build: `node:20-alpine` builds the app, then a
  slim runner stage runs `node server.js` as an unprivileged user.
- `.dockerignore` keeps `node_modules`, `.next`, and `.git` out of the build
  context.
