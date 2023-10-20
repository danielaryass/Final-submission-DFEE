import favoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-iniator';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: favoriteRestoIdb,
    data: {
      resto,
    },
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
