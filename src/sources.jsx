import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaLinkedin, FaXTwitter, FaYoutube,FaLaptopCode} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
]

export const whyChooseMe = [
  {
    title:"Tailored Digital Solutions",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Cutting-Edge Technology",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Results-Driven Approach",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Seamless Collaboration",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"UI/UX Design",
    icon:<FaPaintBrush/>,
    description:`I create intuitive and visually appealing user interfaces, 
    always focusing on user experience. My approach emphasizes simplicity, accessibility, 
    and efficiency to deliver seamless and enjoyable navigation.`,
  },
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`I build modern, high-performance websites, handling both front-end 
    and back-end development using robust technologies like HTML, CSS, JavaScript, Vue.js, 
    and Laravel. My goal is to create scalable, fast, and secure solutions tailored to my clients' needs.`,
  },
  {
    name:"Digital Marketing",
    icon:<TfiWrite/>,
    description:`I help businesses grow their online presence with effective digital marketing strategies. 
    From SEO to managing ad campaigns, I implement solutions that attract, engage, and convert your target audience.`,
  },
  
]


export const skills = [
  {
      title:"UI/UX",
      data:[
          {
              skill:"Figma",
              level:"Experienced",
          },
          {
              skill:"Sketch",
              level:"Intermediate",
          },
          {
              skill:"XD",
              level:"Intermediate",
          },
          {
            skill:"Canva",
            level:"Intermediate",
        },
      ]
  },
  {
      title:"Frontend Development",
      data:[
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"Tailwind",
              level:"Intermediate",
          },
          {
              skill:"Bootstrap",
              level:"Experienced",
          },
          {
              skill:"React",
              level:"Experienced",
          },
          {
              skill:"React Native",
              level:"Experienced",
          },
          {
              skill:"Vue Js",
              level:"Experienced",
          },
          {
              skill:"Next Js",
              level:"Experienced",
          },
      ]
  },
  {
      title:"Backend Development",
      data:[
          {
              skill:"Node JS",
              level:"Experienced",
          },
          {
              skill:"MongoDB",
              level:"Intermediate",
          },
          {
              skill:"PHP",
              level:"Experienced",
          },
          {
              skill:"Python",
              level:"Intermediate",
          },
          {
              skill:"MySQL",
              level:"Experienced",
          },
          {
              skill:"PostgreSql",
              level:"Experienced",
          },
          {
              skill:"Docker",
              level:"Experienced",
          },
          {
              skill:"Jenkins",
              level:"Experienced",
          },
      ]
  },
]


export const projects = [
  { 
    id:1,
    title: 'Portfolio',
    image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
    category:"UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://portfolio-y38t.vercel.app/",
    stack:[
      {
        name:"XD",
        icon: <SiAdobexd/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:2,
    title: 'Post it project',
    image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
    category:"Web",
    description:`Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://postit-rouge-gamma.vercel.app/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:3,
    title: 'Task management and Event calendar',
    image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
    category:"Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://event-calendar-wine.vercel.app",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
      {
        name:"MongoDBT",
        icon: <SiMongodb/>,
      },
      {
        name:"MongoDBT",
        icon: <SiMongodb/>,
      },
      {
        name:"MongoDBT",
        icon: <SiMongodb/>,
      },
    ]
  },
  {
    id:4,
    title: 'Project Management application',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
    category:"Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://commet-six.vercel.app/",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:5,
    title: 'Mobile bank - App Design',
    image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
    category:"UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://stiamond.com/",
    stack:[
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
    ]
  },
  {
    id:6,
    title: 'Quiz App Development',
    image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
    category:"Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
      demoLink: "https://google.com/",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
]

export const clients = [
  {
    image:client1,
    name:'Samuel Eze',
    title: 'RD',
    review:` Great collaboration! Their digital marketing strategy significantly boosted our
     traffic, and their support has been invaluable. Results-driven approach!"`
  },
  {
    image:client2,
    name:'Richael Linda',
    title: 'ENtrepreneur',
    review:` "Amazing work! The website exceeded our expectations and was delivered on time. 
    The team’s attention to detail and commitment to quality made a significant impact."`
  },
  {
    image:client3,
    name:'Gloria Chiwendu',
    title: 'Project Manager',
    review:` Professional, responsive, and results-oriented. The team was always available 
    to answer questions, making the process seamless. Highly recommend!`
  },
  {
    image:client4,
    name:'Precious Stone',
    title: 'Founder of Hello Service',
    review:` They truly understood our needs and delivered a perfect solution. Their ability to adapt
     to our requirements made this collaboration fantastic.`
  },
  {
    image:client5,
    name:'Ndubisi John',
    title: 'Digital Entrepreneur',
    review:`Excellent service and top-notch development skills. The team offered creative solutions and 
    maintained timely communication throughout the project. `
  },

];

export const contactOptions = [
  {
    title:"Email",
    value:"senankpon-josue.kpodekon@epitech.eu",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+229 62937964 - 64306485",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Cotonou, Benin",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Linkedin",
      icon:<FaLinkedin />,
      link:"https://www.linkedin.com/in/senankpon-josue-kpodekon/",
    },
    // {
    //   name:"Facebook",
    //   icon:<FaFacebookSquare/>,
    //   link:"",
    // },
    // {
    //   name:"Twitter",
    //   icon:<FaXTwitter/>,
    //   link:"",
    // },
    // {
    //   name:"Youtube",
    //   icon:<FaYoutube/>,
    //   link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    // },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

    