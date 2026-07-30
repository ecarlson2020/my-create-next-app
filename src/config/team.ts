export interface TeamMember {
  name: string;
  /** Monogram shown if the generated headshot assets are unavailable. */
  initials: string;
  role: string;
  /** Manifest key for the responsive portrait assets. */
  image: string;
  imageAlt: string;
  bio: string[];
}

export const teamIntro =
  "Two people, one standard. Every celebration we take on is led personally — never handed off.";

export const teamMembers: TeamMember[] = [
  {
    name: "Peter Ktestakis",
    initials: "PK",
    role: "Owner + Lead Planner",
    image: "team-peter",
    imageAlt: "Peter Ktestakis, owner and lead planner at Planned by Peter",
    bio: [
      "Peter is at the helm of your wedding planning experience! He brings years of wedding industry experience and leadership management. As your experienced event planner, he specializes in ensuring every facet of your wedding unfolds flawlessly, from the initial vision meeting through the final guest departure. He is dedicated to creating unforgettable experiences through seamless coordination, organization and detail-oriented planning.",
      "Drawing on an extensive network of elite vendors and venues, Peter handles every behind-the-scenes detail so you can stay present, relaxed, and fully immersed in your celebration. With Peter at the helm, your day is not just expertly managed but rather meticulously orchestrated for elegance, ease, and unforgettable joyous moments.",
    ],
  },
  {
    name: "Emily Twohig",
    initials: "ET",
    role: "Lead Designer",
    image: "team-emily",
    imageAlt: "Emily Twohig, lead designer at Planned by Peter",
    bio: [
      "As the Lead Designer at Planned by Peter, Emily brings over five years of experience in the wedding industry and a strong background in project management, allowing her to create celebrations that are both visually extraordinary and flawlessly executed. She believes the way you and your guests feel throughout your wedding is shaped by the visual experience. The colors, textures, lighting, florals, and every detail set the tone for your day.",
      "Weddings are among life's most important moments, and your design should reflect that significance with something truly showstopping. Her approach blends refined aesthetics with intentional storytelling, guiding each design from initial inspiration to its final breathtaking reveal so your celebration feels unforgettable in every sense.",
    ],
  },
];
