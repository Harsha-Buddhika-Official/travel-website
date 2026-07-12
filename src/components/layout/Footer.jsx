import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { footerColumns } from "../../data/navLinks";

const socials = [
  { key: "ig", Icon: InstagramIcon },
  { key: "tw", Icon: TwitterIcon },
  { key: "fb", Icon: FacebookIcon },
  { key: "yt", Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <a href="#hero" className="text-xl font-semibold tracking-tight flex items-center gap-2 mb-4">
              <ExploreIcon sx={{ fontSize: 22 }} />
              Wanderly
            </a>
            <p className="text-sm text-white/50 font-light leading-relaxed mb-6 max-w-xs">
              Curated journeys to extraordinary destinations. Making travel personal, authentic, and effortless since 2020.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ key, Icon }) => (
                <a
                  key={key}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/15 transition-colors duration-300"
                >
                  <Icon sx={{ fontSize: 16 }} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-light">&copy; {new Date().getFullYear()} NexaCore Solutions. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-white/30 font-light">Made with</span>
            <FavoriteIcon sx={{ fontSize: 12, color: "#34d399" }} />
            <span className="text-xs text-white/30 font-light">for travelers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}