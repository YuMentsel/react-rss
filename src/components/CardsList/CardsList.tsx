import Card from '../Card';
import { Character, CharacterProps } from '../../types/interfaces';

function CardsList({ data }: CharacterProps) {
  return (
    <section className="cards">
      {data.map((item: Character) => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  );
}

export default CardsList;
