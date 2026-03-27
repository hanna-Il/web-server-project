import { defineEventHandler, getQuery, setHeader } from 'h3';

export default defineEventHandler((event) => {
  const { name } = getQuery(event) as { name?: string };
  setHeader(event, 'Cache-Control', 'no-store');
  return {
    message: `Hello${name ? ', ' + name : ''} from Nitro!`,
    time: new Date().toISOString(),
  };
});
