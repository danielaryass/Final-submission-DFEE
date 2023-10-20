import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/template/resto-template';
import { sendNotiftoWebsocket } from './websocket-iniator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data, favoriteResto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = data.resto;
    this._favoriteResto = favoriteResto;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    const resto = await this._favoriteResto.getResto(id);
    if (resto) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._resto);
      this._renderButton();
      // sendNotiftoWebsocket({
      //   title: 'New Favorite Resto',
      //   body: `${this._resto.name} has been added to your favorite`,
      //   image: this._resto.pictureId,
      // });
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
