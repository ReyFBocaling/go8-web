import {
  Blocks,
  Brain,
  Briefcase,
  Code,
  Code2,
  CreditCard,
  Gem,
  Laptop,
  Target,
} from "lucide-react";
import { facebook, instagram, twitter, arcus_img, aurum_img } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "About",
    title: "About Us",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Projects",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "IT Developers",
    value: "12",
  },
  {
    id: "stats-2",
    title: " Company Providers",
    value: "20+",
  },
];
export const vissionMission = [
  {
    id: "stats-1",
    title: "Our Mission",
    value:
      "To empower businesses to thrive in the digital age, leveraging cutting-edge technologies towards growth, productivity, and efficiency+",
  },
  {
    id: "stats-2",
    title: "Our Vision",
    value:
      "To be the foremost business solutions provider to small and medium scale corporations in the country and abroad.",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "/",
      },
      {
        name: "How it Works",
        link: "",
      },
      {
        name: "Create",
        link: "",
        link: "",
      },

      {
        name: "Explore",
        link: "",
      },
      {
        name: "Terms & Services",
        link: "",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Partners",
        link: "",
      },
      {
        name: "Suggestions",
        link: "",
      },
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Newsletters",
        link: "",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "",
      },
      {
        name: "Become a Partner",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
  },
];

export const services_ = [
  {
    title: "Hardware Technology",
    description:
      "Providing high-quality hardware solutions and support, tailored to enhance your business operations with reliable and efficient technology.",
    icon: Laptop,
  },
  {
    title: "Digital Marketing",
    description:
      "Crafting innovative digital marketing strategies to boost your online presence, engage your target audience, and drive measurable business growth.",
    icon: Target,
  },
  {
    title: "Software Development",
    description:
      "Designing and developing customized software solutions to address specific business challenges and enhance operational efficiency.",
    icon: Code,
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance to help businesses identify, implement, and optimize IT strategies that align with their goals, ensuring maximum efficiency and success in the digital space.",
    icon: Briefcase,
  },
  {
    title: "Digital Cards Solution",
    description:
      "Offering modern, secure, and innovative digital card solutions for businesses to streamline transactions and elevate customer experience.",
    icon: CreditCard,
  },
  {
    title: "Strategic Consulting & Coaching",
    description:
      "Delivering insights and personalized coaching to help businesses develop clear strategies, improve decision-making, and achieve sustainable success.",
    icon: Brain,
  },
];

// careers
export const positions = [
  {
    id: 1,
    title: "Game Developer (Unity)",
    department: "Game Development",
    location: "On-site",
    type: "Full-time",
    description:
      "Join our game development team to create immersive experiences using Unity. Work on cutting-edge gaming projects and help shape the future of interactive entertainment.",
  },
  {
    id: 2,
    title: "Junior Web Developer",
    department: "Web Development",
    location: "On-site",
    type: "Intern",
    description:
      "Start your career in web development with hands-on experience in modern frameworks and technologies. Work alongside senior developers and contribute to real-world projects.",
    level: "Entry Level",
  },
];

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in cutting-edge technologies including Artificial Intelligence, Quantum Computing, Blockchain, and Neural Interfaces. Our expertise spans both hardware and software development, with a particular focus on emerging technologies that will shape the future of computing.",
  },
  {
    question: "How do you approach project development?",
    answer:
      "Our development process follows an agile methodology with a strong emphasis on innovation and scalability. We begin with thorough research and prototyping, followed by iterative development cycles that incorporate continuous feedback and optimization.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across multiple sectors including Healthcare, Finance, Manufacturing, and Research Institutions. Our solutions are tailored to meet the specific needs of each industry while maintaining our commitment to pushing technological boundaries.",
  },
  {
    question: "How do you ensure project security?",
    answer:
      "Security is paramount in all our projects. We implement multiple layers of protection including quantum-resistant encryption, advanced authentication systems, and regular security audits. Our team stays updated with the latest security protocols and best practices.",
  },
  {
    question: "What support do you offer after project completion?",
    answer:
      "We provide comprehensive post-deployment support including 24/7 monitoring, regular maintenance updates, and dedicated technical support. Our team remains available for consultations and feature enhancements as your needs evolve.",
  },
];

export const projects = [
  {
    id: 1,
    title: "ARCUS",
    description:
      "Massively Multiplayer Online (MMO) Action Game concept, Arcus uses Bow and Arrows as weapons and blockchain technology to reward the players.",
    category: "Game Development",
    image: arcus_img,
    icon: Code2,
  },
  {
    id: 2,
    title: "AURUM NETWORK",
    description:
      "Aurum Network ($AUN) is redefining financial empowerment by making gold the core pillar of modern wealth-building strategies. Through cutting-edge blockchain technology, Aurum transcends the traditional 'buy and hold' approach to gold ownership, transforming it into a dynamic.",
    category: "Blockchain Development",
    image: aurum_img,
    icon: Blocks,
  },
  {
    id: 3,
    title: "",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus dolore veritatis repellat iusto in. Vero molestias suscipit nisi sequi.",
    category: "Test",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    icon: Gem,
  },
  {
    id: 4,
    title: "",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus dolore veritatis repellat iusto in. Vero molestias suscipit nisi sequi.",
    category: "Test",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    icon: Gem,
  },
];
