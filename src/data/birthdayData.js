/**
 * BIRTHDAY PARTY DATA
 * All names, dates, venue details, and content are stored here.
 * To update any information, only edit this file.
 */
export const weddingData = {
  language: "en",

  // Birthday girl info
  birthday: {
    name: "Little Princess",
    age: 3,
    ageLabel: "3rd",
    tagline: "Turning THREE! 🎀",
    subtitle: "You're Invited to the Party!",
    mainLine: "Little Princess's 3rd Birthday",
    partyDate: "19 September 2026",
    partyTime: "4:00 PM",
    partyDateISO: "2026-09-19T16:00:00+05:30",
    timezone: "Asia/Kolkata",
    hashtag: "#PrincessTurns3",
    blessing: "🎀 A Magical Celebration 🎀",
    emoji: "🎀",
  },

  // Parents and family info (reusing 'couple' key for component compatibility)
  couple: {
    groomName: "Papa",
    groomFullName: "Papa",
    groomQualification: "The Cool Dad",
    groomParents: "",
    groomAddress: "",
    brideName: "Mama",
    brideFullName: "Mama",
    brideQualification: "The Awesome Mom",
    brideParents: "",
    brideAddress: "",
    birthdayGirlName: "Little Princess",
    birthdayGirlAge: "3",
    birthdayGirlNote: "She loves balloons, candy & dancing! 🎈",
  },

  // Reusing 'wedding' key for component compatibility
  wedding: {
    title: "Birthday Invitation",
    subtitle: "You're Invited to the Party!",
    mainLine: "Little Princess Turns 3! 🎀",
    weddingDate: "19 September 2026",
    weddingTime: "4:00 PM",
    weddingDateISO: "2026-09-19T16:00:00+05:30",
    timezone: "Asia/Kolkata",
    hashtag: "#PrincessTurns3",
    blessing: "🎈 Come Celebrate With Us! 🎈",
  },

  venue: {
    name: "Party Venue Hall",
    address: "123 Candy Lane, Fun Street",
    city: "Your City",
    mapLink: "https://maps.google.com",
    mapSearch: "https://www.google.com/maps/search/?api=1&query=Party+Venue",
  },

  // Party schedule / activities
  events: [
    {
      id: "arrival",
      title: "Welcome & Games",
      icon: "🎮",
      date: "Saturday, 19 September 2026",
      time: "4:00 PM",
      venue: "Party Venue Hall",
      isoDate: "2026-09-19T16:00:00+05:30",
      calendarTitle: "Little Princess's 3rd Birthday Party",
      illustration: "",
      description: "Fun games, activities & balloon time!",
    },
    {
      id: "cake",
      title: "Cake Cutting 🎂",
      icon: "🎂",
      date: "Saturday, 19 September 2026",
      time: "5:30 PM",
      venue: "Party Venue Hall",
      isoDate: "2026-09-19T17:30:00+05:30",
      calendarTitle: "Cake Cutting – Little Princess's Birthday",
      illustration: "",
      description: "The sweetest moment of the evening!",
    },
    {
      id: "dinner",
      title: "Dinner & Dance 🕺",
      icon: "🍽️",
      date: "Saturday, 19 September 2026",
      time: "6:30 PM",
      venue: "Party Venue Hall",
      isoDate: "2026-09-19T18:30:00+05:30",
      calendarTitle: "Dinner – Little Princess's Birthday",
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
      { name: "Papa & Mama", phone: "" },
      { name: "Dada & Dadi", phone: "" },
      { name: "Nana & Nani", phone: "" },
      { name: "Uncle & Aunty", phone: "" },
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
      "🎉 You're invited to Little Princess's 3rd Birthday Party! 🎀\n19 September 2026 | 4:00 PM | Party Venue Hall\nCome celebrate and make memories! 🎈\n",
    websiteUrl: "https://princess-birthday.vercel.app/",
  },

  seo: {
    title: "Little Princess's 3rd Birthday 🎀 | You're Invited!",
    description:
      "You are invited to celebrate Little Princess's 3rd Birthday on 19 September 2026 at Party Venue Hall.",
    ogImage: "/images/og-preview.jpeg",
  },
};
