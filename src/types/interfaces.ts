import { ReactElement } from 'react';

export interface FormData<T> {
  id: number;
  title: string;
  type: string;
  date: string;
  discount: string;
  stock: string;
  image: T;
}

export interface FormDataProps {
  card: FormData<string>;
}

export interface FormCreateCard {
  onCreateCard: (newCard: FormData<string>) => void;
}

export interface SearchProps {
  setSearch: (value: string) => void;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterData {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: Character[];
}

export interface CharactersProps {
  data: Character[];
  openModal: (id: number) => void;
}

export interface CharacterProps {
  data: Character;
  openModal: (id: number) => void;
}

export interface ModalProps {
  children: ReactElement;
  setModal: () => void;
}

export interface ModalCardProps {
  cardId: number;
}
