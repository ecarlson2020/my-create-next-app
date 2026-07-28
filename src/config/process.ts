export interface ProcessStep {
  number: string;
  title: string;
  /** Short label for the home-page teaser. */
  short: string;
  body: string;
  image: string;
  imageAlt: string;
}

export const processIntro = [
  "Our planning process is designed to create a wedding experience that feels effortless, personal, and beautifully orchestrated. From our first conversation to the final send-off, we take the time to understand your story, define your vision, and handle every logistical and design detail with precision.",
  "Guided by trusted vendor relationships and a commitment to elevated service, we curate a seamless journey that allows you to feel supported, informed, and fully present at every stage. This is where intention meets expertise and where your unforgettable celebration begins.",
] as const;

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovering your love story",
    short: "Discover",
    body: "Creating an exceptional wedding begins with truly understanding who you are; your story, your style, and the moments that matter most. During our planning process, we take time to learn your priorities, your personalities, and how you want your day to feel, ensuring every detail is thoughtfully tailored to you. From your initial consultation to design discovery and beyond, this part of the journey allows us to build a celebration that feels deeply personal, beautifully intentional, and unmistakably yours.",
    image: "process-1",
    imageAlt: "A couple embracing against Utah red rock at golden hour",
  },
  {
    number: "02",
    title: "Curating an intentional design",
    short: "Design",
    body: "In this stage, we transform your inspiration, preferences, and wedding-day vision into a cohesive, elevated design plan. Through thoughtful conversation and detailed visual mockups, we curate every aesthetic element from color palettes and textures to florals, décor, and spatial flow. We ensure each choice feels purposeful and true to your story. This is where your vision becomes tangible, allowing you to clearly envision the experience we'll bring to life on your wedding day.",
    image: "process-2",
    imageAlt:
      "A flat lay of a wedding invitation suite with florals and gold detailing",
  },
  {
    number: "03",
    title: "Managing timelines + logistics",
    short: "Coordinate",
    body: "With a clear understanding of your vision, we create a personalized timeline that reflects the flow, pacing, and atmosphere you want for your wedding day. Each moment is intentionally structured not just for organization, but to support the experience you want to share with your guests. We manage vendor communication, anticipate logistical needs, and maintain a detailed tracking spreadsheet to keep every task, deadline, and moving part aligned throughout the planning journey. This stage brings clarity and confidence to your celebration, ensuring the day feels calm, seamless, and fully supported so you can enjoy every moment without distraction.",
    image: "process-3",
    imageAlt:
      "A round reception table set with gold chiavari chairs and white florals",
  },
  {
    number: "04",
    title: "Vendor sourcing",
    short: "Source",
    body: "After gaining a clear understanding of your aesthetic and priorities, we thoughtfully select vendors who elevate your vision and complement the atmosphere you want to create. Our relationships with top florists, photographers, caterers, and creative partners allow us to curate a highly skilled team known for exceptional service and artistry. We manage introductions, confirm availability, and provide tailored recommendations so that every professional involved is not only distinguished in their field but also the right fit for your celebration. This step ensures your wedding is supported by a cohesive group of experts who bring elegance, consistency, and excellence to every detail.",
    image: "process-4",
    imageAlt: "A tiered white wedding cake with sculptural sugar florals",
  },
  {
    number: "05",
    title: "Bringing it all together",
    short: "Celebrate",
    body: "Our team is onsite from the very beginning, overseeing setup, guiding vendors, managing the timeline, and ensuring every moment unfolds with ease and precision. We handle the logistics quietly and confidently in the background so you can move through the day fully present, relaxed, and surrounded by the people you love. This is the moment where your vision becomes an unforgettable experience and we're there to make sure it feels seamless, elegant, and entirely yours.",
    image: "process-5",
    imageAlt:
      "A couple entering their reception beneath a glowing crystal chandelier",
  },
];
