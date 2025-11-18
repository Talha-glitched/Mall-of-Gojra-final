import { motion } from "framer-motion";
import photo4 from "@/Assets/A_4 - Photo.jpg";
import photo7 from "@/Assets/A_7 - Photo.jpg";
import photo8 from "@/Assets/A_8 - Photo.jpg";
import photo9 from "@/Assets/A_9 - Photo.jpg";

const galleryItems = [
  {
    src: photo9,
    alt: "Mall Exterior - Grand Entrance",
    caption: "Grand Arrival Plaza",
    description: "Signature facade with double-height glass and premium signage zones.",
  },
  {
    src: photo8,
    alt: "Mall Exterior - Relaxed View",
    caption: "Pedestrian Promenade",
    description: "Street-level experience with landscaped seating and branded frontage.",
  },
  {
    src: photo7,
    alt: "Mall Exterior - Angle 7",
    caption: "Architectural Detailing",
    description: "Bold geometry with warm lighting accents and tiered terraces.",
  },
  {
    src: photo4,
    alt: "Mall Exterior - Angle 4",
    caption: "Evening Ambience",
    description: "Night-time allure with layered illumination and active storefronts.",
  },
];

function ImageCard({
  item,
  aspectClass,
  layoutClass,
  delay = 0,
}: {
  item: (typeof galleryItems)[number];
  aspectClass: string;
  layoutClass: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={layoutClass}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 ${aspectClass}`}>
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-[32px]" />
        <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white/90">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70">{item.caption}</p>
          <p className="text-lg font-semibold text-white leading-snug">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-yellow-400/5 to-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(var(--brand-gold-rgb),0.8)]">
            Visual Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            See The Mall
            <span className="text-[var(--brand-gold)]"> Up Close</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/70">
            Architectural renders showcasing every angle — from the grand entrance to the illuminated evening ambience.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <ImageCard
            item={galleryItems[0]}
            aspectClass="aspect-[5/4]"
            layoutClass="lg:col-span-7 sm:col-span-2"
          />

          <div className="space-y-6 lg:col-span-5">
            <ImageCard
              item={galleryItems[1]}
              aspectClass="aspect-[4/3]"
              layoutClass=""
              delay={0.1}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <ImageCard
                item={galleryItems[2]}
                aspectClass="aspect-square"
                layoutClass=""
                delay={0.16}
              />
              <ImageCard
                item={galleryItems[3]}
                aspectClass="aspect-square"
                layoutClass=""
                delay={0.22}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


