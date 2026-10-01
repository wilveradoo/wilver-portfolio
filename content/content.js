// All the text on the site lives here, in English (en) and Spanish (es).
// To change a sentence, edit it here — the components just read from this object.

export const links = {
  email: "wilveradoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/wilverguzman/",
  github: "https://github.com/wilveradoo",
  cv: { en: "/cv-wilver-guzman.pdf", es: "/cv-wilver-guzman-es.pdf" },
};

// Tech stack shown as badges (same in both languages)
export const stack = {
  Frontend: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "Flask", "SQL", "REST APIs"],
  Tools: ["Git", "Vercel", "Tokko Broker API", "Botmaker", "WordPress", "AI-assisted dev"],
};

export const content = {
  en: {
    nav: { about: "About", projects: "Projects", stack: "Stack", hardware: "Hardware", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      tagline:
        "I build fast, real-world web apps with React, Next.js and Node.js. Based in Buenos Aires, working remotely.",
      ctaProjects: "See my work",
      ctaCv: "Download CV",
    },
    about: {
      title: "About me",
      body: [
        "I'm a Computer Technician (Escuela Técnica N°32) who has been taking computers apart and putting them back together since I was a kid. Today I turn that curiosity into software.",
        "I designed and built a production real estate platform in Next.js that serves 400+ live listings through the Tokko Broker API. I like owning a feature end to end: talking with the client, writing the code and shipping it.",
        "I use AI tools every day to move faster, and I speak English at a C1 level, so I'm comfortable working with international teams.",
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Madero Realty",
          url: "https://maderorealty.com",
          description:
            "Full real estate website for an agency in Puerto Madero and Nordelta. 400+ live listings from the Tokko Broker API, search filters, map view, saved properties and contact/valuation forms.",
          tags: ["Next.js", "React", "REST API", "SSR"],
          featured: true,
        },
        {
          name: "Beescend / FixBee",
          url: "https://beescend.com",
          description:
            "Part of the team behind FixBee, a SaaS platform for repair workshops in Latin America (work orders, point of sale, spare parts inventory and automatic WhatsApp, email and SMS notifications). I worked on the backend and on the sales side.",
          tags: ["SaaS", "Backend", "Sales"],
        },
        {
          name: "This portfolio",
          url: "https://github.com/wilveradoo/wilver-portfolio",
          description:
            "Bilingual (EN/ES) portfolio built with Next.js and Tailwind CSS, with a working contact form. Deployed on Vercel.",
          tags: ["Next.js", "Tailwind CSS", "Vercel"],
        },
        {
          name: "Python APIs & dashboards",
          description:
            "Personal projects building REST endpoints with Flask and simple dashboards to visualize data.",
          tags: ["Python", "Flask", "SQL"],
        },
        {
          name: "Chatbots",
          description:
            "Conversational flows on Botmaker with JavaScript logic to automate customer conversations.",
          tags: ["Botmaker", "JavaScript"],
        },
      ],
      visit: "Visit site",
      code: "View code",
    },
    stack: { title: "Tech stack" },
    hardware: {
      title: "Hardware & Arduino",
      body: "Before writing software I was building hardware. I assemble and troubleshoot my own PCs, and I build Arduino prototypes with sensors and microcontrollers. Understanding the machine helps me write better code.",
      items: ["Custom PC builds", "Arduino prototypes", "Sensors & microcontrollers", "Troubleshooting"],
    },
    contact: {
      title: "Let's talk",
      body: "Looking for a developer for your team? Send me a message and I'll get back to you within 24 hours.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Thanks! Your message was sent.",
      error: "Something went wrong. Please email me directly.",
    },
    footer: "Built with Next.js and Tailwind CSS.",
  },

  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", stack: "Stack", hardware: "Hardware", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      tagline:
        "Construyo aplicaciones web rápidas y reales con React, Next.js y Node.js. Desde Buenos Aires, trabajando en remoto.",
      ctaProjects: "Ver mi trabajo",
      ctaCv: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      body: [
        "Soy Técnico en Computación (Escuela Técnica N°32) y desarmo y armo computadoras desde chico. Hoy transformo esa curiosidad en software.",
        "Diseñé y desarrollé una plataforma inmobiliaria en producción con Next.js que muestra más de 400 propiedades en vivo a través de la API de Tokko Broker. Me gusta encargarme de una funcionalidad de punta a punta: hablar con el cliente, escribir el código y publicarlo.",
        "Uso herramientas de IA todos los días para trabajar más rápido y hablo inglés nivel C1, así que me siento cómodo trabajando con equipos internacionales.",
      ],
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          name: "Madero Realty",
          url: "https://maderorealty.com",
          description:
            "Sitio web completo para una inmobiliaria de Puerto Madero y Nordelta. Más de 400 propiedades en vivo desde la API de Tokko Broker, filtros de búsqueda, mapa, favoritos y formularios de contacto y tasación.",
          tags: ["Next.js", "React", "REST API", "SSR"],
          featured: true,
        },
        {
          name: "Beescend / FixBee",
          url: "https://beescend.com",
          description:
            "Parte del equipo detrás de FixBee, una plataforma SaaS para talleres de reparación de Latinoamérica (órdenes de trabajo, punto de venta, inventario de repuestos y notificaciones automáticas por WhatsApp, email y SMS). Trabajé en el backend y en la parte de ventas.",
          tags: ["SaaS", "Backend", "Ventas"],
        },
        {
          name: "Este portfolio",
          url: "https://github.com/wilveradoo/wilver-portfolio",
          description:
            "Portfolio bilingüe (EN/ES) hecho con Next.js y Tailwind CSS, con formulario de contacto funcional. Publicado en Vercel.",
          tags: ["Next.js", "Tailwind CSS", "Vercel"],
        },
        {
          name: "APIs y dashboards en Python",
          description:
            "Proyectos personales armando endpoints REST con Flask y dashboards simples para visualizar datos.",
          tags: ["Python", "Flask", "SQL"],
        },
        {
          name: "Chatbots",
          description:
            "Flujos conversacionales en Botmaker con lógica en JavaScript para automatizar conversaciones con clientes.",
          tags: ["Botmaker", "JavaScript"],
        },
      ],
      visit: "Ver sitio",
      code: "Ver código",
    },
    stack: { title: "Tecnologías" },
    hardware: {
      title: "Hardware y Arduino",
      body: "Antes de escribir software ya armaba hardware. Armo y reparo mis propias PCs y construyo prototipos con Arduino, sensores y microcontroladores. Entender la máquina me ayuda a escribir mejor código.",
      items: ["PCs armadas a mano", "Prototipos con Arduino", "Sensores y microcontroladores", "Diagnóstico y reparación"],
    },
    contact: {
      title: "Hablemos",
      body: "¿Buscás un desarrollador para tu equipo? Mandame un mensaje y te respondo en menos de 24 horas.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Gracias! Tu mensaje fue enviado.",
      error: "Algo salió mal. Escribime directo por email.",
    },
    footer: "Hecho con Next.js y Tailwind CSS.",
  },
};
