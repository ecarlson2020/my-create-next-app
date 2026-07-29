export interface NavigationItem {
  label: string;
  href: string;
}

export interface MinistryItem {
  title: string;
  description: string;
  accent: string;
}

export interface ScheduleItem {
  day: string;
  title: string;
  time: string;
  detail: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Our story", href: "#our-story" },
  { label: "Ministries", href: "#ministries" },
  { label: "Round pen", href: "#round-pen" },
  { label: "Gatherings", href: "#gatherings" },
];

export const ministryItems: MinistryItem[] = [
  {
    title: "Children’s Church",
    description:
      "A welcoming, Bible-centered place for children in 1st through 5th grades to know Jesus and grow in faith.",
    accent: "01",
  },
  {
    title: "Prayer & Care",
    description:
      "Bring the hard things and the hopeful things. Our church family believes in praying together and showing up for one another.",
    accent: "02",
  },
  {
    title: "Fellowship",
    description:
      "From shared meals to weekly groups, there is always room at the table and a place to build honest friendships.",
    accent: "03",
  },
];

export const scheduleItems: ScheduleItem[] = [
  {
    day: "Every Sunday",
    title: "Sunday worship",
    time: "10:15 AM",
    detail: "In person in west Loveland, followed by fellowship.",
  },
  {
    day: "Tuesdays",
    title: "Youth group",
    time: "6:30 PM",
    detail: "A weekly night for students to connect, learn, and grow.",
  },
  {
    day: "Fridays",
    title: "Men’s group",
    time: "6:00 AM",
    detail: "Early coffee, real conversation, and time in the Word.",
  },
  {
    day: "First Monday",
    title: "Prayer meeting",
    time: "6:30 PM",
    detail: "Gather with us at the church as we pray for one another.",
  },
];

export const links = {
  address:
    "https://www.google.com/maps/search/?api=1&query=5505+West+Highway+34+Loveland+CO",
  donate: "https://godscountrycowboychurch-loveland.com/?page_id=55",
  facebook: "https://www.facebook.com/groups/417097788353025",
  phone: "tel:+19706350044",
  prayer: "https://godscountrycowboychurch-loveland.com/?page_id=272",
  vimeo: "https://vimeo.com/user162492612",
} as const;
