export const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/bcc566c9-473f-4272-9ada-7bea384c280d/widget?locationId=eccecc5d-45c7-4b3b-8989-3a250b3b2542";

export const EXTENSION_CONSULTATION_URL = `${BOOKING_URL}&path=%2Fcart%2Fmenu%2FConsultation%2Fs_c2316816-95ed-4625-971a-b67658278450&visitType=SELF_VISIT`;

export const INSTAGRAM_URL = "https://www.instagram.com/studioboomsalon/";

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface ServicePreview {
  number: string;
  title: string;
  description: string;
  price: string;
  tone: "cobalt" | "clay" | "lime";
}

export interface ArtistPreview {
  name: string;
  specialty: string;
  image: string;
  position: "center" | "top";
}

export const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "HEVN Extensions", href: "#hevn" },
  { label: "Artists", href: "#artists" },
  { label: "Visit", href: "#visit" },
] satisfies NavigationItem[];

export const servicePreviews = [
  {
    number: "01",
    title: "Cut + shape",
    description:
      "From lived-in layers to sharp pixies and curl-first shaping. Every cut includes a wash, condition, blow dry, and style.",
    price: "Cuts from $40",
    tone: "cobalt",
  },
  {
    number: "02",
    title: "Color + blonding",
    description:
      "Dimensional color, bright blondes, gray blending, and creative transformations—planned around the health of your hair.",
    price: "Color from $64",
    tone: "clay",
  },
  {
    number: "03",
    title: "CURL LAB",
    description:
      "Specialty cutting, styling, and care for curly, coily, and kinky hair with certified curl specialists.",
    price: "$78–$97",
    tone: "lime",
  },
] satisfies ServicePreview[];

export const artistPreviews = [
  {
    name: "Kat Toth",
    specialty: "Blonding + CURL LAB",
    image: "/images/studio-boom/kat-toth.jpg",
    position: "center",
  },
  {
    name: "Carissa Augustad",
    specialty: "Colorist + HEVN creator",
    image: "/images/studio-boom/carissa-augustad.jpg",
    position: "top",
  },
  {
    name: "Felicia Rincones",
    specialty: "Curls + HEVN extensions",
    image: "/images/studio-boom/felicia-rincones.jpg",
    position: "center",
  },
  {
    name: "Brandon Walters",
    specialty: "Creative color + balayage",
    image: "/images/studio-boom/brandon-walters.jpg",
    position: "center",
  },
] satisfies ArtistPreview[];

export const marqueeItems = [
  "Longmont, Colorado",
  "Color with intention",
  "Curls understood",
  "Damage-conscious extensions",
] as const;
