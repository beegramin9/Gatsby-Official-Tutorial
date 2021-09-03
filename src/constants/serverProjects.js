import Nodejsblog from '../images/projects/Nodejsblog.gif';
import Flask from '../images/projects/Flask.gif';

export const arrayOfServerProject = [
    {
        title: 'Nodejs Markdown Blog',
        description: "This web is a simple Markdown blog that fully supports CRUD interactions. This is built with NodeJS Express, MongoDB, EJS and Scss.",
        image: Nodejsblog,
        tags: [
            "https://img.shields.io/badge/Express-FF7200?style=flat-square&logo=Express&logoColor=white",
            "https://img.shields.io/badge/EJS-5522FA?style=flat-square&logo=/e/&logoColor=white",
            "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white",
            "https://img.shields.io/badge/Scss-CC6699?style=flat-square&logo=Sass&logoColor=white",
        ],
        /* link: 'https://github.com/beegramin9/NodeJS-MarkdownBlog', */
        github: 'https://github.com/beegramin9/NodeJS-MarkdownBlog',
        id: 0,
    },
    {
        title: 'Flask Restful API',
        description: "This is a simple Restful API built with Flask and SQLAlchemy. SQLAlchemy supports ORM designed to fully support CRUD interactions easily.",
        image: Flask,
        tags: [
            "https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white",
            "https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white",
            "https://img.shields.io/badge/SQLAlchemy-CC2927?style=flat-square&logo=Databricks&logoColor=white",
        ],
        /* link: 'https://github.com/beegramin9/Python-Flask-Restful-API', */
        github: 'https://github.com/beegramin9/Python-Flask-Restful-API',
        id: 1,
    },
];