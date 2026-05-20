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
        bio: "I'm a passionate Full Stack Developer who enjoys building clean, scalable, and well-structured applications following good architecture practices, with a focus on maintainability, performance, and simplicity. Most of my repositories are based on real-world setups, boilerplates, and complete project structures. I'm always interested in exploring new tools, improving my coding practices, and understanding how things work under the hood.",
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
            period: "February 2025 — May 2026",
            description:
              "At Ironchip, a cybersecurity company specializing in passwordless authentication and Identity & Access Management (IAM), I worked as a Frontend & Mobility Developer contributing to several layers of the product, within an Agile team.\n\nOn the frontend, I worked on the administration panel of their passwordless IAM platform (SaaS) — built with React and TypeScript — adding new features and maintaining modules for user, group and device management, conditional access policies, IP rules, permissions, location-based authentication and corporate customization.\n\nI also participated in the maintenance of a TypeScript SDK as a communication layer with backend services, and collaborated in the development of Go SDKs for desktop and mobile authenticators.",
          },
          {
            company: "Accenture",
            role: "Java Developer",
            period: "June 2022 — September 2024",
            description:
              "At Accenture, I worked as a Java Developer on a project for a major energy sector client, contributing to the maintenance and evolution of commercial billing systems.\n\nI worked with Java and DB2 on backend systems, writing unit tests with JUnit 5 and Mockito, and maintaining code quality standards through SonarQube analysis, all within an Agile team.",
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
          "Los detalles importan, la simplicidad gana",
          "Construyo cosas en las que creo",
        ],
        viewWork: "Ver mi trabajo",
        getInTouch: "Contáctame",
      },
      // About Section
      about: {
        title: "Sobre Mí",
        bio: "Soy un desarrollador Full Stack apasionado al que le encanta construir aplicaciones limpias, escalables y bien estructuradas siguiendo buenas prácticas de arquitectura, con foco en la mantenibilidad, el rendimiento y la simplicidad. La mayoría de mis repositorios están basados en configuraciones del mundo real, boilerplates y estructuras completas de proyecto. Siempre me ha interesado explorar nuevas herramientas, mejorar mis prácticas de desarrollo y entender cómo funcionan las cosas por dentro.",
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
            period: "Febrero 2025 — Mayo 2026",
            description:
              "En Ironchip, empresa de ciberseguridad especializada en autenticación passwordless e Identity & Access Management (IAM), trabajé como desarrollador Frontend y Mobility contribuyendo a varias capas del producto, dentro de un equipo con metodologías ágiles.\n\nEn el frontend, trabajé sobre el panel de administración de su plataforma SaaS de autenticación passwordless e IAM — construido con React y TypeScript — añadiendo nuevas funcionalidades y manteniendo módulos de gestión de usuarios, grupos y dispositivos, control de acceso condicional, reglas de IP, permisos, autenticación basada en localización y personalización corporativa.\n\nTambién participé en el mantenimiento de un SDK en TypeScript como capa de comunicación con los servicios backend, y colaboré en el desarrollo de SDKs en Go para los autenticadores de escritorio y móvil.",
          },
          {
            company: "Accenture",
            role: "Desarrollador Java",
            period: "Junio 2022 — Septiembre 2024",
            description:
              "En Accenture, trabajé como desarrollador Java en un proyecto para un importante cliente del sector energético, contribuyendo al mantenimiento y evolución de sistemas comerciales de cobro.\n\nTrabajé con Java y DB2 en sistemas backend, escribiendo tests unitarios con JUnit 5 y Mockito, y manteniendo los estándares de calidad del código mediante análisis con SonarQube, todo ello dentro de un equipo con metodologías ágiles.",
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
