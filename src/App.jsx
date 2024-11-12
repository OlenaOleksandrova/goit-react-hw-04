import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from "./components/SearchBar"


import './App.css'

const App = () =>  {
   const handleSearchSubmit = (query) => {
    if (!query.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
    </div>
  );
}
  


export default App
