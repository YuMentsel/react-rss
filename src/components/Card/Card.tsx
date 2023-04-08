import { Character } from '../../types/interfaces';

function Card(props: Character) {
  const { image, species, name } = props;

  return (
    <div className="card">
      <div className="card__photo" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card__info">
        <div className="card__species">{species}</div>
        <div className="card__title">{name}</div>
      </div>
    </div>
  );
}

export default Card;
