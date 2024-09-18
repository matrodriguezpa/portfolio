function setLanguage(language) {
    const texts = {
        en: {
            pageTitle: "Projects Portfolio",
            language: "EN",
            aboutMe: "About me",
            name: "Mateo Rodríguez Palacios",
            student: "Student | Backend Junior",
            university: "National University of Colombia",
            degree: "Computer & Systems Engineering",
            personalDescription:"My name is Mateo. I'm familiar with building desktop and full-stack web applications using Spring, React, and AWS, MVC and layered architectures, REST APIs, and  relational databases.",
            technologies: "Technologies",
            projects: "Projects",
            repo:"Repo",
            azulComics: "azulcomics.com",
            azulComicsDesc: "A comics website where users can read works by independent authors and publish their own. Made using React and Bootstrap for the frontend, with Spring and MySQL for the backend, and Hosted on AWS S3.",
            oneSpencer: "onespencer",
            oneSpencerDesc: "A desktop application for calculating taxes and exporting this data to Excel. Developed using Java, Maven, and SQLite for local data storage.",
            promediosUNAL: "promediosunal.github.io",
            promediosUNALDesc: "A website designed to help students calculate their grades, built with only JavaScript, CSS, and HTML.",
        },
        es: {
            pageTitle: "Portafolio de proyectos",
            language: "ES",
            aboutMe: "Sobre mí",
            name: "Mateo Rodríguez Palacios",
            student: "Estudiante | Backend Junior",
            university: "Universidad Nacional de Colombia",
            degree: "Ingeniería de Sistemas y Computación",
            personalDescription:"Me llamo Mateo. Estoy familiarizado con la creación de aplicaciones de escritorio usando Java y aplicaciones web fullstack utilizando Spring, React y AWS, así como arquitecturas MVC y en capas, APIs REST y bases de datos relacionales.",
            technologies: "Tecnologías",
            projects: "Proyectos",
            repo:"Repositorio",
            azulComics: "azulcomics.com",
            azulComicsDesc: "Un sitio web de cómics donde los usuarios pueden leer obras de autores independientes y publicar las suyas. Hecho con React y Bootstrap para el frontend, y con Spring y MySQL para el backend, alojado en AWS S3.",
            oneSpencer: "onespencer",
            oneSpencerDesc: "Una aplicación de escritorio para calcular impuestos y exportar estos datos a Excel. Desarrollada con Java, Maven y SQLite para almacenamiento local de datos.",
            promediosUNAL: "promediosunal.github.io",
            promediosUNALDesc: "Un sitio web diseñado para ayudar a los estudiantes a calcular sus calificaciones, construido solo con JavaScript, CSS y HTML.",
        }
    };

    // Actualiza los textos en la página
    document.getElementById("page-title").textContent = texts[language].pageTitle;
    document.getElementById("language").textContent = texts[language].language;
    document.getElementById("about-me").textContent = texts[language].aboutMe;
    document.getElementById("name").textContent = texts[language].name;
    document.getElementById("student").textContent = texts[language].student;
    document.getElementById("university").textContent = texts[language].university;
    document.getElementById("degree").textContent = texts[language].degree;
    document.getElementById("personal-description").textContent = texts[language].personalDescription;
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
