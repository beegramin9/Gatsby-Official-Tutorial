//* Gatsby에서 Gif를 다루는 방법...
// https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-gifs/

import Movieapp from '../images/projects/Movieapp.gif';
import Paintbrush from '../images/projects/Paintbrush.gif';
import Pizza from '../images/projects/Pizza.gif';
import Momentum from '../images/projects/Momentum.gif';
import Calculator from '../images/projects/Calculator.gif';
// import Touchslider from '../images/projects/Touchslider.gif';


export const arrayOfStaticProject = [
    {
        title: 'Movie Archive Webapp',
        description: "This project works on a movie list api, added with custom responsive design.\nThere are many reusable features such as custom Axios&pagination Hook, styled components, routers and loading spinner.",
        image: Movieapp,
        tags: ['https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white', 
            'https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white', 
            /* 'https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white' */],
        link: 'https://beegramin9.github.io/ReactJS-Public-API/#/',
        github: 'https://github.com/beegramin9/ReactJS-Public-API',
        id: 0,
    },
    {
        title: 'Paintbrush Clone',
        description: "This clone is a mock-up of Window paint brush, made with MDN Canvas API. Main features are drawing, filling, erasing and reseting, all of which are interactive with the colors off of the buttons.",
        image: Paintbrush,
        tags: ['https://img.shields.io/badge/MDNCanvas-01756c?style=flat-square&logo=MDN Web Docs&logoColor=white',
        'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white', 
        /* 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white', 
        'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white' */],
        link: 'https://beegramin9.github.io/JsCanvasAPI-PaintBrushClone/',
        github: 'https://github.com/beegramin9/JsCanvasAPI-PaintBrushClone',
        id: 1,
    },
    {
        title: 'Pizza recipe app',
        description: "This app is a simple representation of what React Framer motion library can do. \nIt provides users a better experience easily with cool effects & animations. ",
        image: Pizza,
        tags: ['https://img.shields.io/badge/Framer-df0eb1?style=flat-square&logo=Framer&logoColor=white',
            'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white', 
            /* 'https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white' */],
        link: 'https://beegramin9.github.io/React-FramerMotion/',
        github: 'https://github.com/beegramin9/React-FramerMotion',
        id: 2,
    },
    {
        title: 'Momentum Clone',
        description: "The main features are the separated pending and finished list, where todos are transferable onto another section, data persistence supported by Local Storage.",
        image: Momentum,
        tags: ['https://img.shields.io/badge/LocalStorage-FF3621?style=flat-square&logo=Databricks&logoColor=white',
            'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white', 
            /* 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white', 
            'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white' */],
        link: 'https://beegramin9.github.io/JavaScript-MomentumClone/',
        github: 'https://github.com/beegramin9/JavaScript-MomentumClone',
        id: 3,
    },
    /* {
        title: 'Calculator Clone',
        description: "The number blocks and button blocks are constructed within CSS3 grid, flex, which made easier to remain intact when the web moves responsively.",
        image: Calculator,
        tags: ['https://img.shields.io/badge/ES6-004027?style=flat-square&logo=JSON&logoColor=white',
        'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white', 
        'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white', 
        'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white'],
        link: 'https://beegramin9.github.io/HCJ-Nomad-CalculatorClone/',
        github: 'https://github.com/beegramin9/HCJ-Nomad-CalculatorClone',
        id: 4,
    }, */
    /* {
        title: 'Touch Slider Clone',
        description: "Horizontal touch slider appliable to features like Netflix movies, Youtube shorts and Instagram stories slider",
        image: Touchslider,
        tags: ['https://img.shields.io/badge/MDNCanvas-01756c?style=flat-square&logo=MDN Web Docs&logoColor=white',
        'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white'],
        link: 'https://beegramin9.github.io/HCJ-TouchSlider/',
        github: 'https://github.com/beegramin9/HCJ-TouchSlider',
        id: 5,
    }, */
];