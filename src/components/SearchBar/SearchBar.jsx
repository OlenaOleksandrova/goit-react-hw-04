import s from "./SearchBar.module.css"
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery(""); // Очистка поля 
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Необхідно ввести текст для пошуку"
          value={query}
          onChange={handleChange}
        />
        <button className={s.button} type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar
