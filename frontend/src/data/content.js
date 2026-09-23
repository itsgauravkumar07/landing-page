
// Centralised content for the Maldives Escape landing page.
// Swap image URLs / copy here without touching component code.

// Options shown in the "When are you planning to visit?" dropdown on the lead form.
export const travelMonthOptions = [
  "September",
  "October",
  "November",
  "December",
  "Next Year",
];


// Company details used in the header logo and the floating contact icons.
// `icon` is the small round mark shown next to the text in the header
// (frontend/public/favicon.png — same image used as the browser tab icon).
// Replace both numbers with your real company numbers (E.164 format, no
// spaces, for the WhatsApp link).
export const company = {
  name: "Paradise Yatra",
  tagline: "Yatra To Paradise",
  icon: "/favicon.png",
  phoneDisplay: "+91 9873391733", // shown to the user, edit freely
  phoneNumber: "+919873391733", // used in the tel: link, digits + leading +
  whatsappNumber: "919873391733", // used in the wa.me link, digits only, country code, no +
  whatsappDefaultMessage: "Hi! I'm interested in the Maldives package.",
};

export const hero = {
  brand: "Paradise Yatra",
  heading: ["Your Maldives", "Escape Starts Here"],
  bgImage:
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=80",
  priceLabel: "Premium Maldives stays starting from",
  priceValue: "₹1,60,000",
  priceUnit: "for 2 people — couple package",
  ctaLabel: "Get My Maldives Options",
};

export const packageSection = {
  heading: "Maldives Holiday Package",
  media:
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=1400&q=80",
  priceLabel: "Starting from",
  priceValue: "₹1,60,000",
  priceUnit: "for 2 people",
  title: "What We Offer",
  forText: "Price shown is for 2 people (couple).",
  inclusions: [
    {
      title: "Premium Stay",
      desc: "Handpicked premium Maldives resort",
      icon: "stay",
    },
    { title: "Meals", desc: "Meals included as per selected plan", icon: "meals" },
    { title: "Transfers", desc: "Seaplane or speedboat transfers", icon: "transfers" },
    { title: "Water Sports", desc: "Selected water sport activities", icon: "water" },
    {
      title: "Floating Breakfast",
      desc: "The signature Maldives experience",
      icon: "breakfast",
    },
    { title: "Taxes", desc: "All applicable taxes included", icon: "taxes" },
  ],
  note: "Final pricing may vary based on travel dates, availability, accommodation category and number of travelers.",
};

export const experience = {
  heading: "Experience the Maldives",
  subheading:
    "Wake up to crystal-clear lagoons, unwind by the ocean and experience the beauty of a Maldives getaway.",
  tiles: [
    {
      caption: "Water Villas",
      size: "lg",
      img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      caption: "Crystal-Clear Lagoons",
      img: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=800&q=80",
    },
    {
      caption: "Private Beaches",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      caption: "Ocean Views",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    },
    {
      caption: "Sunset",
      img: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=800&q=80",
    },
    {
      caption: "Dining",
      size: "w",
      img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    },
    {
      caption: "Pools",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    },
    {
      caption: "Couple Experiences",
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    },
    {
      caption: "Maldives Scenery",
      size: "w",
      img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

export const reviews = {
  heading: "Real Travelers. Real Experiences.",
  reels: [
    {
      video: "/videos/video1.mp4",
      poster:
        "/poster/poster1.png",
    },
    {
      video: "/videos/video2.mp4",
      poster:
        "/poster/poster2.png",
    },
    {
      video: "/videos/video3.mp4",
      poster:
        "/poster/poster3.png",
    },
    {
      video: "/videos/video4.mp4",
      poster:
        "/poster/poster4.png",
    },
  ],
  photos: [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
  ],
  quotes: [
    {
      text: "We would like to thank Paradise Yatra for the excellent services provided in our Bali honeymoon package. The entire trip was well-organized, comfortable, and truly memorable. From hotel arrangements to sightseeing, everything was handled perfectly.",
      name: "Himanshu Chaudhary",
      avatar:
        "/testimonial_imgs/img1.png",
    },
    {
      text: "Paradise Yatra made our honeymoon truly magical! From the overwater villa to the breathtaking sunsets, every moment felt like a dream. The planning was seamless, the staff was super friendly, and the private beach dinner was a highlight.",
      name: "Gaurav Jha",
      avatar:
        "/testimonial_imgs/img2.png",
    },
    {
      text: "Amazing experience with this company i have booked a honeymoon package of singapore and malaysia with Paradise Yatra trip was well managed by Mr.Dikshant..Thank you so much guys for this amazing experience i highly recommend Paradise Yatra.",
      name: "Sumit Kaintura",
      avatar:
        "/testimonial_imgs/img3.png",
    },
  ],
};

export const finalCta = {
  bgImage:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
  heading: "Ready for Your Maldives Getaway?",
  text: "Tell us your travel requirements and we'll share suitable Maldives options with you.",
  ctaLabel: "Get My Maldives Options",
};

export const footer = {
  brand: "Paradise Yatra",
};