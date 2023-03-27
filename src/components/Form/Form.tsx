import React from 'react';
import { FormAddProps, FormState, NewFormCard, Errors } from '../../types/types';
import { types, discount } from '../../data/data';

class Form extends React.Component<FormAddProps> {
  form = React.createRef<HTMLFormElement>();
  title = React.createRef<HTMLInputElement>();
  type = React.createRef<HTMLSelectElement>();
  date = React.createRef<HTMLInputElement>();
  discount = React.createRef<HTMLFieldSetElement>();
  stock = React.createRef<HTMLInputElement>();
  image = React.createRef<HTMLInputElement>();

  state: FormState = {
    errors: {},
    showСonfirmation: false,
  };

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const titleValue = this.title.current?.value ?? '';
    const typeValue = this.type.current?.value ?? '';
    const dateValue = this.date.current?.value ?? '';
    const discountValue = this.getDiscountValue();
    const stockValue = this.stock?.current?.checked ? 'yes' : 'no';
    const imageValue = this.image.current?.files?.[0];

    const card = {
      id: Date.now(),
      title: titleValue,
      type: typeValue,
      date: dateValue,
      discount: discountValue,
      stock: stockValue,
      image: (imageValue && URL.createObjectURL(imageValue)) ?? '',
    };

    if (this.validateForm(card)) {
      this.props.onCreateCard(card);
      this.setState({ showСonfirmation: true });
      setTimeout(() => {
        this.setState({ showСonfirmation: false });
      }, 1500);
      this.form.current?.reset();
    }
  }

  getDiscountValue() {
    if (!this.discount.current) return '0';
    const inputs = [...this.discount.current.children].map(
      (child) => child.lastChild as HTMLInputElement
    );
    return inputs.find((input) => input.checked)?.value || '0';
  }

  validateForm = (card: NewFormCard) => {
    const { title, type, date, stock, image } = card;

    const errors: Errors = {};

    if (title.length < 3) errors.title = 'Enter minimum 3 characters.';
    if (!type.length) errors.type = 'Select a card type.';

    if (!(new Date(date) > new Date())) {
      errors.date = 'Select the delivery date not earlier than tomorrow.';
    }

    if (stock === 'no') errors.stock = 'Confirm stock status.';
    if (!image.length) errors.image = 'Add an image.';

    this.setState({ errors: errors });

    return !Object.keys(errors).length;
  };

  handleFocus(error: string) {
    this.setState({
      errors: {
        ...this.state.errors,
        [error]: null,
      },
    });
  }

  render() {
    return (
      <form className="form" ref={this.form} onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form__wrapper">
          <label className="form__title">Title</label>
          <input
            type="text"
            placeholder="Add title"
            ref={this.title}
            onFocus={() => this.handleFocus('title')}
            className="form__input"
            data-testid="title"
          />
          <div className="form__error">{this.state.errors.title ?? ''}</div>
        </div>

        <div className="form__wrapper">
          <label className="form__title">Type</label>
          <select
            ref={this.type}
            onFocus={() => this.handleFocus('type')}
            className="form__input"
            data-testid="select"
          >
            {' '}
            <option value="" key="0">
              Choose type
            </option>
            {types.map((type) => (
              <option key={type.toLowerCase()} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className="form__error">{this.state.errors.type ?? ''}</div>
        </div>

        <div className="form__wrapper">
          <label className="form__title">
            Image
            <input
              className="form__img-input"
              type="file"
              accept=".jpg, .jpeg, .png"
              ref={this.image}
              onFocus={() => this.handleFocus('image')}
            />
          </label>
          <div className="form__error">{this.state.errors.image ?? ''}</div>
        </div>

        <fieldset ref={this.discount} className="form__fieldset">
          <label className="form__title">Discount</label>
          {discount.map((val) => (
            <label className="form__label" key={val}>
              {val}
              <input type="radio" name="discount" value={val} defaultChecked={val === 0} />
            </label>
          ))}
        </fieldset>

        <div className="form__wrapper">
          <label className="form__title">
            In stock
            <input
              type="checkbox"
              name="stock"
              ref={this.stock}
              onFocus={() => this.handleFocus('stock')}
              data-testid="checkbox"
            />
          </label>
          <div className="form__error stock">{this.state.errors.stock ?? ''}</div>
        </div>

        <div className="form__wrapper">
          <label className="form__title">
            Delivery date
            <input
              type="date"
              ref={this.date}
              className="form__date-input"
              onFocus={() => this.handleFocus('date')}
              data-testid="date"
            />
          </label>
          <div className="form__error">{this.state.errors.date ?? ''}</div>
        </div>

        <button type="submit" className="form__button" data-testid="submit-form">
          Create card
        </button>

        {this.state.showСonfirmation && <div className="form__confirmation">Card created!</div>}
      </form>
    );
  }
}

export default Form;
