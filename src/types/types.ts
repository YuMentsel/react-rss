export type CardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  sale: number;
  rating: number;
  stock: number;
  type: string;
  thumbnail: string;
};

export interface FormData<T> {
  id: number;
  title: string;
  type: string;
  date: string;
  discount: string;
  stock: string;
  image: T;
}

export type FormDataProps = {
  card: FormData<string>;
};

export interface FormCreateCard {
  onCreateCard: (newCard: FormData<string>) => void;
}
