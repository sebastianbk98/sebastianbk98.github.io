const projectsList = document.getElementById("projects-list");

let projectsListHTML = projects
  .map((project) => {
    return `
  <a href="${project.link}" class="td-none">
    <div class="project row align-items-center">
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
