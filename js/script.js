const frameworksList = document.getElementsByClassName("framework")[0];
const projectsList = document.getElementById("projects-list");

const frameworksListHTML = frameworks
  .map(
    (framework, index) => `
  <img
    class="framework-image"
    height="64px"
    width="64px"
    src="${framework}"
    style="transition-delay: ${index * 200}ms;"
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
              framework === "bootstrap"
                ? "assets/icon/bootstrap.svg"
                : framework === "express"
                ? "assets/icon/express.svg"
                : framework === "laravel"
                ? "assets/icon/laravel.svg"
                : framework === "nodejs"
                ? "assets/icon/nodejs.svg"
                : framework === "react"
                ? "assets/icon/react.svg"
                : framework === "ts"
                ? "assets/icon/ts.svg"
                : framework === "mongodb"
                ? "assets/icon/mongodb.svg"
                : framework === "css"
                ? "assets/icon/css.svg"
                : "assets/icon/html.svg"
            }"
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

const observeFramework = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "animated-translate-y",
        entry.isIntersecting
      );
    });
  },
  { threshold: 1 }
);

for (let i = 0; i < frameworksListElement.length; i++) {
  const el = frameworksListElement[i];
  observeFramework.observe(el);
}

for (let i = 0; i < contactsListElement.length; i++) {
  const el = contactsListElement[i];
  observeFramework.observe(el);
}

const observeProject = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "animated-translate-x",
        entry.isIntersecting
      );
    });
  },
  { threshold: 0 }
);

for (let i = 0; i < projectsListElement.length; i++) {
  const el = projectsListElement[i];
  observeProject.observe(el);
}
