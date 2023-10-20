import RestoSource from '../../data/resto-source';
import { createRestoCardTemplate } from '../template/resto-template';
import Loading from '../template/loading';

const HomePage = {
  async render() {
    return `
        <section id="hero-section" tabindex="0">
        <div class="hero-text">
          <h2>Find Your <span class="second-color">Favorite Resto</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptate quod
            voluptatibus quos doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptate quod voluptatibus quos
            doloribus quidem voluptas. lorem20
          </p>
          <a href="#resto" class="find-resto">Explore</a>
        </div>
        <div class="hero-image">
        <picture class="hero-image">
  <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
         <source type="image/webp" srcset="./images/heros/hero-image_2.webp">
          <img src="./images/heros/hero-image_2-large.jpg" alt="Find Resto" />
        </picture>
        </div>
      </section>
      <section id="resto" tabindex="0">
        <h2 class="resto-title">
          Explore <span class="second-color">Restaurant</span>
        </h2>
        <div class="card-list no-scrollbar">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.card-list');
    restaurantsContainer.innerHTML = Loading();
    try {
      const restaurantsdata = await RestoSource.homePage();
      const restaurants = restaurantsdata.slice(0, 18);
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestoCardTemplate(restaurant);
      });
    } catch (message) {
      restaurantsContainer.innerHTML = `<h2 class="error-message">${message}</h2>`;
    }
  },
};

export default HomePage;
