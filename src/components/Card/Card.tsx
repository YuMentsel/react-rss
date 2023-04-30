import { useState } from 'react';
import { CharacterProps } from '../../types/interfaces';
import Modal from '../../components/Modal';
import ModalCard from '../../components/ModalCard';

function Card({ data }: CharacterProps) {
  const { id, image, species, name } = data;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setShowModal(true)} data-testid="card">
        <div className="card__photo" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="card__info">
          <div className="card__species">{species}</div>
          <div className="card__title">{name}</div>
        </div>
      </div>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <ModalCard id={id} closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default Card;
