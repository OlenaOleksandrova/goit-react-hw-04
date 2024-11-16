
const ImageModal = (onClose, OpenModal) => {

  
 return (
    <div>
      <button onClick={OpenModal}>Open Modal</button>
      <ImageModal
        // isOpen={isOpenModal}
        // onClose={closeModal}
        
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={onClose}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </ImageModal>
    </div>
  );
};


export default ImageModal 