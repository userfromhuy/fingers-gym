import http from 'node:http';
import { URL } from 'node:url';

import words from './data-base/words.js';

const PORT = 3431;

const callback = (res, arg) => {
  console.log('successfuly', arg);
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(
    JSON.stringify({
      response: arg,
      array_words: words,
    }),
  );
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/get') {
    return callback(res, url.searchParams.get('getWords'));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('idi nahuy');
});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
