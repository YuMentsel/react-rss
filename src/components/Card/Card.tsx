import { CardProps } from '../../types/types';
import CardPromo from './CardPromo';

function Card(props: CardProps) {
  const { title, description, price, stock, type, thumbnail } = props;

  return (
    <>
      <div className="card__photo" style={{ backgroundImage: thumbnail }}>
        <CardPromo {...props} />
      </div>
      <div className="card__info">
        <div className="card__type">{type}</div>
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
        <div className="card__purchase">
          <div className="card__price">{`${price}$`}</div>
          <button className="card__button">Add to card</button>
        </div>
        <div className="card__stock">In stock: {stock}</div>
      </div>
    </>
  );
}

export default Card;
