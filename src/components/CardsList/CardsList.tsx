import Card from '../Card';
import { CardProps } from '../../types/types';
import cardData from '../../data/plants.json';

function CardsList() {
  return (
    <section className="cards">
      {cardData.map((item: CardProps) => (
        <div key={item.id} className="card">
          <Card {...item} />
        </div>
      ))}
    </section>
  );
}

export default CardsList;
