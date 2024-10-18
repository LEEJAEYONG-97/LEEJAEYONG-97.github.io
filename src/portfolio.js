/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lee Jae Yong",
  title: "Hi all, I'm Jae Yong",
  subTitle: emoji(
    " I majored in Accounting and Taxation at Woongji College and worked as an accounting assistant for two years. During this time, I gained a deep understanding of the importance of data analysis and management, which sparked my interest in the development field.🚀 As a result, I decided to transition to the IT sector and am currently participating in a Full-Stack Developer training program, learning the latest technologies."
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=14HfHNDA_O-gTFTDvIh0xIW9S6fHMmlhz",
 // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LEEJAEYONG-97",
  gmail: "yliy6452@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate developer on a journey to find my dream.",
  skills: [
    emoji(
      "⚡ In the ongoing Full-Stack Developer training program, I am learning key technologies such as MongoDB, MySQL, Machine Learning, and Deep Learning. I am acquiring skills in data analysis and modeling, web application development, and advanced data processing techniques, while cultivating problem-solving abilities in real-world scenarios. I particularly excel in developing data analysis and predictive models using machine learning and deep learning."
    ),
    emoji(
      "🛠️ Problem-Solving and Collaboration Skills: I prioritize a systematic approach to problem-solving and have strengths in making data-driven decisions. When faced with technical issues during project execution, I have swiftly analyzed the causes and proposed solutions, successfully completing projects. Through collaboration with two teammates, I coordinated various aspects of the project and fostered an efficient work environment."
    ),
    emoji(
      "🎯 Vision and Goals: I am confident in my ability to successfully perform any assigned tasks, regardless of the role within your company. I will continually learn about the latest technological trends, strive to solve problems, and work diligently to achieve team goals. I aim to grow alongside your company through technical challenges and personal development."
    ),
    emoji(
      "🔍 Conclusion: I believe my experience and skills align with your company’s requirements, and I look forward to the opportunity to discuss further during an interview. Thank you for your consideration."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Woongji Accouting & Tax University",
      logo: require("./assets/images/woongji.png"),
      subHeader: "Major in Tax Accounting",
      duration: "February 2015 - February 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "기업프로젝트 기반 빅데이터를 활용한 풀스택(프론트-백엔드) 개발자 양성",
      company: "NCS 응용SW엔지니어링",
      companylogo: require("./assets/images/mbc.png"),
      date: "Mar 2024 – Present",
      desc: "프로그래밍 언어(Python,WEB,JSP,JAVA),머신러닝/딥러닝 학습하고 기업요구 공공데이터분석 프로젝트 3가지 수행"
    },
    {
      role: "Administrative Assistant",
      company: "세무법인이지",
      companylogo: require("./assets/images/tax.png"),
      date: "Sep 2021 – May 2022",
      desc: "Responsible for filing various taxes, including income tax, corporate tax, and value-added tax.Involved in preparing and managing accounting ledgers, as well as creating financial statements."
    },
    {
      role: "Administrative Assistant",
      company: "제이디아이 세무회계",
      companylogo: require("./assets/images/tax.png"),
      date: "Feb 2020 – Sep 2021",
      desc: "Responsible for filing various taxes, including income tax, corporate tax, and value-added tax.Involved in preparing and managing accounting ledgers, as well as creating financial statements."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/corona.png"),
      projectName: "COVID-19",
      projectDesc: "Development of LSTM models for the sports and film industries during the COVID-19 pandemic",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/LEEJAEYONG-97/Corona"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/seoul.png"),
      projectName: "Reviews in Seoul",
      projectDesc: "Text Mining-Based Analysis of Tourist Reviews in Seoul",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/LEEJAEYONG-97/seoul_tour"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dust.png"),
      projectName: "Fine Dust",
      projectDesc: "Time Series Model-Based Prediction of Fine Dust from China to Korea",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/LEEJAEYONG-97/Fine_Dust"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8210-2985-7660",
  email_address: "yljy6452@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
}; 