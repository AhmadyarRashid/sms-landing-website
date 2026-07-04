# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies against the lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

# Build the Next.js app (produces .next/standalone thanks to output: "standalone")
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Run as an unprivileged user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy the standalone server, static assets, and public files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
