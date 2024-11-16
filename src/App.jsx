import toast, { Toaster } from 'react-hot-toast';
import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import { fetchImages } from '../api';
import { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nbPages, setNbPages] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);



  const handleSearchSubmit = (query) => {
    if (!query.trim()) {
      toast.error("Необхідно ввести текст для пошуку");
      return;
    }
    setQuery(query);
    setPage(1);
    setImages([]);  // очистка попередн.зображень при нов.запиті

  };

  useEffect(() => {
    const fetchData = async () => { 
      if (!query) return; // пририваємо запит,якщо query не порожній

      
      try {
      setIsLoading(true);
        setIsError(false);
        
        const  results = await fetchImages(query, page);
        setNbPages(nbPages);
        
        setImages((prevImages) => (page === 1 ? results : [...prevImages, ...results]));
        // setIsLoading(true);
      } catch (error) {
      toast.error("Помилка під час пошуку зображень!");
      setIsError(true);
      // setIsLoading(false);
    } finally {
      setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query, nbPages]);
  

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {/* {nbPages > page && <button onClick={() => setPage(prev => prev + 1)} >Load more</button>} */}
      <button onClick={() => setPage(prev => prev + 1)} >Load more</button>
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {isError && <h2>Упс, щось сталось! Оновіть сторінку...</h2>}
      {/* <ImageModal isOpen={isOpenModal} onClose={closeModal}  /> */}
      {/* {isOpen && <ImageModal />} */}
    
    </div>
  );
}
  


export default App
