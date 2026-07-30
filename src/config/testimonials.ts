export interface Testimonial {
  quote: string;
  couple: string;
}

/**
 * Real reviews carried over from the client's current site. Obvious typos in the
 * transcription there ("Thye", "inssgle", "receptoin") are corrected here;
 * nothing else about the wording is changed.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Peter and Emily are the dream team and really understood our wants, needs and the vision from the get-go. They put thought into every single detail from tricky logistics to design ideas. They were both extremely communicative during the whole process and I was never once stressed out on the day of our wedding or even the months leading up to it. I also had multiple guests compliment the reception space, stating it was the most breathtaking setup they've ever seen, and I would agree!!!",
    couple: "Amanda + Shane",
  },
  {
    quote:
      "If there was a 10 star option, I would give Peter 10 stars! We had a destination wedding and he made sure EVERYTHING was perfect. He is so well organized and professional. I honestly could not have done this without him and his designer Emily. Such a joy to work with them. Best wedding planner ever. Thank you Peter and Emily for making our wedding the most memorable day ever.",
    couple: "Hilary + Brian",
  },
  {
    quote:
      "Peter is AMAZING! He went above and beyond for us. I don't have the words to explain! Everyone mentioned how great he was! We didn't have to worry about anything throughout our wedding or even the days leading up to it. We have nothing but positive things to say about him. Every bride needs a Peter! Hire him!! You will be so happy and grateful!!",
    couple: "Cole + Megan",
  },
];
