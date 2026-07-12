import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { aboutStats } from "../data/stats";

export default function About() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className={`inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 ${visible ? "anim-fade-in" : "opacity-0"}`}>Our Story</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              Born from a <span className="italic font-normal text-stone-400">passion</span> for travel
            </h2>
            <div className={`space-y-4 ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <p className="text-stone-500 font-light leading-relaxed">
                Sri Lanka is an island of timeless heritage, breathtaking landscapes, and warm hospitality. From ancient kingdoms and misty hill country to golden beaches and extraordinary wildlife, every journey reveals a new side of the island's unique charm.
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
                We showcase the very best of Sri Lanka, helping travelers discover iconic landmarks alongside hidden gems. Every destination is carefully presented to inspire authentic experiences, meaningful connections, and unforgettable memories across the Pearl of the Indian Ocean.
            </p>
            </div>
            <div className={`grid grid-cols-3 gap-6 mt-10 ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              {aboutStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #1c1917, #78716c)" }}>
                    {s.num}
                  </p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-4 ${visible ? "anim-slide-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <img src="https://d2lq8tbi49766.cloudfront.net/sites/2/2025/01/slanka-a-top-travel-destination-for-2025why-Its-worth-visiting-2560x1920-1.jpg" alt="" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOaGOMCjeCgyCC18Z76LfrUPD_AW-sfXohDAXzYXiCyaki8QV3EQPHIs&s=10" alt="" className="rounded-2xl w-full h-40 object-cover shadow-lg" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://travellersisle.com/wp-content/uploads/2022/03/Is-Sri-Lanka-worth-visiting.jpg" alt="" className="rounded-2xl w-full h-40 object-cover shadow-lg" />
              <img src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_4388e22bc2.jpg" alt="" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}