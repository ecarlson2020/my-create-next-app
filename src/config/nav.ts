export interface NavItem {
  label: string;
  href: string;
}

/**
 * Routes are clean replacements for the Wix originals (`/copy-of-home`,
 * `/copy-of-about`, `/team-4`), which leaked page-duplication artifacts into
 * every URL on the old site.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/process" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
