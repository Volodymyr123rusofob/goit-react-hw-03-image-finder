import style from './imageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li class={style.imageGalleryItem}>
      <img class={style.imageGalleryItemImage} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
