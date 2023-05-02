import Form from '../../components/Form';
import FormCard from '../../components/FormCard';
import { FormData } from '../../types/interfaces';
import { useAppSelector } from '../../redux/hooks';

function FormPage() {
  const cards: FormData<string>[] = useAppSelector((state) => state.formCards);

  return (
    <main className="main center">
      <h2>Create a new card</h2>
      <Form />
      <div className="formCards-list">
        {cards.map((card) => (
          <FormCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}

export default FormPage;
