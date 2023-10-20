import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// const getData = async () => {
//   try {
//     const response = await fetch("./data/DATA.json");
//     const data = await response.json();
//     renderData(data.restaurants);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const renderData = (result) => {
//   const restoList = document.querySelector(".card-list");
//   result.forEach((resto) => {
//     const restoItem = document.createElement("article");
//     restoItem.setAttribute("class", "card");
//     restoItem.setAttribute("tabindex", "0");
//     restoItem.innerHTML = `<p class="location">${resto.city}</p>
//     <img
//     src="${resto.pictureId}"
//     alt="${resto.name}"
//     class="card-image"
//     />
//     <div class="card-text">
//     <p>Rating ${resto.rating}</p>
//     <h3>${resto.name}</h3>
//     <p class="card-description">
//     ${resto.description}
//     </p>
//     </div>`;
//     restoList.appendChild(restoItem);
//   });
// };

// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("nav");
// hamburger.addEventListener("click", () => {
//   if (navMenu.style.display === "none") {
//     navMenu.style.display = "block";
//   } else {
//     navMenu.style.display = "none";
//   }
// });

// getData();
