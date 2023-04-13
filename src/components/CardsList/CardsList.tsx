import Card from '../Card';
import { Character, CharactersProps } from '../../types/interfaces';

function CardsList({ data, openModal }: CharactersProps) {
  return (
    <section className="cards">
      {data.map((item: Character) => (
        <Card key={item.id} data={item} openModal={openModal} />
      ))}
    </section>
  );
}

export default CardsList;
