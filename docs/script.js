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
            repo:"Repo",
            azulComics: "azulcomics.com",
            azulComicsDesc: "is a web platform that allows users to register and upload their own comics to share with the community.",
            oneSpencer: "onespencer",
            oneSpencerDesc: "Desktop application (Windows) for managing your household budget, allowing you to make modifications to expenses, income, and planned spending.",
            promediosUNAL: "promediosunal.github.io",
            promediosUNALDesc: "Mobile version (Android) of Budget Buddy.",
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
            repo:"Repositorio",
            azulComics: "azulcomics.com",
            azulComicsDesc: "is a web platform that allows users to register and upload their own comics to share with the community.",
            oneSpencer: "onespencer",
            oneSpencerDesc: "Desktop application (Windows) for managing your household budget, allowing you to make modifications to expenses, income, and planned spending.",
            promediosUNAL: "promediosunal.github.io",
            promediosUNALDesc: "Mobile version (Android) of Budget Buddy.",
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
    document.getElementById("one-spencer").textContent = texts[language].oneSpencer;
    document.getElementById("one-spencer-desc").textContent = texts[language].oneSpencerDesc;
    document.getElementById("promedios-unal").textContent = texts[language].promediosUNAL;
    document.getElementById("promedios-unal-desc").textContent = texts[language].promediosUNALDesc;

    const repoElements = document.getElementsByClassName("repo");
    for (let i = 0; i < repoElements.length; i++) {
        repoElements[i].textContent = texts[language].repo;
    }
}
