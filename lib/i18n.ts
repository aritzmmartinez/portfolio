import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        about: "About",
        experience: "Experience",
        stack: "Stack",
        projects: "Projects",
        contact: "Contact",
      },
      // Hero Section
      hero: {
        roles: [
          "Full Stack Developer",
          "Details matter, simplicity wins",
          "I ship things I believe in",
        ],
        viewWork: "View my work",
        getInTouch: "Get in touch",
      },
      // About Section
      about: {
        title: "About Me",
        bio: "I'm a passionate Full Stack Developer who enjoys building clean, scalable, and well-structured applications. I like working on projects that follow good architecture practices and focus on maintainability, performance, and simplicity. Most of my repositories are based on real-world setups, boilerplates, and complete project structures. I'm always interested in exploring new tools, improving my coding practices, and understanding how things work under the hood.",
        stats: {
          coding: "3+ years coding",
          location: "Bilbao, Spain",
          languages: "EU (B2) · EN (B2) · ES",
        },
        terminal: {
          comment: '// Currently debugging something that "worked yesterday"',
          command: 'git commit -m "fix: everything"',
        },
      },
      // Experience Section
      experience: {
        title: "Experience",
        workTitle: "Work Experience",
        work: [
          {
            company: "Ironchip",
            role: "Frontend and Mobility Developer",
            period: "February 2025 – Present",
            bullets: [
              "Developed and maintained an administration panel with new functionalities using React and TypeScript",
              "Integration of APIs for communication with internal services",
              "Developed SDKs and templates using Go (Golang)",
            ],
          },
          {
            company: "Accenture",
            role: "JAVA Developer",
            period: "June 2022 – September 2024",
            bullets: [
              "Implemented new functionalities and maintained commercial systems",
              "Created unit tests with JUnit 5 and code quality analysis with SonarQube",
            ],
          },
        ],
      },
      // Tech Stack Section
      stack: {
        title: "Tech Stack",
        subtitle: "Technologies I've worked with",
      },
      // Projects Section
      projects: {
        title: "Projects",
        subtitle: "Some things I've built",
        filters: {
          all: "All",
          web: "Web",
          mobile: "Mobile",
        },
        viewProject: "View project",
        appStore: "App Store",
        github: "GitHub",
        status: {
          live: "Live",
          openSource: "Open Source",
          inDev: "In Development",
          done: "Live",
        },
        items: {
          oplex: {
            name: "Oplex",
            description:
              "Pre-launch landing page for Oplex, an AI-powered study platform designed to help candidates prepare for Spanish civil service exams with better practice and review workflows.",
          },
          flutterBoilerplate: {
            name: "Flutter Clean Architecture Boilerplate",
            description:
              "Production-grade Flutter boilerplate with Clean Architecture, Riverpod and GetIt. Complete authentication UI, backend integration ready. Already used by other developers.",
          },
          libdex: {
            name: "Libdex",
            description:
              "Personal book notes app designed to capture chapter insights, key quotes, glossary terms and real-life connections. Built to make knowledge from reading actually stick.",
          },
          portfolio: {
            name: "Portfolio",
            description:
              "Personal portfolio showcasing a collection of projects built around real problems, clean interfaces, and attention to detail.",
          },
        },
      },
      // Contact Section
      contact: {
        title: "Get in Touch",
        subtitle: "Open to opportunities. Let's talk.",
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          message: "Message",
          messagePlaceholder:
            "Tell me about yourself or what you have in mind...",
          submit: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Something went wrong. Please try again.",
        },
      },
      // Footer
      footer: {
        rights: "All rights reserved.",
        madeWith: "Made with",
        inSpain: "in Spain",
      },
    },
  },
  es: {
    translation: {
      // Navigation
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        stack: "Tecnologías",
        projects: "Proyectos",
        contact: "Contacto",
      },
      // Hero Section
      hero: {
        roles: [
          "Desarrollador Full Stack",
          "Details matter, simplicity wins",
          "I ship things I believe in",
        ],
        viewWork: "Ver mi trabajo",
        getInTouch: "Contáctame",
      },
      // About Section
      about: {
        title: "Sobre Mí",
        bio: "Soy un desarrollador Full Stack apasionado con sede en País Vasco, España. Me encanta crear aplicaciones limpias, escalables y bien estructuradas siguiendo buenas prácticas de arquitectura. La mayoría de mis repositorios están basados en configuraciones del mundo real, boilerplates y estructuras completas de proyecto. Siempre estoy interesado en explorar nuevas herramientas y mejorar mis prácticas de desarrollo.",
        stats: {
          coding: "3+ años programando",
          location: "Bilbao, Spain",
          languages: "EU (B2) · EN (B2) · ES",
        },
        terminal: {
          comment: '// Currently debugging something that "worked yesterday"',
          command: 'git commit -m "fix: everything"',
        },
      },
      // Experience Section
      experience: {
        title: "Experiencia",
        workTitle: "Experiencia Laboral",
        work: [
          {
            company: "Ironchip",
            role: "Desarrollador Frontend y Mobility",
            period: "Febrero 2025 – Presente",
            bullets: [
              "Desarrollo y mantenimiento de un panel de administración con nuevas funcionalidades usando React y TypeScript",
              "Integración de APIs para comunicación con servicios internos",
              "Desarrollo de SDKs y plantillas usando Go (Golang)",
            ],
          },
          {
            company: "Accenture",
            role: "Desarrollador JAVA",
            period: "Junio 2022 – Septiembre 2024",
            bullets: [
              "Implementación de nuevas funcionalidades y mantenimiento de sistemas comerciales",
              "Creación de tests unitarios con JUnit 5 y análisis de calidad de código con SonarQube",
            ],
          },
        ],
      },
      // Tech Stack Section
      stack: {
        title: "Tecnologías",
        subtitle: "Tecnologías con las que he trabajado",
      },
      // Projects Section
      projects: {
        title: "Proyectos",
        subtitle: "Algunas cosas que he construido",
        filters: {
          all: "Todos",
          web: "Web",
          mobile: "Móvil",
        },
        viewProject: "Ver proyecto",
        appStore: "App Store",
        github: "GitHub",
        status: {
          live: "En Vivo",
          openSource: "Open Source",
          inDev: "En Desarrollo",
          done: "En Vivo",
        },
        items: {
          oplex: {
            name: "Oplex",
            description:
              "Landing page previa al lanzamiento de Oplex, una plataforma de estudio con IA diseñada para ayudar a candidatos a preparar oposiciones españolas con mejores flujos de práctica y repaso.",
          },
          flutterBoilerplate: {
            name: "Flutter Clean Architecture Boilerplate",
            description:
              "Boilerplate Flutter de grado producción con Clean Architecture, Riverpod y GetIt. UI de autenticación completa, listo para conectar a cualquier backend.",
          },
          libdex: {
            name: "Libdex",
            description:
              "Aplicación personal de notas de lectura diseñada para capturar ideas por capítulo, citas, glosario y conexiones con la vida real. Construida para que el conocimiento de los libros no se pierda.",
          },
          portfolio: {
            name: "Portfolio",
            description:
              "Portfolio personal con una colección de proyectos construidos alrededor de problemas reales, interfaces limpias y atención al detalle.",
          },
        },
      },
      // Contact Section
      contact: {
        title: "Contacto",
        subtitle: "Abierto a oportunidades. Hablemos.",
        form: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "tu@email.com",
          message: "Mensaje",
          messagePlaceholder: "Cuéntame sobre ti o lo que tienes en mente...",
          submit: "Enviar Mensaje",
          sending: "Enviando...",
          success: "¡Mensaje enviado con éxito!",
          error: "Algo salió mal. Inténtalo de nuevo.",
        },
      },
      // Footer
      footer: {
        rights: "Todos los derechos reservados.",
        madeWith: "Hecho con",
        inSpain: "en España",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  load: "languageOnly",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
