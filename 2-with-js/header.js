window.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  const logo = document.createElement("img");
  logo.alt = "logo";

  const home = document.createElement("a");
  const blog = document.createElement("a");
  const about = document.createElement("a");

  home.href = "/index.html";
  blog.href = "/blog.html";
  about.href = "/about.html";

  home.textContent = "Home";
  blog.textContent = "Blog";
  about.textContent = "About";

  header.appendChild(logo);
  header.appendChild(nav);

  nav.appendChild(home);
  nav.appendChild(blog);
  nav.appendChild(about);

  const main = document.getElementsByTagName("main")[0];

  document.body.insertBefore(header, main);
});
