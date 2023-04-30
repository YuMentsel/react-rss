import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../../types/interfaces';
import { BooleanValue, ErrorsMessages } from '../../types/enums';
import { types, discount } from '../../data/data';
import { dateValidation } from '../../utils/utils';
import { useAppDispatch } from '../../redux/hooks';
import { addFormCard } from '../../redux/slices/formCardsSlice';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData<FileList>>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const [showСonfirmation, setShowСonfirmation] = useState(false);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (data: FormData<FileList>) => {
    const card = {
      ...data,
      id: Date.now(),
      stock: BooleanValue.Yes,
      image: URL.createObjectURL(data.image[0]),
    };

    dispatch(addFormCard(card));

    setShowСonfirmation(true);
    setTimeout(() => {
      setShowСonfirmation(false);
    }, 1500);

    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form__wrapper">
        <label className="form__title">Title</label>
        <input
          type="text"
          placeholder="Add title"
          className="form__input"
          {...register('title', {
            required: true,
            validate: (title) => title.length > 2 || ErrorsMessages.titleNotValid,
          })}
          data-testid="title"
        />
        {errors.title && (
          <div className="form__error">{errors.title.message || ErrorsMessages.title}</div>
        )}
      </div>

      <div className="form__wrapper">
        <label className="form__title">Type</label>
        <select
          className="form__input"
          {...register('type', {
            required: true,
          })}
          data-testid="select"
        >
          <option value="" key="0">
            Choose type
          </option>
          {types.map((type) => (
            <option key={type.toLowerCase()} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.type && <div className="form__error">{ErrorsMessages.type}</div>}
      </div>

      <div className="form__wrapper">
        <label className="form__title">
          Image
          <input
            type="file"
            accept="image/*"
            className="form__img-input"
            data-testid="image"
            {...register('image', {
              required: true,
            })}
          />
        </label>
        {errors.image && <div className="form__error">{ErrorsMessages.image}</div>}
      </div>

      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <label className="form__title">Discount</label>
          {discount.map((val) => (
            <label className="form__label" key={val}>
              {val}
              <input
                type="radio"
                {...register('discount', {
                  required: true,
                })}
                name="discount"
                value={val}
                data-testid={val}
              />
            </label>
          ))}
        </fieldset>
        {errors.discount && <div className="form__error fieldset">{ErrorsMessages.discount}</div>}
      </div>

      <div className="form__wrapper">
        <label className="form__title">
          In stock
          <input
            type="checkbox"
            {...register('stock', {
              required: true,
            })}
            name="stock"
            data-testid="checkbox"
          />
        </label>
        {errors.stock && <div className="form__error stock">{ErrorsMessages.stock}</div>}
      </div>

      <div className="form__wrapper">
        <label className="form__title">
          Delivery date
          <input
            type="date"
            className="form__date-input"
            {...register('date', {
              required: true,
              validate: (date) => dateValidation(date) || ErrorsMessages.dateNotValid,
            })}
            data-testid="date"
          />
        </label>
        {errors.date && (
          <div className="form__error">{errors.date.message || ErrorsMessages.date}</div>
        )}
      </div>

      <button type="submit" className="form__button" data-testid="submit-form">
        Create card
      </button>

      {showСonfirmation && <div className="form__confirmation">Card created!</div>}
    </form>
  );
}

export default Form;
