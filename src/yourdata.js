// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jessica Anocibar",
  headerTagline: [
    //Line 1 For Header
    "I'm a Web Developer",
    //Line 2 For Header
    "graduate from the ",
    //Line 3 For Header
    "University of Denver",
  ],
  //   Header Paragraph
  headerParagraph:
    "Front End Developer utilizing a combination of multiple programs and languages along with strong communication, collaboration, analytical skills, and problem-solving. Please check out my work below and reach out with any questions!",

  //Contact Email
  contactEmail: "j.anocibar92@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Meal Matcher", //Project Title 
      para:
        "Recipe website built for users to find multiple recipes regarding whatever ingredient is searched. The website has the ability to generate a random recipe along with storing any favorites in a recipe book and later deleting  if desired.",
         
      //Project Image 
      imageSrc:
        "https://github.com/jessicaano92/meal_matcher_javascript_ajax/raw/main/assets/images/readMe1.png",
      //Project URL
      url: "https://jessicaano92.github.io/meal_matcher_javascript_ajax/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Couch Surfers Blog", //Project Title 
      para:
        " Blog website built for users to signup and login to share experiences and/or information about indoor and outdoor activities, cities, and restaurants with the public. ", // Add Your Service Type Here
      //Project Image 
      imageSrc:
        "https://github.com/jessicaano92/couchSurfers/raw/main/public/assets/img/empty-blog-page.png",
      //Project URL 
      url: "https://dry-scrubland-38194.herokuapp.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Giftr", //Project Title 
      para:
        "Registry website built for users wanting to make a gift list for themselves, family, or friends whether it be for a birthday, wedding, or holiday. Stores user’s name and specific gift list information in the database along with the capability of purchasing gifts through the links provided.",
         
      //Project Image 
      imageSrc:
        "https://github.com/jessicaano92/registry/raw/main/readmePIC/giftHome.PNG",
      //Project URL
      url: "https://giftr-registry.herokuapp.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Fitness Tracker", //Project Title 
      para:
        "This fitness tracker allows for the user to add either a resistance or cardio workout. In their workout, they are asked to input the duration, sets, reps, and miles of the particular workout they choose. The tracker then stores the information and shows it on a workout dashboard displaying the results on graphs. The graphs include the workout duration in minutes, pounds lifted, and a circle graph of exercises performed or not completed.", // Add Your Service Type Here
      //Project Image 
      imageSrc:
        "https://github.com/jessicaano92/fitness_tracker_mongoose_express/raw/main/public/images/fitnesstracker3.png?raw=true",
      //Project URL
      url: "https://i-love-coffee.herokuapp.com/",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Weather Dashboard", //Project Title 
      para:
        "This weather dashboard allows for the user to input a city of their choosing and see the stats for that city including temperature, humidity, UV index, wind speed, and more. All cities typed in are supposed to be saved to local storage for that user to go back and see whenever they want. Each city the user types and searches will come up with the said information about that said along with the 5-day forecast.", // Add Your Service Type Here
      //Project Image 
      imageSrc:
        "https://github.com/jessicaano92/weather-dashboard/raw/main/images/img4.png",
      //Project URL 
      url: "https://jessicaano92.github.io/weather-dashboard/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Day Planner", //Project Title 
      para:
        "This day planner provides the current day from 9am to 5pm to save any plans inside the rows. It is displayed with grey, red, and green colors representing the past, present, and future of the planner. When something is typed into one of the rows it is saved into local storage so if the page is refreshed, the text from the user input will still remain in the planner. The planner is up-to-date with the current time and day.", // Add Your Service Type Here
      //Project Image 
      imageSrc:
        "https://github.com/jessicaano92/jquerydayplanner/raw/main/Day%20planner%20screenshots/image3.png",
      //Project URL -
      url: "https://jessicaano92.github.io/jquerydayplanner/",
    },

  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Having a background in travel and hospitality, I recently earned a certificate in Full Stack Development from the University of Denver, where I developed skills in JavaScript, Express, Node.js, MySQL, Sequelize, MongoDB, Mongoose, NPM, Version Control, React.js, MERN stack, HTML, CSS, Bootstrap, and many other third party CSS packages. Exploring a new career path has been extremely terrifying yet amazing.",
  aboutParaTwo:
    "Having sharpened skills as an innovative problem solver, grasping the functionality and design of applications through web development has been exceptionally challenging but even more rewarding! With my background in customer service and ensuring customer satisfactory, these analytical skills have helped me approach issues with creativity and collaboration from my fellow teams. With each project, I aim to understand how to best engage users for an impactful user experience. ",
  aboutParaThree:
    " I applied React.js in a recent project where I worked in a team of 5 to develop a MERN app that allows users to make registries to save gift ideas for friends and family to view and purchase. When I’m not developing or designing, you can find me camping, biking, spending time with my family, or researching the latest trend on web development. I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Please feel free to reach out through my contact page! Let's connect.",
  aboutImage:
    "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/119036672_3163572860358541_122482964854991753_n.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=ynxl3ZePgJ0AX_7DfKj&_nc_ht=scontent.fapa1-1.fna&oh=0d7d47d39719f3f8a0b38c6863771c26&oe=605349A5",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Ability to design, build, and maintain websites from conception to production using my newly found web development programs and languages. Confident working in a fast-paced and diverse team environment developing solutions and exceeding expectations.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's get creative together!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/jessicaano92" },
    
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}


