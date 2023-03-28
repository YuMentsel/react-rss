import React from 'react';
import { CardProps } from '../../types/types';

class CardPromo extends React.Component<CardProps> {
  render() {
    const { sale, rating } = this.props;

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
}

export default CardPromo;
