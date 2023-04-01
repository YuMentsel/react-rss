import React from 'react';
import Form from '../../components/Form';
import FormCard from '../../components/FormCard';
import { NewFormCard, NewFormCards } from '../../types/types';

class FormPage extends React.Component {
  state: NewFormCards = {
    cards: [],
  };

  onCreateCard = (card: NewFormCard) => {
    this.setState((prevState: NewFormCards) => ({
      cards: [...prevState.cards, card],
    }));
  };

  render() {
    return (
      <main className="main main_form">
        <h2>Create a new card</h2>
        <Form onCreateCard={this.onCreateCard} />
        <div className="formCards-list">
          {this.state.cards.map((card) => (
            <FormCard key={card.id} card={card} />
          ))}
        </div>
      </main>
    );
  }
}

export default FormPage;
