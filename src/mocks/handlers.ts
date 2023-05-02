import { rest } from 'msw';
import { data } from '../data/fetchedData';
import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const name = req.url.searchParams.get('name');
    if (name === 'somename') {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not Found',
        })
      );
    }

    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(data.results[+id - 1]));
  }),
];
