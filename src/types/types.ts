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
  id?: number;
  title: string;
  type: string;
  date: string;
  discount: string;
  stock: boolean;
  image: string;
}

export interface NewFormCards {
  cards: NewFormCard[];
}

export type NewFormCardProps = {
  card: NewFormCard;
};

export type FormAddProps = {
  onCreateCard: (newCard: NewFormCard) => void;
};
