import s from "./ImageCard.module.css"

const ImageCard = ({ image }) => {
    return (
       <div className={s.card}>
      <img className={s.img} src={image.urls.small} alt={image.alt_description} />
    </div>
    )
}
export default ImageCard 