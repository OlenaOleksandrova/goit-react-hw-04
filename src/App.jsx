import toast, { Toaster } from 'react-hot-toast';
import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import { fetchImages } from '../api';
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

   const handleSearchSubmit = async (query) => {
    if (!query.trim()) {
      toast.error("Необхідно ввести текст для пошуку");
      return;
    }
     setQuery(query);
     setPage(1);
     try {
       const results = await fetchImages(query, 1);
      setImages(results);
     } catch (error) {
      toast.error("Помилка під час пошуку зображень!");
    }
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
    </div>
  );
}
  


export default App
