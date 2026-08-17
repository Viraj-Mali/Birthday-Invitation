/**
 * BIRTHDAY PARTY DATA
 * All names, dates, venue details, and content are stored here.
 * To update any information, only edit this file.
 */
export const weddingData = {
  language: "en",

  // Birthday girl info
  birthday: {
    name: "Prisha",
    age: 3,
    ageLabel: "3rd",
    tagline: "Turning THREE! 🎀",
    subtitle: "You're Invited to the Party!",
    mainLine: "Prisha's 3rd Birthday",
    partyDate: "19 September 2026",
    partyTime: "4:00 PM",
    partyDateISO: "2026-09-19T16:00:00+05:30",
    timezone: "Asia/Kolkata",
    hashtag: "#PrishaTurns3",
    blessing: "🎀 A Magical Celebration 🎀",
    emoji: "🎀",
  },

  // Parents and family info (reusing 'couple' key for component compatibility)
  couple: {
    groomName: "Akshay",
    groomFullName: "Akshay",
    groomQualification: "The Cool Dad",
    groomParents: "",
    groomAddress: "",
    brideName: "Pallavi",
    brideFullName: "Pallavi",
    brideQualification: "The Awesome Mom",
    brideParents: "",
    brideAddress: "",
    birthdayGirlName: "Prisha",
    birthdayGirlAge: "3",
    birthdayGirlNote: "She loves balloons, candy & dancing! 🎈",
  },

  // Reusing 'wedding' key for component compatibility
  wedding: {
    title: "Birthday Invitation",
    subtitle: "You're Invited to the Party!",
    mainLine: "Prisha Turns 3! 🎀",
    weddingDate: "19 September 2026",
    weddingTime: "4:00 PM",
    weddingDateISO: "2026-09-19T16:00:00+05:30",
    timezone: "Asia/Kolkata",
    hashtag: "#PrishaTurns3",
    blessing: "🎈 Come Celebrate With Us! 🎈",
  },

  venue: {
    name: "Yashobhoomi Society",
    address: "Alokapuram Road, Wadmukhwadi, Charoli",
    city: "Pimpri Chinchwad, Pune",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Yashobhoomi+Society+Charoli+Pune",
    mapSearch: "https://www.google.com/maps/search/?api=1&query=Yashobhoomi+Society+Charoli+Pune",
  },

  // Party schedule / activities
  events: [
    {
      id: "arrival",
      title: "Welcome & Games",
      icon: "🎮",
      date: "Saturday, 19 September 2026",
      time: "4:00 PM",
      venue: "Yashobhoomi Society",
      isoDate: "2026-09-19T16:00:00+05:30",
      calendarTitle: "Prisha's 3rd Birthday Party",
      illustration: "",
      description: "Fun games, activities & balloon time!",
    },
    {
      id: "cake",
      title: "Cake Cutting 🎂",
      icon: "🎂",
      date: "Saturday, 19 September 2026",
      time: "5:30 PM",
      venue: "Yashobhoomi Society",
      isoDate: "2026-09-19T17:30:00+05:30",
      calendarTitle: "Cake Cutting – Prisha's Birthday",
      illustration: "",
      description: "The sweetest moment of the evening!",
    },
    {
      id: "dinner",
      title: "Dinner & Dance 🕺",
      icon: "🍽️",
      date: "Saturday, 19 September 2026",
      time: "6:30 PM",
      venue: "Yashobhoomi Society",
      isoDate: "2026-09-19T18:30:00+05:30",
      calendarTitle: "Dinner – Prisha's Birthday",
      illustration: "",
      description: "Food, fun & dancing the night away!",
    },
  ],

  invitationMessage:
    "With hearts full of joy, we invite you and your little ones to celebrate our daughter's 3rd birthday! Come join us for a magical afternoon of fun, laughter, cake, and lots of sweet memories. Your presence will make this day extra special! 🎀🎈",

  family: {
    heading: "Hosted By",
    mainLine: "Our Loving Family",
    members: [
      { name: "Pallavi (Mama)", phone: "8308988641" },
      { name: "Akshay (Papa)", phone: "9168100071" },
      { name: "Dada & Dadi", phone: "" },
      { name: "Nana & Nani", phone: "" },
      { name: "All Our Dear Relatives", phone: "" },
    ],
  },

  footerLine: "We can't wait to celebrate with you! See you at the party! 🎉",

  assets: {
    music: "/music/wedding-music.mp3",
    ganpatiImage: "",
    weddingCard: "",
    groomPhoto: "",
    bridePhoto: "",
    birthdayGirlPhoto: "",
    galleryImages: [],
  },

  share: {
    whatsappText:
      "🎉 You're invited to Prisha's 3rd Birthday Party! 🎀\n19 September 2026 | 4:00 PM | Yashobhoomi Society, Pune\nCome celebrate and make memories! 🎈\n",
    websiteUrl: "https://birthday-invitation-pink.vercel.app/",
  },

  seo: {
    title: "Prisha's 3rd Birthday 🎀 | You're Invited!",
    description:
      "You are invited to celebrate Prisha's 3rd Birthday on 19 September 2026 at Yashobhoomi Society, Pune.",
    ogImage: "/images/og-preview.jpeg",
  },
};
