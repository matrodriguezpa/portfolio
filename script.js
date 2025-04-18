let currentLang = 'en';

function initPortfolio(data) {
    window.portfolioData = data;
    setLanguage(currentLang);
    renderTagFilters();
    renderProjects();
}

function setLanguage(lang) {
    currentLang = lang;
    const info = portfolioData.presentation[lang];
    document.getElementById('page-title').textContent = info.pageTitle;
    document.getElementById('language-btn').textContent = lang.toUpperCase();
    document.getElementById('projects-title').textContent = info.projectsTitle;

    document.getElementById('name').textContent = info.name;
    document.getElementById('student').textContent = info.student;
    document.getElementById('university').textContent = info.university;
    document.getElementById('degree').textContent = info.degree;
    document.getElementById('personal-description').textContent = info.personalDescription;

}

function getUniqueTags() {
    return window.portfolioData.tech;
}

function getTechDetails(techNames) {
    return techNames.map(name => {
        return portfolioData.tech.find(t => t.name === name) || { name: name, logo: '' };
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

        btn.appendChild(img);
        btn.appendChild(document.createTextNode(t.name));
        container.appendChild(btn);
    });
}

function renderProjects(filterTag) {
    const list = document.getElementById('projects-list');
    list.innerHTML = '';

    portfolioData.projects
        .filter(p => !filterTag || p.tech.includes(filterTag))
        .forEach(p => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = p.url;
            a.target = '_blank';
            a.textContent = p.name;
            li.appendChild(a);

            const desc = document.createElement('p');
            desc.textContent = p.desc[currentLang];
            li.appendChild(desc);

            const techDiv = document.createElement('div');
            techDiv.className = 'project-tech';

            // Mapea cada string a objeto con nombre y logo
            getTechDetails(p.tech).forEach(t => {
                const span = document.createElement('span');

                const img = document.createElement('img');
                img.src = t.logo;
                img.alt = `${t.name} logo`;
                img.width = 24;
                img.height = 24;
                span.appendChild(img);

                const text = document.createTextNode(t.name);
                span.appendChild(text);

                techDiv.appendChild(span);
            });

            li.appendChild(techDiv);
            list.appendChild(li);
        });
}
