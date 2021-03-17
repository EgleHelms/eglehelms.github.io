import { 
    faLinkedin,
    faGithubSquare,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelopeSquare,
    faLink
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectsArr = [
    {
      title: "WEATHER APP",
      screenshot: "https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_07102018_LP_hero.jpg.og.jpg",
      description: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      tech: "REACT JS | REST API | STYLED-COMPONENTS",
      code: "ulr to code",
      demo: "ulr to demo"
    },
    {
      title: "MUSIC APP",
      screenshot: "https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_07102018_LP_hero.jpg.og.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      tech: "REACT JS | REDUX | REST API",
      code: "ulr to code",
      demo: "ulr to demo"
    },
    {
      title: "POMODORO TIMER",
      screenshot: "https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_07102018_LP_hero.jpg.og.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      tech: "REACT JS | SASS ",
      code: "ulr to code",
      demo: "ulr to demo"
    },
    {
      title: "BLOG",
      screenshot: "https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_07102018_LP_hero.jpg.og.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.",
      tech: "REACT JS | CRUD operations | SASS",
      code: "ulr to code",
      demo: "ulr to demo"
    },
    {
      title: "ECOMMERCE BOOK STORE",
      screenshot: "https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_07102018_LP_hero.jpg.og.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.",
      tech: "REACT JS | CRUD operations | SASS",
      code: "ulr to code",
      demo: "ulr to demo"
    },
    {
      title: "POST-IT NOTES APP",
      screenshot: "https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_07102018_LP_hero.jpg.og.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.",
      tech: "VANILLA JS | HTML | CSS",
      code: "ulr to code",
      demo: "ulr to demo"
    },
  ];
  
  const socials = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/egle-helms/",
      icon: <FontAwesomeIcon icon={faLinkedin} />
    },
    {
      title: "GitHub",
      link: "https://www.linkedin.com/in/egle-helms/",
      icon: <FontAwesomeIcon icon={faGithubSquare} />
    },
    {
      title: "Email",
      link: "mailto:egle.helms@gmail.com",
      icon: <FontAwesomeIcon icon={faEnvelopeSquare} />
    },
    {
      title: "Resume",
      link: "https://eglehelms.dev/wp-content/uploads/2020/12/EgleH-CV.pdf",
      icon: <FontAwesomeIcon icon={faLink} />
    }
  ]

  export {socials};
  export {projectsArr};