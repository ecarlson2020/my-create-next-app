import type { IconName } from "../common/Icon/Icon";

export interface NavItem {
  href: `#${string}`;
  label: string;
}

export interface Service {
  description: string;
  features: readonly string[];
  icon: IconName;
  image: `/${string}`;
  title: string;
}

export interface Project {
  alt: string;
  image: `/${string}`;
  label: string;
  size: "large" | "small";
}

export interface Testimonial {
  author: string;
  quote: string;
}

export interface ServiceArea {
  city: string;
}
