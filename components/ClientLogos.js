import Image from "next/image";
import Reveal from "@/components/Reveal";

// Real client / partner logos, verified individually.
const clients = [
  { src: "/images/citadel.svg", name: "Citadel" },
  { src: "/images/providentia.svg", name: "Providentia Books Foundation" },
  { src: "/images/wackenhut.svg", name: "Wackenhut" },
  { src: "/images/ipath.svg", name: "iPath" },
  { src: "/images/vrg.svg", name: "VRG" },
  { src: "/images/pihi.svg", name: "PIHI" },
];

// Static, tasteful trust bar (no marquee) for interior pages.
export default function ClientLogos({ heading = "Trusted by leading organizations" }) {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          {heading}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((c, i) => (
            <Reveal key={c.src} variant="zoom" delay={i * 70}>
              <Image
                src={c.src}
                alt={c.name}
                width={130}
                height={52}
                className="h-11 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
