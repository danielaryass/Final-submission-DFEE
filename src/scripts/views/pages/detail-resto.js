import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../template/resto-template';
import UrlParser from '../../routes/url-parser';
import addReview from '../../utils/add-review';
import LikeButtonInitiator from '../../utils/like-button-iniator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const DetailResto = {
  async render() {
    return `
      <section class="detail-section">
      </section>  
      <div id="likeButtonContainer" tabindex="0"></div>      
      `;
  },
  async afterRender() {
    const detailRestoContainer = document.querySelector('.detail-section');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoSource.detailResto(url.id);
    detailRestoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data: {
        resto,
      },
      favoriteResto: FavoriteRestoIdb,
    });

    const buttonReview = document.querySelector('.button-review');
    const name = document.querySelector('#name');
    const review = document.querySelector('#review');
    buttonReview.addEventListener('click', async (e) => {
      e.preventDefault();
      await addReview(url, name.value, review.value);
      // setelah di post nama dan review akan kosong
      name.value = '';
      review.value = '';
    });
  },
};

export default DetailResto;
