import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const floors = [
  { name: "Lower Ground", area: "4,058.75", dimensions: "94'-5\" × 43'", height: "10 ft" },
  { name: "Ground Floor", area: "4,322.68", dimensions: "94'-7\" × 43'", height: "12 ft" },
  { name: "First Floor", area: "5,154.17", dimensions: "105'-2\" × 49'", height: "11 ft" },
  { name: "Second Floor", area: "5,297.67", dimensions: "105'-2\" × 50'-4\"", height: "11 ft" },
  { name: "Roof Top", area: "5,876.88", dimensions: "105'-10\" × 55'-6\"", height: "—" },
];

export default function FloorPlanSection() {
  const [lastHovered, setLastHovered] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"front" | "top">("front");

  const imageByFloorFront = useMemo(() => ({
    "Lower Ground": "/Front View 1.png",
    "Ground Floor": "/Front View 2.png",
    "First Floor": "/Front View 3.png",
    "Second Floor": "/Front View 4.png",
    "Roof Top": "/Front View 5.png",
  } as Record<string, string>), []);

  const imageByFloorTop = useMemo(() => ({
    "Lower Ground": "/Top View 5.png",
    "Ground Floor": "/Top View 4.png",
    "First Floor": "/Top View 3.png",
    "Second Floor": "/Top View 2.png",
    "Roof Top": "/Top View 1.png",
  } as Record<string, string>), []);

  const activeImage = useMemo(() => {
    const map = viewMode === "front" ? imageByFloorFront : imageByFloorTop;
    const fallback = map[floors[0].name];
    return lastHovered ? map[lastHovered] : fallback;
  }, [viewMode, lastHovered, imageByFloorFront, imageByFloorTop]);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-yellow-400/5 to-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Largest Commercial Space{" "}
            <span className="text-yellow-400">
              Under One Roof
            </span>
          </h2>
          <p className="text-xl text-white/70">Total Built-up Area: 24,710.15 sq ft</p>
          <p className="text-lg text-white/60">Usable Commercial Area: 18,833 sq ft</p>
          <div className="mt-6 inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setViewMode("front")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${viewMode === "front" ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/40" : "text-white/80 hover:bg-white/10"}`}
            >
              Front View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("top")}
              className={`ml-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${viewMode === "top" ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/40" : "text-white/80 hover:bg-white/10"}`}
            >
              Top View
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: floor list (narrower) */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 space-y-4">
            {floors.map((floor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`backdrop-blur-xl border rounded-2xl p-4 transition-all cursor-pointer ${lastHovered === floor.name ? "bg-white/15 border-yellow-400/40" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
                onMouseEnter={() => setLastHovered(floor.name)}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 items-center">
                  <div>
                    <div className="text-yellow-400 font-semibold mb-1 text-sm">{floor.name}</div>
                    <div className="text-lg font-bold text-white">{floor.area} sq ft</div>
                  </div>
                  <div className="text-white/70 text-sm">
                    <div className="text-[11px] text-white/50 mb-1 uppercase tracking-wide">Dimensions</div>
                    <div className="font-semibold">{floor.dimensions}</div>
                  </div>
                  <div className="text-white/70 text-sm">
                    <div className="text-[11px] text-white/50 mb-1 uppercase tracking-wide">Ceiling Height</div>
                    <div className="font-semibold">{floor.height}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: image preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <div className="group relative h-full rounded-[28px] overflow-hidden border border-white/15 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={activeImage}
                alt={lastHovered ?? "Floor Preview"}
                className="w-full h-full object-contain bg-white/5 transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-[28px]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                <div className="text-sm">
                  {lastHovered ?? floors[0].name}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 backdrop-blur-xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">108 ft</div>
              <div className="text-sm text-white/70">Frontage Width</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">Open Plan</div>
              <div className="text-sm text-white/70">Customizable Layout</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">Dual Access</div>
              <div className="text-sm text-white/70">Front & Back Entry</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
