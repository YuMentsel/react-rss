import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../types/constants';
import { Character, CharacterData } from '../types/interfaces';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getCharacters: build.query<Character[], string>({
      query: (name: string) => `/?name=${name}`,
      transformResponse: (res: CharacterData) => res.results,
    }),
    getCharacterById: build.query<Character, number>({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;
