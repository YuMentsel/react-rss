import { useState, useEffect, ChangeEvent } from 'react';
import './Search.scss';

function Search() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') ?? '');

  useEffect(() => {
    localStorage.setItem('searchValue', inputValue);
  }, [inputValue]);

  return (
    <input
      id="search"
      className="search"
      type="text"
      placeholder="Search..."
      data-testid="search"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
}

export default Search;
