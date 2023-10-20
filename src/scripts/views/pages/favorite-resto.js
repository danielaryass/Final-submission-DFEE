import { createRestoCardTemplate } from '../template/resto-template';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
      <section class="favorite-resto">
        <h2 class="favorite-heading">Your Favorite Resto</h2>
        <div class="resto-container" id="resto-container"></div>
      </section>
    `;
  },
  async afterRender() {
    const restoContainer = document.querySelector('#resto-container');
    const restos = await FavoriteRestoIdb.getAllResto();
    if (restos.length === 0) {
      restoContainer.innerHTML = `
        <div class="empty-favorite">
          <h3 class="empty-favorite-resto">You don't have any favorite resto</h3>
          <p>Let's add your favorite resto now!</p>
        </div>
      `;
    }
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoCardTemplate(resto);
    });
  },
};
export default Favorite;
