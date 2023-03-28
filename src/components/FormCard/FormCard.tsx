import React from 'react';
import { NewFormCardProps } from '../../types/types';

class FormCard extends React.Component<NewFormCardProps> {
  render() {
    const { title, type, date, discount, stock, image } = this.props.card;
    return (
      <div className="form-card">
        <div className="form-card__img">
          <img src={image} alt="form-card-img" />
        </div>
        <h3>Title: {title}</h3>
        <div>
          <span>Type: </span>
          {type}
        </div>
        <div>
          <span>Date: </span>
          {date}
        </div>
        <div>
          <span>Discount: </span>
          {discount}
        </div>
        <div>
          <span>Stock: </span>
          {stock}
        </div>
      </div>
    );
  }
}

export default FormCard;
