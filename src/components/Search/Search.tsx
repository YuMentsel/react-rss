import { useState, useRef, useEffect, ChangeEvent } from 'react';
import './Search.scss';

function Search() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') ?? '');
  const inputRef = useRef(inputValue);

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', inputRef.current);
    };
  }, []);

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
