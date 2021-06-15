import image1 from '../assets/sample.png'

export const greeting = {

  note: "Hello World",
  view: true,
}



export const teammembers = {
  title: "Meet The Team",
  lists: [
    {
      name: "Shahin",
      role: "Test",
      skills: "Front-End Developer",
    },
    {
      name: "Linn",
      role: "Linn",
      skills: "Linn",
    },
    {
      name: "Anton",
      role: "Anton",
      skills: "Anton",
    },
  ],
  view: true,
};


export const skills = {
  title: "SKILLS",
  lists: [
    { fontAwesome: "fab fa-html5", text: "HTML5" },
    { fontAwesome: "fab fa-css3-alt", text: "CSS3"},
    { fontAwesome: "fab fa-js", text: "JS"},
    { fontAwesome: "fab fa-wordpress", text: "Wordpress"},
    { fontAwesome: "fab fa-react", text: "React" },
  ],
  view: true,
};


export const projects = {
  title: "Projects",
  lists: [
    {
      img: image1,
      alt: "Project one",
      title: "React typescript",
      desc: "Bootstrap",
      url: "#",
      frameworks: ["s"],
    },
    {
      img: image1,
      alt: "I'm sad..",
      title: "Another fake project",
      desc: "Text here",
      url: "#",
      frameworks: ["Bootstrap"],
    },
    {
      img: image1,
      alt: "",
      title: "Some fake text",
      desc: "Fake project",
      url: "#",
      frameworks: ["PHP + MySql"],
    },

    {
      img: image1,
      alt: "",
      title: "E-Commerce Project",
      desc: "text goes here",
      url: "#",
      frameworks: ["WordPress"]
    },
  ],
  view: true,
};
