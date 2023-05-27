// Get all project articles
const projectArticles = document.querySelectorAll("article");
const project = document.getElementById('project')
const contacts = document.getElementById('contacts')
const projects = document.getElementById('projects')
const cnts = document.getElementById('contact')
// Add click event listener to each project article
projectArticles.forEach((article) => {
  const projectDescription = article.querySelector(".project-description");

  article.addEventListener("click", () => {
    projectDescription.classList.toggle("show-description");
  });
});
project.addEventListener('click', () => {

  projects.classList.toggle("show-description");
  cnts.classList.remove("show-description");
})
contacts.addEventListener('click', () => {

  cnts.classList.toggle("show-description");
  projects.classList.remove("show-description");
})