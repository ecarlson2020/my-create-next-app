import type {
  NavItem,
  Project,
  Service,
  ServiceArea,
  Testimonial,
} from "../components/Home/Home.types";

export const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
] as const satisfies readonly NavItem[];

export const services = [
  {
    title: "Lawn care",
    description:
      "Consistent, detailed care that keeps your property healthy and ready to enjoy.",
    features: ["Mowing & trimming", "Fertilization", "Aeration & power raking"],
    icon: "grass",
    image: "/images/service-lawn.webp",
  },
  {
    title: "Landscaping",
    description:
      "Thoughtful upgrades and full transformations designed around your home and budget.",
    features: [
      "Landscape design",
      "Sod, seed & planting",
      "Rock, mulch & flagstone",
    ],
    icon: "leaf",
    image: "/images/service-landscaping.webp",
  },
  {
    title: "Irrigation",
    description:
      "Reliable sprinkler service to help Colorado lawns thrive through every season.",
    features: ["Startups & repairs", "New installations", "Fall blowouts"],
    icon: "water",
    image: "/images/service-irrigation.webp",
  },
  {
    title: "Snow removal",
    description:
      "Responsive residential and commercial clearing when Northern Colorado turns white.",
    features: [
      "Homes & driveways",
      "Commercial properties",
      "HOAs & managed properties",
    ],
    icon: "snow",
    image: "/images/service-snow.webp",
  },
] as const satisfies readonly Service[];

export const projects = [
  {
    alt: "Fresh lawn installed beside a Northern Colorado home",
    image: "/images/project-lawn.webp",
    label: "Lawn restoration",
    size: "large",
  },
  {
    alt: "Flagstone path installed by V3 Lawn Care",
    image: "/images/project-flagstone.webp",
    label: "Flagstone & hardscape",
    size: "small",
  },
  {
    alt: "Fresh mulch and shrubs around a home",
    image: "/images/project-mulch.webp",
    label: "Planting & mulch",
    size: "small",
  },
  {
    alt: "Finished rock landscaping and concrete walkway",
    image: "/images/project-rock.webp",
    label: "Low-water landscapes",
    size: "large",
  },
] as const satisfies readonly Project[];

export const testimonials = [
  {
    author: "Anna Warmuth",
    quote:
      "They did an excellent job getting everything back up to par and keeping it that way. Thanks so much for your great work!",
  },
  {
    author: "Leatha Lemen",
    quote:
      "Their work and attention to detail quickly transformed the outdoor space. We were more than satisfied!",
  },
  {
    author: "Debra Ann",
    quote:
      "We found the quality and affordability we were looking for. They did a great job right down to cleaning up.",
  },
] as const satisfies readonly Testimonial[];

export const serviceAreas = [
  { city: "Fort Collins" },
  { city: "Loveland" },
  { city: "Windsor" },
  { city: "Berthoud" },
  { city: "Longmont" },
  { city: "Johnstown" },
  { city: "Timnath" },
] as const satisfies readonly ServiceArea[];
