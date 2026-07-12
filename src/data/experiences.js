import TerrainIcon from "@mui/icons-material/Terrain";
import WavesIcon from "@mui/icons-material/Waves";
import PetsIcon from "@mui/icons-material/Pets";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";

// icon kept as a component reference, rendered with a shared size at call site
export const experiences = [
  {
    Icon: TerrainIcon,
    title: "Hill Country Adventures",
    desc: "Hike through the breathtaking landscapes of Ella, Horton Plains, and Knuckles while enjoying panoramic mountain views.",
    img: "https://cdn.shortpixel.ai/spai/q_lossless+w_976+to_webp+ret_img/www.charlotteplansatrip.com/wp-content/uploads/2019/12/Ascending-Adams-Peak.jpg",
    tag: "Adventure",
  },
  {
    Icon: WavesIcon,
    title: "Coastal Escapes",
    desc: "Relax on Sri Lanka's golden beaches, enjoy surfing in Arugam Bay, and experience whale watching in Mirissa.",
    img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e32ba0a1ccc298e3b520787eab6176b9946de6c/big-892a2aecfd74c925d1973c7cd0f7d4d6.jpg",
    tag: "Beach",
  },
  {
    Icon: PetsIcon,
    title: "Wildlife Safaris",
    desc: "Discover elephants, leopards, sloth bears, and exotic birds in Yala, Udawalawe, and Wilpattu National Parks.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_4AQ-I72KZ2nlwRMVPqYEPI_vq37cvK9ysBn2JUvje5FiX2PTlApjLI&s=10",
    tag: "Wildlife",
  },
  {
    Icon: TempleBuddhistIcon,
    title: "Heritage & Culture",
    desc: "Explore ancient cities, sacred temples, colonial forts, and UNESCO World Heritage Sites across Sri Lanka.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSk-Aq-8vF1IfdsNSypAJipeD2hyHPYEYUHnhinfJBKgI-wvUfyPKyvIE&s=10",
    tag: "Culture",
  },
];