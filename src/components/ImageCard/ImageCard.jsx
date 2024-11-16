import s from "./ImageCard.module.css"

const ImageCard = ({ image, onClick }) => {
    return (
      <div className={s.card} onClick={onClick}>
      <img className={s.img} src={image.urls.small} alt={image.alt_description} />
    </div>
    )
}
export default ImageCard 