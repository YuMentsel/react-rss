import { CharacterProps } from '../../types/interfaces';

function Card({ data, openModal }: CharacterProps) {
  const { id, image, species, name } = data;

  return (
    <div className="card" onClick={() => openModal(id)} data-testid="card">
      <div className="card__photo" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card__info">
        <div className="card__species">{species}</div>
        <div className="card__title">{name}</div>
      </div>
    </div>
  );
}

export default Card;
