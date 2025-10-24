import { createClient } from 'tinacms/dist/client';
import { queries } from './types';
export const client = createClient({
  url: 'http://localhost:4001/graphql',
  token: 'b7d5dd024047ea1bf045f526944c39e683a78f72',
  queries,
});
export default client;
