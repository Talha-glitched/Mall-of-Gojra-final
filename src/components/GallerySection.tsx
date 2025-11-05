import { motion } from "framer-motion";
import photo4 from "@/Assets/A_4 - Photo.jpg";
import photo7 from "@/Assets/A_7 - Photo.jpg";
import photo8 from "@/Assets/A_8 - Photo.jpg";
import photo9 from "@/Assets/A_9 - Photo.jpg";

const images = [
    { src: photo9, alt: "Mall Exterior - Angle 9" },
    { src: photo8, alt: "Mall Exterior - Angle 8" },
    { src: photo7, alt: "Mall Exterior - Angle 7" },
    { src: photo4, alt: "Mall Exterior - Angle 4" },
];

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
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        See The Mall
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Up Close</span>
                    </h2>
                    <p className="text-white/70 text-lg">High-fidelity renders showcasing the exterior and architectural character.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Big lead image */}
                    <motion.div
                        className="sm:col-span-2 lg:col-span-2 row-span-2"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-contain" />
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
                        </div>
                    </motion.div>

                    {images.slice(1).map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.06 }}
                        >
                            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                                <img src={img.src} alt={img.alt} className="w-full h-64 object-contain" />
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


