let currentLang = 'en';
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => initPortfolio(data));

function initPortfolio(data) {
    window.portfolioData = data;
    setLanguage(currentLang);
    renderTagFilters();
    renderProjects();
}

function setLanguage(lang) {
    currentLang = lang;
    const info = portfolioData.presentation[lang];
    //Header
    document.getElementById('page-title').textContent = info.pageTitle;
    document.getElementById('language-btn').textContent = lang.toUpperCase();
    document.getElementById('projects-title').textContent = info.projectsTitle;
    //Presentation section
    document.getElementById('name').textContent = info.name;
    document.getElementById('student').textContent = info.student;
    document.getElementById('university').textContent = info.university;
    document.getElementById('degree').textContent = info.degree;
    //About section
    document.getElementById('about-me').textContent = info.aboutTitle;
    document.getElementById('personal-description').innerHTML = info.personalDescription.replace(/\n/g, '<br>');
}

function getUniqueTags() {
    return window.portfolioData.tech;
}

function getTechDetails(techNames) {
    return techNames.map(name => {
        return portfolioData.tech.find(t => t.name === name) || {name: name, logo: ''};
    });
}

function renderTagFilters() {
    const container = document.getElementById('tag-filters');
    container.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.textContent = 'All';
    allBtn.onclick = () => renderProjects();
    container.appendChild(allBtn);

    getUniqueTags().forEach(t => {
        const btn = document.createElement('button');
        btn.onclick = () => renderProjects(t.name);

        const img = document.createElement('img');
        img.src = t.logo;
        img.alt = `${t.name} logo`;
        img.width = 24;
        img.height = 24;

        const textWrapper = document.createElement('div');
        textWrapper.className = 'button-text'; // or any class name you prefer
        textWrapper.textContent = t.name;

        btn.appendChild(img);
        btn.appendChild(textWrapper);
        container.appendChild(btn);
    });
}
// 2. renderProjects.js
function renderProjects(filterTag) {
    const list = document.getElementById("projects-list");
    list.innerHTML = "";

    portfolioData.projects
        .filter((p) => !filterTag || p.tech.includes(filterTag))
        .forEach((p) => {
            // <li>
            const li = document.createElement("li");

            // — Preview image link
            const previewLink = document.createElement("a");
            previewLink.href = p.url;
            previewLink.target = "_blank";

            const previewImg = document.createElement("img");
            previewImg.src = p.previewImage;
            previewImg.alt = `${p.name} Preview`;
            previewLink.appendChild(previewImg);
            li.appendChild(previewLink);

            // — project-tech wrapper
            const techDiv = document.createElement("div");
            techDiv.className = "project-tech";

            // — links (project URL, repo, desc)
            const linksDiv = document.createElement("div");
            linksDiv.className = "links";

            const projectLink = document.createElement("a");
            // normalize id: alphanumeric + dashes
            const safeId = p.id || p.name.toLowerCase().replace(/\W+/g, "-");
            projectLink.id = safeId;
            projectLink.href = p.url;
            projectLink.target = "_blank";
            projectLink.textContent = p.name; //p.url.replace(/^https?:\/\//, "");
            linksDiv.appendChild(projectLink);

            const repoLink = document.createElement("a");
            repoLink.className = "repo";
            repoLink.href = p.repo;
            repoLink.target = "_blank";
            repoLink.textContent = "source code";
            linksDiv.appendChild(repoLink);

            const desc = document.createElement("p");
            desc.id = `${safeId}-desc`;
            desc.textContent = p.desc[currentLang];
            linksDiv.appendChild(desc);

            techDiv.appendChild(linksDiv);

            // — tech logos (each linking to the tech’s homepage)
            getTechDetails(p.tech).forEach((t) => {
                const aTech = document.createElement("a");
                aTech.href = t.url;
                aTech.target = "_blank";

                const imgTech = document.createElement("img");
                imgTech.src = t.logo;
                imgTech.alt = `${t.name} Logo`;
                imgTech.width = 50;
                imgTech.height = 50;

                aTech.appendChild(imgTech);
                techDiv.appendChild(aTech);
            });

            li.appendChild(techDiv);
            list.appendChild(li);
        });
}
