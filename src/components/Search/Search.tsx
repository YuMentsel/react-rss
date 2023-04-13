import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { SearchProps } from '../../types/interfaces';

function Search({ setSearch }: SearchProps) {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchValue', inputValue ?? '');
    setSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        className="search"
        type="text"
        placeholder="Search..."
        data-testid="search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </form>
  );
}

export default Search;
