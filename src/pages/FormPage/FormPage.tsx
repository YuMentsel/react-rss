import { useState } from 'react';
import Form from '../../components/Form';
import FormCard from '../../components/FormCard';
import { FormData } from '../../types/types';

function FormPage() {
  const [cards, setCards] = useState<FormData<string>[]>([]);

  const onCreateCard = (card: FormData<string>) => {
    setCards([...cards, card]);
  };

  return (
    <main className="main main_form">
      <h2>Create a new card</h2>
      <Form onCreateCard={onCreateCard} />
      <div className="formCards-list">
        {cards.map((card) => (
          <FormCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}

export default FormPage;
