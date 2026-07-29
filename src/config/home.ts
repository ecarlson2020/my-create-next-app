export interface NavLink {
  readonly label: string;
  readonly href: `#${string}`;
}

export interface Service {
  readonly number: `0${number}`;
  readonly title: string;
  readonly shortTitle: string;
  readonly description: string;
  readonly details: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
}

export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly location: string;
}

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
] satisfies readonly NavLink[];

export const SERVICES = [
  {
    number: "01",
    title: "Landscape design",
    shortTitle: "Design",
    description:
      "Build-ready plans shaped around the way you gather, relax, and live outdoors. Every detail balances beauty, use, and long-term performance in Colorado's climate.",
    details: ["Site planning", "Material selection", "Planting design"],
    image: "/images/front-yard-landscape.webp",
    imageAlt:
      "Landscaped Colorado front yard with a curved paver walk and natural stone",
  },
  {
    number: "02",
    title: "Landscape construction",
    shortTitle: "Construction",
    description:
      "From outdoor rooms to structural hardscaping, our experienced team manages the build with uncommon care and a clear eye for how every element works together.",
    details: ["Patios & pergolas", "Outdoor kitchens", "Water features"],
    image: "/images/pergola-landscape.webp",
    imageAlt: "Finished backyard patio and pergola illuminated at sunset",
  },
  {
    number: "03",
    title: "Basement remodels",
    shortTitle: "Basements",
    description:
      "Bring underused square footage to life with a comfortable, considered build-out that carries the same planning and craftsmanship as our outdoor work.",
    details: ["Complete build-outs", "Custom living areas", "Finish upgrades"],
    image: "/images/basement-remodel.webp",
    imageAlt:
      "Finished basement living room with a natural stone fireplace and built-ins",
  },
] satisfies readonly Service[];

export const PROJECT_IMAGES = [
  {
    src: "/images/hero-landscape.webp",
    alt: "Modern Colorado home with native landscaping at dusk",
    label: "Native landscape",
    location: "Fort Collins",
  },
  {
    src: "/images/pergola-landscape.webp",
    alt: "Contemporary backyard pergola with warm string lights",
    label: "Outdoor living",
    location: "Timnath",
  },
  {
    src: "/images/water-feature.webp",
    alt: "Backyard putting green beside a custom water feature",
    label: "Water + play",
    location: "Northern Colorado",
  },
  {
    src: "/images/outdoor-living.webp",
    alt: "Rooftop fire feature overlooking the Front Range at night",
    label: "Fire feature",
    location: "Front Range",
  },
] satisfies readonly ProjectImage[];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consult",
    description:
      "We walk the space, listen closely, and understand what you want life there to feel like.",
  },
  {
    number: "02",
    title: "Design + plan",
    description:
      "Your ideas become a clear, buildable plan balancing design, budget, and function.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Experienced professionals manage the details and bring the plan to life with care.",
  },
] as const;

export const SERVICE_AREAS = {
  north: ["Fort Collins", "Timnath", "Windsor", "Greeley", "Loveland", "Erie"],
  south: [
    "Parker",
    "Castle Rock",
    "Lone Tree",
    "Highlands Ranch",
    "Greenwood Village",
    "Littleton",
  ],
} as const;

export const CONTACT = {
  phoneDisplay: "(303) 994-3356",
  phoneHref: "tel:+13039943356",
  email: "chad@cbwaterwork.com",
  facebook: "https://www.facebook.com/cbwaterwork",
  instagram: "https://www.instagram.com/cb_waterworks_landscaping/",
} as const;
