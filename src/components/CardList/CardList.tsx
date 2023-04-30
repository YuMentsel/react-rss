import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import Card from '../../components/Card';

import Spinner from '../../components/Spinner';
import { useGetCharactersQuery } from '../../redux/api';
import { Character } from '../../types/interfaces';

function CardList() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchValue = useAppSelector((state) => state.search.value);
  const { currentData = [], isFetching, isError } = useGetCharactersQuery(searchQuery);

  useEffect(() => {
    setSearchQuery(searchValue);
  }, [searchValue]);

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        <div>Not Found</div>
      ) : (
        <section className="cards">
          {currentData.map((card: Character) => (
            <Card key={card.id} data={card} />
          ))}
        </section>
      )}
    </>
  );
}

export default CardList;
