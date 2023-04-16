import { useAppSelector } from '../../redux/hooks';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import ModalCard from '../../components/ModalCard';
import Spinner from '../../components/Spinner';
import { useGetCharactersQuery } from '../../redux/api';
import { Character } from '../../types/interfaces';

function HomePage() {
  const searchValue = useAppSelector((state) => state.search.value);
  const { data = [], isLoading, isError } = useGetCharactersQuery(searchValue);

  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  return (
    <main className="main center">
      <Search />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div>Not Found</div>
      ) : (
        <section className="cards">
          {data.map((card: Character) => (
            <Card key={card.id} data={card} />
          ))}
        </section>
      )}
      {isModalOpen && (
        <Modal>
          <ModalCard />
        </Modal>
      )}
    </main>
  );
}

export default HomePage;
