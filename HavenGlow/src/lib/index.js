import hero from "../assets/hero.webp";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

// 🌸 Elegant navigation for HavenGlow
export const LINKS = [
  { name: "Welcome", link: "#welcome" },
  { name: "Services", link: "#services" },
  { name: "Our Creations", link: "#creations" },
  { name: "Reviews", link: "#reviews" }, 
  { name: "Connect", link: "#connect" },
];

// 🌿 Hero section
export const HERO_CONTENT = {
  title: "HavenGlow",
  subtitle: "Where Every Corner Shines with Beauty & Comfort",
  image: hero,
};

// ✨ Services section (What We Do)
export const SERVICES_CONTENT = [
  {
    title: "Kitchen Elegance",
    description:
      "We design kitchens that blend modern style with timeless warmth — the perfect place to cook, connect, and create memories.",
    image: kitchenImage,
    alt: "Kitchen Elegance",
  },
  {
    title: "Serene Bathrooms",
    description:
      "Transform your bathroom into a calm, spa-inspired retreat. Soft tones, natural materials, and soothing design await.",
    image: bathroomImage,
    alt: "Serene Bathrooms",
  },
  {
    title: "Inviting Living Spaces",
    description:
      "From cozy corners to grand living rooms, we craft spaces that radiate charm, comfort, and glowing style.",
    image: livingRoomImage,
    alt: "Inviting Living Spaces",
  },
];

// 🏡 Our Creations
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Bright & Modern Kitchen",
    description:
      "A clean, luminous design with golden accents and soft whites, creating a kitchen that’s both stunning and practical.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Relaxing Bathroom Escape",
    description:
      "A spa-like bathroom featuring marble details, warm lighting, and peaceful vibes for everyday relaxation.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Outdoor Sanctuary",
    description:
      "A stylish patio haven with cozy seating, soft lanterns, and lush greenery — perfect for tranquil evenings.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Warm Living Glow",
    description:
      "A modern living room transformation — layered textures, ambient light, and earthy tones bring balance and beauty.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Elegant Basement Lounge",
    description:
      "Turned a dark basement into a multifunctional haven with soft lighting, elegant finishes, and cozy seating.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Stylish Work Nook",
    description:
      "A sleek home office that inspires creativity — minimal yet warm, with thoughtful touches throughout.",
    image: portfolio6,
    link: "#",
  },
];

// 💬 Reviews
export const REVIEWS = {
  text: "Our clients’ joy is our greatest reward. Discover how HavenGlow has brightened homes and hearts.",
  reviews: [
    {
      name: "Sophie Adams",
      title: "Homeowner",
      review:
        "HavenGlow turned our living room into a dream! It feels warm, elegant, and uniquely ours — truly magical.",
      image: user1,
    },
    {
      name: "Mark Lewis",
      title: "Homeowner",
      review:
        "They designed a bathroom that feels like a luxury spa. Every detail glows with calm and beauty.",
      image: user2,
    },
    {
      name: "Nadia Patel",
      title: "Homeowner",
      review:
        "Our kitchen makeover is absolutely stunning — bright, functional, and full of charm. We love it!",
      image: user3,
    },
    {
      name: "Ryan Chen",
      title: "Homeowner",
      review:
        "The outdoor space they crafted is peaceful and inviting — perfect for quiet evenings and joyful gatherings.",
      image: user4,
    },
    {
      name: "Isabella Rossi",
      title: "Homeowner",
      review:
        "Our home office now feels so calm and creative. HavenGlow really knows how to design with heart.",
      image: user5,
    },
    {
      name: "Thomas Gray",
      title: "Homeowner",
      review:
        "Every room shines with personality and comfort. They made our whole home feel renewed and radiant.",
      image: user6,
    },
  ],
};

// 📞 Connect 
export const CONTACT_INFO = {
  text: "Ready to create a space that shines? Let’s bring warmth and elegance to your home together.",
  phone: {
    label: "Call Us",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "hello@havenglow.com",
  },
  address: {
    label: "Visit Us",
    value: "456 Design Street, Suite 210, ST 56789",
  },
};
