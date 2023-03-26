import React from 'react';
import { FormAddProps } from '../../types/types';

const types = ['Succulent', 'Sansevieria', 'Flowering', 'Fern', 'Lavender', 'Cactus', 'Tree'];
const discount = [0, 10, 20, 50];

class Form extends React.Component<FormAddProps> {
  form = React.createRef<HTMLFormElement>();
  title = React.createRef<HTMLInputElement>();
  type = React.createRef<HTMLSelectElement>();
  date = React.createRef<HTMLInputElement>();
  discount = React.createRef<HTMLFieldSetElement>();
  stock = React.createRef<HTMLInputElement>();
  image = React.createRef<HTMLInputElement>();

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const titleValue = this.title.current?.value ?? '';
    const typeValue = this.type.current?.value ?? '';
    const dateValue = this.date.current?.value ?? '';
    const discountValue = this.getDiscountValue();
    const stockValue = this.stock?.current?.checked ?? false;
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

    console.log('Submit', card);
    this.form.current?.reset();
    this.props.onCreateCard(card);
  }

  getDiscountValue() {
    if (!this.discount.current) return '0';
    const inputs = [...this.discount.current.children].map(
      (child) => child.lastChild as HTMLInputElement
    );
    return inputs.find((input) => input.checked)?.value || '0';
  }

  handleInput() {
    console.log('Input');
  }

  render() {
    return (
      <form className="form" ref={this.form} onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form__wrapper">
          <label className="form__title">Title</label>
          <input
            type="text"
            placeholder="Add title..."
            ref={this.title}
            onInput={() => this.handleInput()}
            className="form__input"
          />
        </div>

        <div className="form__wrapper">
          <label className="form__title">Type</label>
          <select ref={this.type} onInput={() => this.handleInput()} className="form__input">
            {' '}
            <option value="0" key="0">
              Choose type
            </option>
            {types.map((type) => (
              <option key={type.toLowerCase()} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form__wrapper">
          <label className="form__title">
            Image
            <input
              className="form__img-input"
              type="file"
              accept=".jpg, .jpeg, .png"
              ref={this.image}
            />
          </label>
        </div>

        <fieldset ref={this.discount} className="form__fieldset">
          <label className="form__title">Discount</label>
          {discount.map((val) => (
            <label className="form__label" key={val}>
              {val}
              <input type="radio" name="stock" value={val} defaultChecked={val === 0} />
            </label>
          ))}
        </fieldset>

        <div className="form__wrapper">
          <label className="form__title">
            In stock
            <input type="checkbox" name="stock" />
          </label>
        </div>

        <div className="form__wrapper">
          <label className="form__title">
            Delivery date
            <input type="date" ref={this.date} className="form__date-input" />
          </label>
        </div>

        <button type="submit" className="form__button">
          Create card
        </button>
      </form>
    );
  }
}

export default Form;
