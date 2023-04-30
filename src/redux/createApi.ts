import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';

type TypeRtkQuery = typeof rtkQuery & { default?: unknown };

const { buildCreateApi, coreModule, reactHooksModule } = ((rtkQuery as TypeRtkQuery).default ??
  rtkQuery) as typeof rtkQuery;

export const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const { fetchBaseQuery } = ((rtkQuery as TypeRtkQuery).default ??
  rtkQuery) as typeof rtkQuery;
