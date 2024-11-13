import { ColorRing } from "react-loader-spinner"

const Loader = () => {
    return <div>
        <ColorRing
  visible={true}
  height="88"
  width="88"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#8a2be2', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
}
export default Loader