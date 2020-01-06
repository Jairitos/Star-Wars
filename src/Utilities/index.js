import { images } from '../Components/Card/img';

export const getPic = (name) => {
  for (let pic of images) {
    if (pic.name === name || pic.title === name) {
      return pic.url;
    }
  }
};
