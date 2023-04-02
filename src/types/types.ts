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

export interface NewFormCard {
  id: number;
  title: string;
  type: string;
  date: string;
  discount: string;
  stock: string;
  image: string;
}

export type NewFormCardProps = {
  card: NewFormCard;
};

export type FormAddProps = {
  onCreateCard: (newCard: NewFormCard) => void;
};

export interface Errors {
  title?: string;
  type?: string;
  date?: string;
  discount?: string;
  stock?: string;
  image?: string;
}

export interface FormState {
  errors: Errors;
  showСonfirmation: boolean;
}
