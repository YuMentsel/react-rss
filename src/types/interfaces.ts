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
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export interface CharacterProps {
  data: Character;
}

export interface ModalProps {
  children: ReactElement;
  closeModal: () => void;
}

export interface ModalCardProps {
  id: number;
  closeModal: () => void;
}
