// All the text on the site lives here, in English (en) and Spanish (es).
// To change a sentence, edit it here — the components just read from this object.

export const links = {
  email: "wilveradoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/wilverguzman/",
  github: "https://github.com/wilveradoo",
  cv: { en: "/cv-wilver-guzman.pdf", es: "/cv-wilver-guzman-es.pdf" },
  cvNetsuite: { en: "/cv-wilver-guzman-netsuite.pdf", es: "/cv-wilver-guzman-netsuite-es.pdf" },
};

// Tech stack shown as badges (same in both languages)
export const stack = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vite", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python", "Flask", "SQL", "SQLite", "REST APIs"],
  Tools: ["Git", "Vercel", "Docker", "Playwright", "Tokko Broker API", "Botmaker", "WordPress", "AI-assisted dev"],
};

export const content = {
  en: {
    nav: { about: "About", projects: "Projects", features: "Features", stack: "Stack", hardware: "Hardware", contact: "Contact" },
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
        "I designed and built a production real estate platform in Next.js that serves 400+ live listings through the Tokko Broker API, and a full stack loyalty app for a barbershop with React, Node.js/Express and SQLite. I like owning a feature end to end: talking with the client, writing the code, testing it and shipping it.",
        "I use AI tools every day to move faster, and I speak English at a C1 level, so I'm comfortable working with international teams.",
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Madero Realty",
          url: "https://maderorealty.com",
          image: "/projects/madero.jpg",
          description:
            "Full real estate website for an agency in Puerto Madero and Nordelta. 400+ live listings from the Tokko Broker API, search filters, map view, saved properties and contact/valuation forms.",
          tags: ["Next.js", "React", "REST API", "SSR"],
          featured: true,
        },
        {
          name: "Pikaros Club",
          url: "https://pikaros-club.vercel.app",
          image: "/projects/pikaros.jpg",
          description:
            "Loyalty web app for Pikaros, a barbershop with two branches in Buenos Aires. Admin panel for desktop and customer accounts for mobile: points per visit, friend referrals, reward redemption, QR membership card, CSV export and backups. Secured API and automated tests. Also includes the shop's online booking system.",
          tags: ["React", "Node.js", "Express", "SQLite", "Playwright"],
          featured: true,
        },
        {
          name: "Beescend / FixBee",
          url: "https://beescend.com",
          image: "/projects/beescend.jpg",
          description:
            "Part of the team behind FixBee, a SaaS platform for repair workshops in Latin America (work orders, point of sale, spare parts inventory and automatic WhatsApp, email and SMS notifications). I built the landing page with Next.js, React and Tailwind CSS, and worked on the backend and on the sales side.",
          tags: ["SaaS", "Next.js", "Backend", "Sales"],
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
    netsuite: {
      teaserTitle: "NetSuite development",
      teaserBody:
        "Since February 2024 I have also worked hands-on with Oracle NetSuite on client projects: SuiteScript 2.1, RESTlets, SuiteQL, SuiteFlow and SDF. See what I built.",
      teaserCta: "NetSuite page",
      back: "← Back to portfolio",
      role: "Junior NetSuite Developer",
      tagline:
        "SuiteScript 2.1 developer who also ships full stack web apps with React and Node.js. Based in Buenos Aires, working remotely.",
      ctaCv: "Download NetSuite CV",
      ctaContact: "Get in touch",
      experienceTitle: "Experience",
      experienceIntro:
        "Since February 2024 I have collaborated informally on NetSuite client projects across hotels, accounting firms and other industries, working alongside an experienced NetSuite developer. The work below is what I built myself.",
      projects: [
        {
          name: "Credit limit validation",
          description:
            "User Event script that blocks sales orders from customers over their credit limit, with a role-based bypass configured through Script Parameters and auditing with N/log.",
          tags: ["SuiteScript 2.1", "User Event", "N/log"],
        },
        {
          name: "Overdue invoice reminders",
          description:
            "Map/Reduce script that sends one consolidated email per customer with their overdue invoices. Safe to re-run without duplicate emails, with error reporting in the summarize stage.",
          tags: ["SuiteScript 2.1", "Map/Reduce"],
        },
        {
          name: "E-commerce integration",
          description:
            "RESTlet with Token-Based Authentication that lets an online store create Sales Orders and query stock in real time, using SuiteQL.",
          tags: ["RESTlet", "SuiteQL", "Token-Based Auth"],
        },
        {
          name: "Purchase Order approvals",
          description:
            "Multi-level approval workflow in SuiteFlow with automatic escalation and dynamic approvers.",
          tags: ["SuiteFlow", "Workflows"],
        },
        {
          name: "SuiteScript 1.0 to 2.1 migration",
          description:
            "Migrated legacy scripts to SuiteScript 2.1 and set up an SDF project versioned in Git, with a Sandbox, code review and production release flow.",
          tags: ["SDF", "Git", "SuiteScript 2.1"],
        },
      ],
      stackTitle: "NetSuite stack",
      stack: [
        "SuiteScript 2.1",
        "User Event",
        "Map/Reduce",
        "RESTlets",
        "SuiteQL",
        "SuiteFlow",
        "SDF",
        "Token-Based Authentication",
        "Git",
        "JavaScript",
      ],
      note: "I do not hold NetSuite certifications yet. SuiteFoundation is the next step.",
    },
    features: {
      title: "Featured features",
      intro: "Some of the features I built that I'm proudest of, from real projects.",
      items: [
        {
          title: "Interactive property map",
          project: "Madero Realty",
          image: "/projects/feat-map.jpg",
          description:
            "All the live listings plotted on an interactive map with clustered markers, so visitors can explore by area instead of scrolling a list.",
          tags: ["Next.js", "Maps", "Tokko API"],
        },
        {
          title: "Search and filters on 400+ listings",
          project: "Madero Realty",
          image: "/projects/feat-filters.jpg",
          description:
            "Filter by operation (sale, rent, temporary), location, type and rooms, with saved properties. Listings sync from the Tokko Broker API.",
          tags: ["Next.js", "REST API", "SSR"],
        },
        {
          title: "Online booking flow",
          project: "Pikaros",
          image: "/projects/feat-booking.jpg",
          description:
            "Step-by-step appointment booking for a barbershop with two branches, designed to be fast on a phone and clear at every step.",
          tags: ["React", "Node.js", "Express"],
        },
      ],
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
    nav: { about: "Sobre mí", projects: "Proyectos", features: "Funciones", stack: "Stack", hardware: "Hardware", contact: "Contacto" },
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
        "Diseñé y desarrollé una plataforma inmobiliaria en producción con Next.js que muestra más de 400 propiedades en vivo a través de la API de Tokko Broker, y una app full stack de fidelización para una barbería con React, Node.js/Express y SQLite. Me gusta encargarme de una funcionalidad de punta a punta: hablar con el cliente, escribir el código, testearlo y publicarlo.",
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
          name: "Pikaros Club",
          url: "https://pikaros-club.vercel.app",
          image: "/projects/pikaros.jpg",
          description:
            "App web de fidelización para Pikaros, una barbería con dos sucursales en CABA. Panel de administración para PC y cuentas de clientes para celular: puntos por visita, referidos, canje de premios, credencial QR, exportación CSV y backups. API protegida y tests automatizados. Incluye también el sistema de turnos online de la barbería.",
          tags: ["React", "Node.js", "Express", "SQLite", "Playwright"],
          featured: true,
        },
        {
          name: "Beescend / FixBee",
          url: "https://beescend.com",
          image: "/projects/beescend.jpg",
          description:
            "Parte del equipo detrás de FixBee, una plataforma SaaS para talleres de reparación de Latinoamérica (órdenes de trabajo, punto de venta, inventario de repuestos y notificaciones automáticas por WhatsApp, email y SMS). Desarrollé la landing con Next.js, React y Tailwind CSS, y trabajé en el backend y en la parte de ventas.",
          tags: ["SaaS", "Next.js", "Backend", "Ventas"],
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
    netsuite: {
      teaserTitle: "Desarrollo en NetSuite",
      teaserBody:
        "Desde febrero de 2024 también trabajo con Oracle NetSuite en proyectos de clientes: SuiteScript 2.1, RESTlets, SuiteQL, SuiteFlow y SDF. Mirá lo que construí.",
      teaserCta: "Página de NetSuite",
      back: "← Volver al portfolio",
      role: "NetSuite Developer Junior",
      tagline:
        "Desarrollador SuiteScript 2.1 que también publica aplicaciones web full stack con React y Node.js. Desde Buenos Aires, trabajando en remoto.",
      ctaCv: "Descargar CV de NetSuite",
      ctaContact: "Contactame",
      experienceTitle: "Experiencia",
      experienceIntro:
        "Desde febrero de 2024 colaboro de manera informal en proyectos de NetSuite para clientes de hotelería, estudios contables y otros rubros, junto a un desarrollador NetSuite con experiencia. Lo que sigue es lo que construí yo.",
      projects: [
        {
          name: "Validación de límite de crédito",
          description:
            "Script User Event que bloquea órdenes de venta de clientes que superan su límite de crédito, con excepción por rol configurada mediante Script Parameters y auditoría con N/log.",
          tags: ["SuiteScript 2.1", "User Event", "N/log"],
        },
        {
          name: "Recordatorios de facturas vencidas",
          description:
            "Script Map/Reduce que envía un solo email consolidado por cliente con sus facturas vencidas. Se puede volver a ejecutar sin duplicar envíos, con reporte de errores en la etapa summarize.",
          tags: ["SuiteScript 2.1", "Map/Reduce"],
        },
        {
          name: "Integración con e-commerce",
          description:
            "RESTlet con Token-Based Authentication que permite a una tienda online crear Sales Orders y consultar stock en tiempo real, usando SuiteQL.",
          tags: ["RESTlet", "SuiteQL", "Token-Based Auth"],
        },
        {
          name: "Aprobación de órdenes de compra",
          description:
            "Workflow de aprobación multinivel en SuiteFlow con escalamiento automático y aprobadores dinámicos.",
          tags: ["SuiteFlow", "Workflows"],
        },
        {
          name: "Migración de SuiteScript 1.0 a 2.1",
          description:
            "Migré scripts heredados a SuiteScript 2.1 y armé un proyecto SDF versionado en Git, con flujo de Sandbox, revisión de código y paso a producción.",
          tags: ["SDF", "Git", "SuiteScript 2.1"],
        },
      ],
      stackTitle: "Stack NetSuite",
      stack: [
        "SuiteScript 2.1",
        "User Event",
        "Map/Reduce",
        "RESTlets",
        "SuiteQL",
        "SuiteFlow",
        "SDF",
        "Token-Based Authentication",
        "Git",
        "JavaScript",
      ],
      note: "Todavía no tengo certificaciones de NetSuite. SuiteFoundation es el próximo paso.",
    },
    features: {
      title: "Funciones destacadas",
      intro: "Algunas de las funciones que más me enorgullecen, de proyectos reales.",
      items: [
        {
          title: "Mapa interactivo de propiedades",
          project: "Madero Realty",
          image: "/projects/feat-map.jpg",
          description:
            "Todas las propiedades publicadas sobre un mapa interactivo con marcadores agrupados, para explorar por zona en lugar de recorrer una lista.",
          tags: ["Next.js", "Mapas", "Tokko API"],
        },
        {
          title: "Búsqueda y filtros sobre 400+ propiedades",
          project: "Madero Realty",
          image: "/projects/feat-filters.jpg",
          description:
            "Filtros por operación (venta, alquiler, temporario), ubicación, tipo y ambientes, con propiedades guardadas. El listado se sincroniza con la API de Tokko Broker.",
          tags: ["Next.js", "REST API", "SSR"],
        },
        {
          title: "Reserva de turnos online",
          project: "Pikaros",
          image: "/projects/feat-booking.jpg",
          description:
            "Reserva de turnos paso a paso para una barbería con dos sucursales, pensada para ser rápida desde el celular y clara en cada paso.",
          tags: ["React", "Node.js", "Express"],
        },
      ],
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
