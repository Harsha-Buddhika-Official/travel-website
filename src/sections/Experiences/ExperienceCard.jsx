import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ExperienceCard({ experience, index, visible }) {
  const { Icon, title, desc, img, tag } = experience;

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col ${
        visible ? "anim-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative h-56 overflow-hidden shrink-0">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 left-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white uppercase tracking-wider">
          {tag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-400/10 transition-colors duration-300 text-stone-600 group-hover:text-emerald-600 shrink-0">
            <Icon sx={{ fontSize: 20 }} />
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="text-sm text-stone-500 font-light leading-relaxed mb-4 flex-1">{desc}</p>
        <a
          href="#"
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 hover:text-emerald-600 transition-colors mt-auto"
        >
          Explore
          <ArrowForwardIcon sx={{ fontSize: 14 }} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}