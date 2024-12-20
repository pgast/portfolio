export const buttons = [
  { text: 'Download CV', href: 'https://drive.google.com/file/d/1s-YPNvuP8EfznHkT7hVZjbTMCFr1ejhr/view?usp=share_lin' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/pablogastelum'},
  { text: 'Github', href: 'https://github.com/pgast' },
]

export const about = {
  mainDescription: {
    description: "Hi! I'm a full stack developer with a product design background. After years building real physical objects (and the occasional venture into graphic design) I took my side hobby of web development and decided to focus full time on creating digital experiences."
  }
}

export const skillTech = {
  title: "tech",
  skills: {
    languages: [
      "Javascript (ES6)",
      "HTML-CSS",
      "Typescript",
      "Python"
    ],
    frameworks: [
      "React",
      "Redux",
      "React-Query",
      "NextJS",
      "ExpressJS",
      "NodeJS",
      "Django",
      "Serverless"
    ],
    styling: [
      "Styled-Components",
      "TailwindCSS",
      "ChakraUI",
      "Bootstrap",
    ],
    database: [
      "MongoDB",
      "PostgreSQL",
      "Firebase"
    ],
    tools: [
      "Git",
      "CI/CD",
      "AWS (Basic Cloud Expertise)",
      "Sentry",
      "VS Code",
      "Storybook",
      "Mixpanel",
      "Docker"
    ]
  }
}

export const skills = {
  title: "skills",
  columns: [
    "Prompt engineering",
    "Graphic design",
    "Product design",
    "UX/UI design",
    "Adobe (AI, PS)",
    "3D Modeling",
    "Rendering"
  ]
}

export const awards = {
  title: 'awards / recognition',
  columns: [
    [
      "First Prize / Toy design proposal",
      "2014 - Kinder Surprise Me! International Competition"
    ],
    [
      "Finalist / Refrigeration unit made with recycled materials",
      "2015 - IMBERA Refrigeration"
    ]
  ]
}

export const education = {
  title: 'education',
  school: [
    "Bachelor in Product Design",
    "Universidad Autónoma de Nuevo León, Monterrey MEX."
  ],
  certifications: {
    title: "Over 700 hours of online learning and 6 certifications spanning",
    links: [
      {
        href: '',
        title: 'AWS Certified Cloud Practitioner'
      },
      {
        href: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-32236e40-565f-46e0-a24a-5a0275d8b99e.pdf',
        title: 'Python'
      },
      {
        href: 'http://ude.my/UC-CJJEMRIW',
        title: 'React / Redux'
      },
      {
        href: 'https://www.freecodecamp.org/certification/pabl-o/javascript-algorithms-and-data-structures',
        title: 'Data Structures'
      },
      {
        href: 'https://www.freecodecamp.org/certification/pabl-o/legacy-front-end',
        title: 'Front end development'
      }
    ]
  }
}

export const workHistory = {
  title: "work experience",
  jobs: [
    {
      header: {
        duration: "2024(April)-Current", 
        title: "Senior Frontend Engineer / Apli",
      },
      items: [
        "Designed and implemented a serverless API microservice leveraging generative AI, reducing document validation task implementation time.",
        "Developed and maintained scalable backend services with Django and PostgreSQL, delivering new API endpoints that support a high volume of daily users.",
        "Led full stack development projects, producing detailed technical documentation and clear requirements that guided junior engineers and ensured alignment across teams.",
        "Adapted and integrated a Role-Based Access Control (RBAC) system into existing services, leading the migration from a legacy permissions system to enhance security and streamline user role management."
      ]
    },
    {
      header: {
        duration: "2021-2024(April)", 
        title: "Frontend Engineer / Apli",
      },
      items: [
        "Led cross-functional teams to plan and execute innovative feature launches for a global SaaS startup specializing in AI-powered recruitment solutions, catering to a diverse clientele of international and national companies. ",
        "Stategically optimized internal tools for conversation architects, reducing bot building timeframes by 40%. This efficiency gain improved workflow productivity and reduced time for client bot implementations.",
        "Integrated the frontend stack seamlessly with microservices APIs, achieving a 15% reduction in data fetching times. Implemented caching strategies, contributing to an improvement in overall system responsiveness.",
        "Consistently contributed to the development and programming of responsive user interfaces for various projects, showcasing expertise in both UI and UX development. Actively provided valuable inputs and expertise, ensuring an enhanced user experience across diverse projects and platforms.",     
      ]
    },
    {
      header: {
        duration: "2018-2021",
        title: "Designer / Macizo Carpinteria",
      },
      items: [
        "Developed web app that calculates wood wastage.",
        "Worked in new user-friendly redesign of production blueprints.",
        "Delivered design and engineering woodwork concepts for hotel chains and residential clients."
      ]
    },
    {
      header: {
        title: "Product Designer / G3 Fabricación",
        duration: "2017 (10 Mo.)",
      },
      items: [
        "Conceptualization of commercial interior design concepts.",
        "Worked with construction team to achieve project deadlines.",
        "Generated 3D visualizations of concepts and product engineering."
      ]
    },
    {
      header: {
        title: "Junior Designer / Marley Industrial Supply",
        duration: "2011-2013",
      },
      items: [
        "Conceptualization of promotional graphics.",
        "Delivered industrial safety signage.",
        "Responsible for project blueprints."
      ]
    }
  ]
}