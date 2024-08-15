const frameworksList = document.getElementsByClassName("framework")[0];
const projectsList = document.getElementById("projects-list");

const frameworksListHTML = frameworks
  .map(
    (framework, index) => `
  <img
    class="framework-image"
    height="64px"
    width="64px"
    src="${framework.src}"
    data-bs-toggle="tooltip" 
    data-bs-title="${framework.title}"
    data-bs-placement="bottom"
    style="transition-delay: ${index * 100}ms;"
    loading="lazy"
  />`
  )
  .join("");
frameworksList.innerHTML = frameworksListHTML;

const projectsListHTML = projects
  .map((project) => {
    return `
  <a href="${project.link}" class="td-none">
    <div class="row align-items-center project">
      <div class="col-md-4 project-title">
        ${project.title}
      </div> 
      <div class="stack col-md-4 justify-content-center my-auto">
      ${project.frameworks
        .map((framework) => {
          return `
          <img
            class="project-framework"
            height="32px"
            width="32px"
            src="${
              framework.toLowerCase() === "bootstrap"
                ? "assets/icon/bootstrap.svg"
                : framework.toLowerCase() === "express"
                ? "assets/icon/express.svg"
                : framework.toLowerCase() === "laravel"
                ? "assets/icon/laravel.svg"
                : framework.toLowerCase() === "nodejs"
                ? "assets/icon/nodejs.svg"
                : framework.toLowerCase() === "react"
                ? "assets/icon/react.svg"
                : framework.toLowerCase() === "django"
                ? "assets/icon/django.svg"
                : framework.toLowerCase() === "python"
                ? "assets/icon/python.svg"
                : framework.toLowerCase() === "typescript"
                ? "assets/icon/ts.svg"
                : framework.toLowerCase() === "mongodb"
                ? "assets/icon/mongodb.svg"
                : framework.toLowerCase() === "css"
                ? "assets/icon/css.svg"
                : "assets/icon/html.svg"
            }"
            loading="lazy"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="${framework}"
          />
        `;
        })
        .join("")}
      </div> 
      <div class="col-md-4">
        <img
          class="project-image mx-auto"
          src="${project.img}"
          alt="${project.title}"
          loading="lazy"
        />
      </div>
    </div>
  </a>
  `;
  })
  .join("");

projectsList.innerHTML = projectsListHTML;

const frameworksListElement =
  document.getElementsByClassName("framework-image");
const projectsListElement = document.getElementsByClassName("project");
const contactsListElement = document.getElementsByClassName("card");

const observeFramework = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animated-translate-y", entry.isIntersecting);
  });
});

for (let i = 0; i < frameworksListElement.length; i++) {
  const el = frameworksListElement[i];
  observeFramework.observe(el);
}

for (let i = 0; i < contactsListElement.length; i++) {
  const el = contactsListElement[i];
  observeFramework.observe(el);
}

const observeProject = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animated-translate-x", entry.isIntersecting);
  });
});

for (let i = 0; i < projectsListElement.length; i++) {
  const el = projectsListElement[i];
  observeProject.observe(el);
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
