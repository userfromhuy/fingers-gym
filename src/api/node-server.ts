import http, { IncomingMessage, ServerResponse } from 'node:http';
import { URL } from 'node:url';
import { getRandomWords } from './services/getRandomWords.js';
import { sendResponse } from './utils/sendResponse.js';
const PORT: number = 3431;

http
  .createServer(async (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      return res.end();
    }

    const url = new URL(req.url || '/', `http://localhost:${PORT}`);

    if (url.pathname === '/get') {
      const countNumbers: number = parseInt(
        url.searchParams.get('getWords') || '0',
        10,
      );
      const arrayWords: { words: string[] } =
        await getRandomWords(countNumbers);
      return sendResponse(res, arrayWords);
    }

    return sendResponse(
      res,
      {
        words: ['Ты промахнулся запросом...'],
      },
      404,
    );
  })
  .listen(PORT, () => console.log(`http://localhost:${PORT}`));
