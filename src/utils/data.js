import { FaCode, FaReact, FaDatabase } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GiComputing } from "react-icons/gi";
import { MdNordicWalking, MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaSkype, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


export const skills = [
  {
    name: "Problem Solving",
    detail: "Solved 200+ problems on leetcode",
    icon: SiLeetcode,
    bg: "#286F6C",
  },
  {
    name: "Programming Languages",
    detail: "C++, Java, JavaScript, C#",
    icon: FaCode,
    bg: "#28aF6C",
  },
  {
    name: "Frontend",
    detail: "HTML, CSS, React",
    icon: FaReact,
    bg: "#EEC048",
  },
  {
    name: "Backend",
    detail: "Node.js, MongoDB, SQL",
    icon: FaDatabase,
    bg: "#7CB9E8",
  },
  {
    name: "Also know about",
    detail: "OS, Networking, dbms",
    icon: GiComputing,
    bg: "#F26440",
  },
  {
    name: "Hobbies",
    detail: "Playing: Cricket, OnlineGames, Watching cricket and listening musics",
    icon: MdNordicWalking,
    bg: "#8cff1f",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const projects = [
  {
    title: "ChatApp",
    link: "https://chat-e0101.web.app/",
    detail : ["Register and Login feature",
            "A user can search their friends by user name and chat with them",
            "Use React as frontend library and style with scss",
            "use material ui for some good looking icons"]
  },
  {
    title: "chatGPT clone",
    link: "https://chat-gpt-client-eight.vercel.app/",
    detail : ["We can ask any question to chat-gpt and it will answer",
            "Technology used: Javascript, React, Node, OpenAI, Scss, html",
            ]
  },
  {
    title: "Advanced Notepad",
    detail: ["This project was written in Java by using of NetBeans",
            "It have functionality like copy, cut, paste etc. and all other that required for notepad",
            "Use .properties file extension for store project configuration data and settings",
            "This Notepad is a simply text editor with an internal calculator for better user experience"]
  },
  {
    title: "NoteBook",
    link: "",
    detail : ["Its a simple notebook where we can store our important notes",
            "Use React as frontend library and html, css",
            "use material ui for some good looking icons"]
  },
  {
    title: "Secrets App",
    link: "",
    detail: ["Technology used HTML, CSS, JavaScript, jQuery, Node.js, RESTfull API, Authentication.", 
            "User can share there secrets anonymously."]
  },
  // {
  //   title: "Movie Hub",
  //   link: "",
  //   detail: ["A visual desginer dsesign for a variety of platoforms,", "may include internet and internet sites, games, movies, kioasks and wearbies."," In short, they create the concepts"]
  // },
  // {
  //   title: "E-commerce Website",
  //   link: "",
  //   detail:
  //     ["A visual desginer dsesign for a variety of platoforms", "may include internet and internet sites, games, movies, kioasks and wearbies.", "In short, they create the concepts"]
  // },
];

export const socials = [
  {
    name: "LinkedIn",
    bg: "#0A66C2",
    comment: "Lets check my public repos and suggest me some good thing to improve my work, or if you find some bugs then drop a comment we discuss it together ",
    link: "https://www.linkedin.com/in/naval-nehra-0a686217a",
    icon: FaLinkedinIn
  },
  {
    name: "Github",
    bg: "#4078c0",
    comment: "Have some new idea for a project or want to work together lets start a conversation here",
    link: "https://github.com/imNaval",
    icon: FaGithub
  },
  {
    name: "Skype",
    bg: "#4267B2",
    comment: "Connect on skype to discuss some ideas on our works",
    link: "ive:.cid.a7d5e1ff38060ce1",
    icon: FaSkype
  },
  {
    name: "Email",
    bg: "#4285F4",
    comment: "Send me mail for professional work",
    icon : MdEmail
  },
  {
    name: "LeetCode",
    bg: "#4267B2",
    comment: "Here is my leetcode profile if you have some coding problem or want to suggest or ask or discuss a problem pick question from here",
    link: "https://leetcode.com/navwe/",
    icon: SiLeetcode
  },
  {
    name: "Twitter",
    bg: "#1DA1F2",
    comment: "Have some news! wanna discuss some serious topics lets connect on twitter",
    link: "https://twitter.com/NehraNaval",
    icon: FaTwitter
  },
  {
    name: "Facebook",
    bg: "#4267B2",
    comment: "Ohh! it's time to chill share some funny things or something else to chill",
    link: "https://www.facebook.com/navlaram.nehra",
    icon: FaFacebook
  },
  {
    name: "Instagram",
    bg: "#d62976",
    comment: "Ohh! it's time to chill. share some funny reels..........",
    link: "https://www.instagram.com/_im_naval/",
    icon: FaInstagram
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

