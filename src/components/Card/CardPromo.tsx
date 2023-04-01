import { CardProps } from '../../types/types';

function CardPromo(props: CardProps) {
  const { sale, rating } = props;

  return (
    <>
      <div className="card__rating">
        {rating}
        <span>&#9734;</span>
      </div>
      <div className="card__sale">
        {sale}
        <span>%</span>
      </div>
    </>
  );
}

export default CardPromo;
