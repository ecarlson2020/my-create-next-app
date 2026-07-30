export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "credit"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** Shown on cards and in the post header. */
  date: string;
  /** ISO form for <time> and JSON-LD. */
  isoDate: string;
  readingTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  blocks: PostBlock[];
}

/**
 * The client's two published posts, carried over verbatim. Structured as blocks
 * rather than an HTML string so the type scale stays under the site's control.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "little-sahara-sand-dunes-wedding",
    title:
      "Thad and Aren's Little Sahara Sand Dunes Wedding | Utah Desert Elopement Inspiration",
    date: "June 25",
    isoDate: "2026-06-25",
    readingTime: "3 min read",
    excerpt:
      "Miles of rolling sand dunes, a crystal chandelier carried up by hand, and a design built to let the landscape stay the focal point.",
    image: "blog-dunes",
    imageAlt:
      "A crystal chandelier suspended above a table set on the sand dunes at dusk",
    blocks: [
      {
        type: "p",
        text: "If you've ever dreamed of getting married somewhere that feels completely removed from the world, Little Sahara Sand Dunes might be one of Utah's best-kept secrets. Located in central Utah, Little Sahara offers miles of rolling sand dunes, incredible sunsets, and a landscape that feels unlike anywhere else in the state. It's quiet, dramatic, and the perfect backdrop for couples who want an intimate wedding with a high-end design that still feels connected to nature.",
      },
      {
        type: "p",
        text: "For this desert elopement, the vision was simple: create a space that felt elegant without taking away from the landscape. Every design choice was made with the dunes in mind, proving that you don't need an over-the-top installation to make a statement.",
      },
      { type: "h2", text: "A Design Inspired by the Desert" },
      {
        type: "p",
        text: "The color palette focused on timeless black and white with warm candlelight to complement the natural tones of the sand. The couple wore custom suits by one of our favorite Utah-based custom suit companies, Suit Up, bringing a classic, tailored look that felt right at home in the desert.",
      },
      {
        type: "p",
        text: "One of our favorite design elements was the crystal chandelier suspended above the cake cutting table. Paired with a custom-designed cake and hundreds of flickering candles, it created an unexpected contrast against the rugged landscape. It felt refined without feeling out of place. Rather than filling the space with décor, we focused on a handful of statement pieces that allowed the scenery to remain the focal point.",
      },
      {
        type: "credit",
        text: "Planning & Design: Planned by Peter | Photography: Ava J Photo",
      },
      { type: "h2", text: "What You Don't See in the Photos" },
      {
        type: "p",
        text: "As beautiful as the finished design was, getting everything into place was the biggest challenge of the day.",
      },
      {
        type: "p",
        text: "Our ceremony and reception location sat at the top of one of the larger dunes. There were no roads leading to the site, which meant every single item had to be carried up the hill by hand. Tables, chairs, décor, candles, rentals, the custom cake, and even the chandelier made the trip through deep sand. It took careful planning, multiple trips, and an incredible vendor team to bring the vision to life.",
      },
      {
        type: "p",
        text: "This is one of the biggest differences between planning a traditional wedding venue and planning a desert elopement. The logistics become just as important as the design. When we scout locations like this, we're thinking about much more than the view. We're considering vendor access, setup timelines, sunset, wind, transportation, and how to create a seamless experience in a place that doesn't have the conveniences of a traditional venue.",
      },
      { type: "h2", text: "Why You Should Have an Elopement or Micro-Wedding" },
      {
        type: "p",
        text: "Elopements or micro-weddings give couples the opportunity to slow down. Without the distractions of a large venue or packed timeline, the focus stays where it belongs: on the experience and on each other.",
      },
      {
        type: "p",
        text: "If you're considering a micro-wedding or an elopement, working with an experienced planner can make all the difference. Remote locations require additional planning, from securing permits and coordinating vendors to building realistic timelines and managing setup in challenging conditions. While those details happen behind the scenes, they're what allow your wedding day to feel effortless.",
      },
      {
        type: "p",
        text: "At Planned by Peter Weddings & Events, we love helping couples bring unique wedding visions to life, especially in places that require a little extra creativity and a lot of thoughtful planning. If you're dreaming of an upscale wedding in Utah, we'd love to help you create something that's both beautiful and unforgettable.",
      },
    ],
  },
  {
    slug: "how-far-in-advance-utah-destination-wedding",
    title: "How Far in Advance Should You Plan a Utah Destination Wedding?",
    date: "May 28",
    isoDate: "2026-05-28",
    readingTime: "2 min read",
    excerpt:
      "For most luxury weddings, twelve to eighteen months is the ideal planning timeline — and the reason has less to do with logistics than with ease.",
    image: "blog-timeline",
    imageAlt:
      "A sweetheart table set with florals overlooking the Utah mountains",
    blocks: [
      {
        type: "p",
        text: "One of the biggest misconceptions about luxury weddings is that they come together quickly.",
      },
      {
        type: "p",
        text: "In reality, the most elevated celebrations almost always begin with time. Time to secure the right venue, build the right creative team, and create a wedding weekend that feels intentional rather than rushed.",
      },
      {
        type: "p",
        text: "At Planned By Peter, we are seeing couples begin planning destination weddings in Utah, Park City, and Deer Valley earlier than ever before, especially for highly curated wedding weekends and luxury resort celebrations. For most luxury weddings, 12–18 months is the ideal planning timeline.",
      },
      { type: "h2", text: "Utah Venues Book Earlier Than Most Couples Expect" },
      {
        type: "p",
        text: "One of the first things couples realize after getting engaged is how quickly sought-after venues disappear.",
      },
      {
        type: "p",
        text: "Properties like St. Regis Deer Valley, Blue Sky Auberge Resorts, Montage Deer Valley, and other luxury wedding venues throughout Utah often secure prime dates well over a year in advance, especially during ski season and fall wedding weekends. For destination weddings, the venue shapes nearly every part of the experience. It influences the atmosphere, guest experience, design direction, and overall flow of the weekend itself. The earlier couples secure the venue, the more intentional the rest of the planning process becomes.",
      },
      {
        type: "h2",
        text: "The Best Weddings Begin With the Right Creative Team",
      },
      {
        type: "p",
        text: "Luxury weddings feel cohesive because every creative element contributes to the same overall atmosphere and guest experience. One of the biggest advantages of beginning the planning process earlier is having the flexibility to build a creative team intentionally rather than reactively. When couples have time on their side, they are able to select partners whose work, aesthetic, and approach align naturally with the vision of the wedding weekend itself. That level of alignment is often what transforms a wedding from simply beautiful into something that feels immersive, elevated, and deeply personal from beginning to end.",
      },
      {
        type: "h2",
        text: "Destination Wedding Weekends Require More Intention",
      },
      {
        type: "p",
        text: "Luxury destination weddings naturally involve more than a ceremony and reception.",
      },
      {
        type: "p",
        text: "Welcome parties, elevated guest experiences, rehearsal dinners, accommodations, transportation, and farewell gatherings all become part of the overall experience. The goal is not simply to host an event, but to create a wedding weekend that feels effortless for everyone attending. That level of ease only happens when there is enough time to plan thoughtfully.",
      },
      {
        type: "h2",
        text: "The Earlier You Begin, The More Enjoyable The Process",
      },
      {
        type: "p",
        text: "Couples often assume starting earlier will make wedding planning feel overwhelming.",
      },
      {
        type: "p",
        text: "In reality, the opposite is usually true. When there is time to plan intentionally, decisions feel calmer, design feels more cohesive, and the entire experience becomes significantly more enjoyable. Instead of reacting to limited availability, couples are able to focus on creating a celebration that genuinely reflects how they want the weekend to feel. That is often what defines luxury most clearly: not excess, but ease.",
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "For destination weddings in Utah, Park City wedding weekends, and luxury celebrations designed with intention, starting the planning process 12–18 months in advance creates the greatest flexibility and the strongest overall experience. At Planned By Peter, we specialize in luxury destination weddings and elevated wedding weekends throughout Utah that feel immersive, timeless, and deeply personal to each couple. Whether planning a winter wedding in Deer Valley or an editorial-inspired celebration elsewhere in Utah, our approach is always rooted in thoughtful design, elevated hospitality, and intentional guest experience.",
      },
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
