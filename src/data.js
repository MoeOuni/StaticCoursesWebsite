import devImg from "./Assets/pngegg.png";
import backImg from "./Assets/php_cover.jpg";
import uxImg from "./Assets/ux_ui-01-3.jpg";
import ethImg from "./Assets/eth-hc.jpg";
import sceImg from "./Assets/sc-eng.jpg";
import figImg from "./Assets/figma.png";

export const courses = [
  {
    idx: 1001,
    name: "Web Development essentials",
    instructor: "Alex",
    price: 190,
    discount: 50,
    bio: "This is a pack that contains the essentials of web development, you will learn Basic HTML, Basic CSS and JavaScript(JS), and in the final lesson you will create a full static website with this technologies ",
    lessons: 12,
    startDate: "01/02/2022",
    image: devImg,
  },
  {
    idx: 1002,
    name: "Backend development",
    instructor: "Alex",
    price: 130,
    discount: 50,
    bio: "Backend development focuses on the functionality of the website unlike the frontend where it focus on the design and the layout it's crucial to know the basics of it, you will learn it using the PHP programing language.",
    lessons: 8,
    startDate: "01/02/2022",
    image: backImg,
  },
  {
    idx: 1003,
    name: "UX/UI Designing",
    instructor: "Amir",
    price: 230,
    discount: 10,
    bio: "Use Abdobe XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design",
    lessons: 14,
    startDate: "02/03/2022",
    image: uxImg,
  },
  {
    idx: 1004,
    name: "Learn Ethical Hacking From Scratch",
    instructor: "Amal",
    price: 420,
    discount: 0,
    bio: "Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts",
    lessons: 24,
    startDate: "01/03/2022",
    image: ethImg,
  },
  {
    idx: 1005,
    name: "Learn Social Engineering From Scratch",
    instructor: "Amal",
    price: 310,
    discount: 15,
    bio: "Learn how to hack accounts & personal devices (Windows, Mac OS X, Linux & Android) & how to secure yourself from hackers.",
    lessons: 21,
    startDate: "01/04/2022",
    image: sceImg,
  },
  {
    idx: 1006,
    name: "Figma UI UX Design Essentials",
    instructor: "Amir",
    price: 210,
    discount: 20,
    bio: "Use Figma to get a job in UI Design, User Interface, User Experience design, UX Design & Web Design.",
    lessons: 14,
    startDate: "01/02/2022",
    image: figImg,
  },
];
