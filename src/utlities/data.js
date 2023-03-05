import Person1 from "../assets/avatar-nikita.jpg";
import Person2 from "../assets/avatar-christian.jpg";
import Person3 from "../assets/avatar-cruz.jpg";
import Person4 from "../assets/avatar-drake.jpg";
import Person5 from "../assets/avatar-griffin.jpg";
import Person6 from "../assets/avatar-aden.jpg";

// Client companies
import Now from "../assets/logo-gadgets-now.png";
import Radar from "../assets/logo-tech-radar.png";
import Gardian from "../assets/logo-the-guardian.png";
import Post from "../assets/logo-jakarta-post.png";
import Verge from "../assets/logo-the-verge.png";

// 
import Kayda from "../assets/avatar-kady.jpg";
import Aiysha from "../assets/avatar-aiysha.jpg";
import Arthur from "../assets/avatar-arthur.jpg";



import IconPerson from "../assets/icon-person.svg";
import IconChart from "../assets/icon-chart.svg";
import IconCog from "../assets/icon-cog.svg";
// Links
export const menus = [
  {
    name: "home",
    value: "/",
  },
  {
    name: "about",
    value: "/about",
  },
];
// about data
export const aboutData = [
  {
    name: "Nikita Marks",
    profile: Person1,
    profession: "Founder & CEO",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    mediaLinks: ["faceBook", "twitter"],
  },
  {
    name: "Cristian Duncan",
    profession: "Co-founder & COO",
    profile: Person2,
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    mediaLinks: ["faceBook", "twitter"],
  },
  {
    name: "Cruz Hamer",
    profession: "Co-founder & CTO",
    profile: Person3,
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    mediaLinks: ["faceBook", "twitter"],
  },
  {
    name: "Drake Heaton",
    profile: Person4,
    profession: "Business Development Lead",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    mediaLinks: ["faceBook", "twitter"],
  },
  {
    name: "Griffin Wise",
    profile: Person5,
    profession: "Lead Marketing",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    mediaLinks: ["faceBook", "twitter"],
  },
  {
    name: "Aden Allan",
    profile: Person6,
    profession: "Lead Marketing",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    mediaLinks: ["faceBook", "twitter"],
  },
];

// client companies

export const clientCompanies = [
  {
    id: 1,
    name: "The Verge",
    imageSrc: Verge,
    altText: "The Verge",
  },
  {
    id: 2,
    name: "The Jakarta Post",
    imageSrc: Post,
    altText: "The Jakarta Post",
  },
  {
    id: 3,
    name: "The Gardian",
    imageSrc: Gardian,
    altText: "The Gardian",
  },
  {
    id: 4,
    name: "Thech Radar",
    imageSrc: Radar,
    altText: "Thech Radar",
  },
  {
    id: 5,
    name: "Gadgets Now",
    imageSrc: Now,
    altText: "Gadgets Now",
  },
];

//  
export const fakeData = [
    {
      icon: IconPerson,
      title: "Experienced Individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
    },
    {
      icon: IconCog,
      title: "Easy to Implement",
      description:
        "Our processes have been refined over years of implementation meaning our teams always deliver.",
    },
    {
      icon: IconChart,
      title: "Enhanced Productivity",
      description:
        "Our customized platform with in-built analytics helps you manage your distributed teams.",
    },
  ];
export const contactFakeData = [
  {
    icon: IconPerson,
    title: "Experienced Individuals",
    description: "The quality of our talent network",
  },
  {
    icon: IconCog,
    title: "Easy to Implement",
    description: "Usage & implementation of our software",
  },
  {
    icon: IconChart,
    title: "Enhanced Productivity",
    description: "How we help drive innovation",
  },
];

  // Stories 
   export const storiesData = [
     {
       quote:
         " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
       author: "Kady Baker",
       role: "Product Manager at Bookmark",
       image: Kayda,
     },
     {
       quote:
         "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
       author: "Aiysha Reese",
       role: "Founder of Manage",
       image: Aiysha,
     },
     {
       quote:
         "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
       author: "Arthur Clarke",
       role: "Co-founder of MyPhysio",
       image: Arthur,
     },
   ];