import style from './imageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={style.imageGalleryItem}>
      <img className={style.imageGalleryItemImage} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
