export interface Service {
  slug: string;
  title: string;
  /** Display string for the starting investment. */
  price: string;
  summary: string;
  body: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
}

export const servicesIntro =
  "Three levels of support, each led personally by our team. Whether you are starting from a blank page or handing over the final month, the standard of execution does not change.";

export const services: Service[] = [
  {
    slug: "full-wedding-planning",
    title: "Full Wedding Planning",
    price: "Investment starting at $5,000",
    summary:
      "A comprehensive, high-touch experience for couples who want exceptional service, elevated design, and complete peace of mind.",
    body: [
      "Our Full Wedding Planning Package is a comprehensive, high-touch experience designed for couples who want exceptional service, elevated design, and complete peace of mind. We take the time to understand your vision and transform it into a cohesive, beautifully curated celebration through intentional design, trusted vendor partnerships, and meticulous logistical planning.",
      "Throughout the entire process, you receive personalized guidance, unlimited communication, and a seamless planning journey supported by professional expertise. On the wedding day, our team oversees every detail — from the flow of the event to the execution of your design — ensuring the entire experience feels effortless, immersive, and truly unforgettable. This is wedding planning at its finest, allowing you to be fully present while we handle everything behind the scenes with precision and artistry.",
    ],
    highlights: [
      "Full design direction + visual mockups",
      "Vendor sourcing and management",
      "Unlimited communication",
      "Complete timeline + logistics",
      "Full onsite team on wedding day",
    ],
    image: "service-full",
    imageAlt:
      "A long outdoor reception table set with greenery and candlelight",
  },
  {
    slug: "month-of-coordination",
    title: "Month of Wedding Planning",
    price: "Investment starting at $2,300",
    summary:
      "For couples who have managed most of their planning but want a professional team to bring everything together seamlessly.",
    body: [
      "Our Month-Of Coordination Package is designed for couples who have managed most of their planning but want the expertise of a professional team to bring everything together seamlessly. In the weeks leading up to your wedding, we step in to finalize details, confirm vendors, refine your timeline, and ensure every element is aligned.",
      "We provide support with RSVPs, seating, rehearsal oversight, design setup and ensure every partner involved knows exactly what to expect. On the wedding day, we manage arrivals, direct the flow of events, oversee décor placement, and handle any challenges quietly behind the scenes, allowing you to relax and enjoy the celebration you worked so hard to plan. It's a blend of support and expertise, giving you confidence and calm during one of the most meaningful moments of your life.",
    ],
    highlights: [
      "Vendor confirmation + coordination",
      "RSVP and seating support",
      "Timeline refinement",
      "Rehearsal oversight",
      "Full wedding-day management",
    ],
    image: "service-month-of",
    imageAlt: "A draped ivory reception space with soft floral arrangements",
  },
  {
    slug: "day-of-coordination",
    title: "Day of Wedding Planning",
    price: "Investment starting at $1,900",
    summary:
      "For couples who have planned their wedding but want a professional team to oversee the details and ensure the day runs flawlessly.",
    body: [
      "Our Day-Of Coordination Package is designed for couples who have planned their wedding but want a professional team to oversee the details and ensure the day runs flawlessly. We step in shortly before the event to manage your timeline, direct vendor arrivals, and oversee setup so your vision is executed exactly as you imagined.",
      "Throughout the celebration, we supervise tasks, guide transitions, and handle any unexpected needs with calm precision while you focus on being fully present. With expert event oversight and discreet behind-the-scenes management, you can enjoy a seamless, stress-free wedding day knowing every detail is cared for.",
    ],
    highlights: [
      "Timeline management",
      "Vendor arrival direction",
      "Setup + décor oversight",
      "Discreet problem solving",
      "Present from setup to send-off",
    ],
    image: "service-day-of",
    imageAlt: "A white aisle lined with florals inside a light-filled venue",
  },
];
