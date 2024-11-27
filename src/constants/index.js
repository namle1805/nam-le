import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import certificate from "../assets/certificate.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting web and mobile applications. I have honed my skills in front-end technologies like React and Flutter, as well as back-end technologies like Java Spring Boot, .Net Core, PostgreSQL, SQL Server and MongoDB. My goal is to apply my knowledge and skills to continuously enhance my expertise while delivering exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "01/2024 - 05/2024",
    role: "Backend Developer",
    company: "FPT Software Ho Chi Minh",
    description: `Developed and maintained web applications using Java Spring Boot, React.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Java", "React", "PostgreSQL", "Firebase", "AWS S3", "AWS Cloud" ],
    image: certificate,
  },
];

export const PROJECTS = [
  {
    title: "Ticket Resell Platform",
    image: project1,
    description:
      "TicketResell is a commercial ticket resale platform where people can resell or buy back a variety of tickets. TicketResell is a marketplace that brings together a reputable ticket buying and selling community.",
    technologies: ["Flutter", "React", "ASP.NET Web APIs", "PostgreSQL", "Firebase", "Azure", "Neon Tech", "Vercel"],
    mobile: "https://github.com/AmbroseSu/TicketResell_Mobile",
    frontend: "https://github.com/locnht-it/ticket-resell-frontend",
    backend: "https://github.com/AmbroseSu/TicketResell"
  },
  {
    title: "TripWonder",
    image: project2,
    description:
      "TripWonder is an application that provides tours across Vietnam. Here, customers can choose travel packages that suit them, with guaranteed quality. TripWonder's criteria is to bring tourism closer to customers. TripWonder Go Together.",
    technologies: ["Flutter", "React", "Spring Boot", "Firebase", "PostgreSQL", "Render", "Neon Tech", "Vercel"],
    fanpage: "https://www.facebook.com/profile.php?id=61565907795833",
    mobile: "https://github.com/AmbroseSu/TripWonder_Mobile",
    frontend: "https://github.com/locnht-it/trip-wonder-frontend",
    backend: "https://github.com/AmbroseSu/TripWonder"
  },
  {
    title: "Fresher Academy Management System",
    image: project3,
    description:
      "The system allows administrators to manage user accounts, create, view, edit, update syllabus, training program, class management.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Firebase", "AWS S3", "AWS Cloud"],
    backend: "https://git.fa.edu.vn/hcm24_cpl_java_021/hcm24_cpl_java_02_g3"
  },
  {
    title: "Exam Schedule Management System",
    image: project4,
    description:
      "TripByDay is a system that provides one-day travel service packages in a city that can help tourists optimise time, choose attractive destinations, and build effective schedules.",
    technologies: ["Flutter", "React", "Spring Boot", "Firebase", "PostgreSQL", "Render", "Neon Tech", "Vercel"],
    frontend: "https://github.com/namlee1805/ESMS_FrontEnd",
    backend: "https://github.com/Ambrose47/ESMS_final.git"
  },
  {
    title: "TripByDay",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Spring Boot", "React", "", "Express", "mySQL"],
    mobile: "https://github.com/AmbroseSu/TripWonder_Mobile",
    frontend: "https://github.com/locnht-it/trip-wonder-frontend",
    backend: "https://github.com/AmbroseSu/TripWonder"
  },
];

export const ACTIVITIES = [
  {
    year: "09/2022 - 11/2022",
    role: "Volunteer",
    organization: "AngleBoys Volunteer Group",
    description: `Call for sponsorship, collect gifts and give them to orphans at Thien Than Orphanage, Thu Duc City. Moreover, we share, encourage, and motivate orphans to overcome difficult times, help them in their studies, and help them think more optimistically.`,
  },
];

export const CONTACT = {
  address: "Thu Duc City, Ho Chi Minh City ",
  phoneNo: "(+84) 367 356 859",
  email: "namlee180503@gmail.com",
};
