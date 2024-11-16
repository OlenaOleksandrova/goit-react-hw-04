import s from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({ images, onImageClick }) => {
    if (!images.length) return ""
    return ( 
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.item}
          key={image.id}
        onClick={()=> onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
    )
}
export default ImageGallery