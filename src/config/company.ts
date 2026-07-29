/**
 * Single source of truth for the business's own details. Every component that
 * shows a phone number, email or tagline reads it from here.
 */
export const company = {
  name: "Planned by Peter",
  legalName: "Planned by Peter Weddings & Events",
  wordmarkTop: "PLANNED",
  wordmarkBottom: "by Peter",
  tagline:
    "Full-service and destination event planning team crafting unforgettable wedding experiences through curated design + seamless coordination",
  shortTagline: "Utah weddings, artfully planned.",
  email: "peterktestakis@plannedbypeter.com",
  phone: "801-580-3488",
  phoneHref: "tel:+18015803488",
  instagram: "@plannedbypeter",
  instagramUrl: "https://www.instagram.com/plannedbypeter",
  /** Prefilled subject carried over from the mailto link on the current site. */
  emailHref:
    "mailto:peterktestakis@plannedbypeter.com?subject=Let%27s%20Talk%20About%20Our%20Wedding!",
  region: "Utah",
  serviceAreas: [
    "Salt Lake City",
    "Park City",
    "Deer Valley",
    "Moab",
    "Southern Utah",
    "Destination",
  ],
  responseWindow: "72 hours",
  /** Used for canonical URLs and JSON-LD. */
  siteUrl: "https://www.plannedbypeter.com",
} as const;

export interface Award {
  /** Awarding body, as it appears on the badge artwork. */
  name: string;
  year: string;
  /** Manifest key for the badge PNG (transparent — see optimize-images.mjs). */
  image: string;
  alt: string;
}

/**
 * Both badges the client displays, newest first. These are The Knot's own
 * artwork and wording — don't paraphrase the award name.
 */
export const awards: Award[] = [
  {
    name: "The Knot Best of Weddings",
    year: "2026",
    image: "award-knot-2026",
    alt: "The Knot Best of Weddings 2026 award badge",
  },
  {
    name: "The Knot Best of Weddings",
    year: "2025",
    image: "award-knot-2025",
    alt: "The Knot Best of Weddings 2025 award badge",
  },
];

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

/** Instagram is the only profile the client currently links anywhere. */
export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    handle: company.instagram,
    url: company.instagramUrl,
  },
];

export const homeIntro = [
  "Welcome to Planned by Peter Weddings & Events! We're a Utah based wedding + event planning company that creates full-service refined, unforgettable wedding experiences defined by intentional design and flawless execution.",
  "With a focus on elevated aesthetics and impeccable logistics, we transform your vision into an experience that feels effortless, personal, and beautifully orchestrated. Guided by trusted vendor relationships and a commitment to excellence, we ensure every moment unfolds seamlessly, allowing you to be fully present and savor the celebration of a lifetime.",
] as const;

export const homeStatement =
  "Perfect weddings aren't accidental; they're artfully planned with intention and expertise. Let one of the most important days of your lives be guided by professionals who bring clarity, calm, and refined execution to every moment.";
