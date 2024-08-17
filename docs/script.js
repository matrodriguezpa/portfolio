
function setLanguage(language) {
    const texts = {
        en: {
            language: "EN",
            aboutMe: "About me",
            name: "Mateo Rodríguez Palacios",
            student: "Student | Backend Junior",
            university: "National University of Colombia",
            degree: "Computer & Systems Engineering",
            technologies: "Technologies",
            projects: "Projects",
            azulComics: "AZUL COMICS",
            azulComicsDesc: "is a web platform that allows users to register and upload their own comics to share with the community.",
            budgetBuddyDesktop: "BUDGET BUDDY | DESKTOP",
            budgetBuddyDesktopDesc: "Desktop application (Windows) for managing your household budget, allowing you to make modifications to expenses, income, and planned spending.",
            budgetBuddyMobile: "BUDGET BUDDY | ANDROID",
            budgetBuddyMobileDesc: "Mobile version (Android) of Budget Buddy.",
            transportSystem: "TRANSPORTATION SYSTEM",
            transportSystemDesc: "A transportation admin system for clients and sales of a bus company.",
            receiptManager: "RECEIPT MANAGER",
            receiptManagerDesc: "Java desktop application for tracking receipts and exporting them to an Excel file."
        },
        es: {
            language: "ES",
            aboutMe: "Sobre mí",
            name: "Mateo Rodríguez Palacios",
            student: "Estudiante | Backend Junior",
            university: "Universidad Nacional de Colombia",
            degree: "Ingeniería de Sistemas y Computación",
            technologies: "Tecnologías",
            projects: "Proyectos",
            azulComics: "AZUL CÓMICS",
            azulComicsDesc: "es una plataforma web que permite a los usuarios registrarse y subir sus propios cómics para compartirlos con la comunidad.",
            budgetBuddyDesktop: "BUDGET BUDDY | ESCRITORIO",
            budgetBuddyDesktopDesc: "Aplicación de escritorio (Windows) para gestionar su presupuesto doméstico, permitiendo realizar modificaciones en gastos, ingresos y el gasto planificado.",
            budgetBuddyMobile: "BUDGET BUDDY | ANDROID",
            budgetBuddyMobileDesc: "Versión para móviles (Android) de Budget Buddy.",
            transportSystem: "SISTEMA DE TRANSPORTE",
            transportSystemDesc: "Sistema de administración de transporte para clientes y ventas de una empresa de autobuses.",
            receiptManager: "GESTOR DE RECIBOS",
            receiptManagerDesc: "Aplicación de escritorio Java para rastrear recibos y exportarlos a un archivo de Excel."
        }
    };

    // Actualiza los textos en la página
    document.getElementById("language").textContent = texts[language].language;
    document.getElementById("about-me").textContent = texts[language].aboutMe;
    document.getElementById("name").textContent = texts[language].name;
    document.getElementById("student").textContent = texts[language].student;
    document.getElementById("university").textContent = texts[language].university;
    document.getElementById("degree").textContent = texts[language].degree;
    document.getElementById("technologies-title").textContent = texts[language].technologies;
    document.getElementById("projects-title").textContent = texts[language].projects;
    document.getElementById("azul-comics").textContent = texts[language].azulComics;
    document.getElementById("azul-comics-desc").textContent = texts[language].azulComicsDesc;
    document.getElementById("budget-buddy-desktop").textContent = texts[language].budgetBuddyDesktop;
    document.getElementById("budget-buddy-desktop-desc").textContent = texts[language].budgetBuddyDesktopDesc;
    document.getElementById("budget-buddy-mobile").textContent = texts[language].budgetBuddyMobile;
    document.getElementById("budget-buddy-mobile-desc").textContent = texts[language].budgetBuddyMobileDesc;
    document.getElementById("transport-system").textContent = texts[language].transportSystem;
    document.getElementById("transport-system-desc").textContent = texts[language].transportSystemDesc;
    document.getElementById("receipt-manager").textContent = texts[language].receiptManager;
    document.getElementById("receipt-manager-desc").textContent = texts[language].receiptManagerDesc;
}
