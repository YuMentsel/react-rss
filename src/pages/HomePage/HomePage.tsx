import { useState, useEffect } from 'react';
import Search from '../../components/Search';
import CardsList from '../../components/CardsList';
import Modal from '../../components/Modal';
import ModalCard from '../../components/ModalCard';
import { Character, CharacterData } from '../../types/interfaces';
import { BASE_URL } from '../../types/constants';

function HomePage() {
  const [search, setSearch] = useState(localStorage.getItem('searchValue') ?? '');
  const [data, setData] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardID, setModalCardID] = useState(0);

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

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setModalCardID(id);
  };

  const setModal = () => setIsModalOpen(false);

  const content = isLoading ? (
    <div>Loading...</div>
  ) : (
    <CardsList data={data} openModal={openModal} />
  );

  return (
    <main className="main center">
      <Search setSearch={setSearch} />
      {content}
      {isModalOpen && (
        <Modal setModal={setModal}>
          <>
            <ModalCard cardId={modalCardID} />
            <div className="close" onClick={setModal}>
              ✖
            </div>
          </>
        </Modal>
      )}
    </main>
  );
}

export default HomePage;
