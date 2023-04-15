import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchValue } from '../../redux/slices/searchSlice';

function Search() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.value);
  const [value, setValue] = useState(searchValue);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setSearchValue(value));
      }}
    >
      <input
        id="search"
        className="search"
        type="text"
        placeholder="Search..."
        data-testid="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
}

export default Search;
