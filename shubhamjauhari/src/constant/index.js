import P1 from '../assets/images/ProjectPic1.png';
import B1 from '../assets/images/BackEndProject1.png';
import P2 from '../assets/images/ProjectPic11.png';

export const aboutMeContent=[
    {
        content: `"Hello, I'm Shubham Jauhari, a dedicated software developer with a strong foundation in both front-end and back-end technologies. In addition to my software development skills, I'm currently gaining valuable experience as a Data Structures and Algorithms (DSA) mentor intern at AccioJob.`
    },
    {
        content: `My journey in software development began with a passion for creating elegant user interfaces and solving intricate problems. On the front-end, I specialize in HTML, CSS, JavaScript, and React.js, crafting engaging web experiences. On the back-end, I thrive with Spring Boot, ensuring the performance and scalability of applications.`
    },
    {
        content: `As a DSA mentor intern at AccioJob, I have the privilege of sharing my knowledge and expertise with aspiring developers. Guiding others in mastering fundamental algorithms and data structures has deepened my understanding of the core principles of software engineering.`
    },
    {
        content: `I'm committed to bridging the gap between design and functionality, striving to create software that excels both visually and in performance. My goal is to continue expanding my skill set and collaborating on innovative projects.`
    },

]

export const frontEndTechStack = [
    {
        name: 'HTML',
        experience: 'Experienced'
    },
    {
        name: 'CSS',
        experience: 'Intermediate'
    },
    {
        name: 'JAVASCRIPT',
        experience: 'Intermediate'
    },
    {
        name: 'REACT-JS',
        experience: 'Intermediate'
    },
    {
        name: 'BOOTSTRAP',
        experience: 'Intermediate'
    },
    {
        name: 'TAILWIND-CSS',
        experience: 'Basic'
    },
]

export const backEndTechStack = [
    {
        name: 'SPRINGBOOT',
        experience: 'Intermediate'
    },
    {
        name: 'SQL',
        experience: 'Basic'
    },
    {
        name: 'JAVA',
        experience: 'Intermediate'
    },
    {
        name: 'FIREBASE',
        experience: 'Basic'
    }
]

export const projects=[
    {
        type: 'Frontend Project',
        name: 'STube',
        picLink: P1,
        about: ' a web application developed with React.js and integrated with Rapid APIs to recreate the popular video-sharing platform, YouTube. This project aims to replicate the core features and user interface of YouTube, allowing users to browse, search for, and view videos. ',
        liveLink: 'https://stube.vercel.app/',
        githubLink: 'https://github.com/Jauhari-01/stube'
    },
    {
        type: 'Backend Project',
        name: 'Dosify',
        picLink: B1,
        about: 'Set of APIs using Spring Boot, following RESTful principles. These APIs allowed users to perform various actions related vaccination booking.',
        liveLink: '',
        githubLink: 'https://github.com/Jauhari-01/Dosify_Covid-19-Vaccination-Booking-Application'
    },
    {
        type: 'Backend Project',
        name: 'FlipCommerce',
        picLink: B1,
        about: 'FlipCommerce is an e-commerce application with a wide range of APIs that facilitate various functionalities related to online shopping.',
        liveLink: '',
        githubLink: 'https://github.com/Jauhari-01/FlipCommerce'
    },
    {
        type: 'Frontend Project',
        name: 'PicFinder',
        picLink: P2,
        about: 'React Project for demonstration of WebAPIs',
        liveLink: 'https://picfinder.vercel.app/',
        githubLink: 'https://github.com/Jauhari-01/picfinder'
    },
]