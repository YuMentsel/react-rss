import { useState, useEffect } from 'react';
import Search from '../../components/Search';
import CardsList from '../../components/CardsList/CardsList';
import { Character, CharacterData } from '../../types/interfaces';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

function HomePage() {
  const [search, setSearch] = useState(localStorage.getItem('searchValue') ?? '');
  const [data, setData] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/?name=${search}`);
        const { results }: CharacterData = await res.json();
        results ? setData(results) : setData([]);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    })();
  }, [search]);

  const content = isLoading ? <div>Loading...</div> : <CardsList data={data} />;

  return (
    <main className="main center">
      <Search setSearch={setSearch} />
      {content}
    </main>
  );
}

export default HomePage;
