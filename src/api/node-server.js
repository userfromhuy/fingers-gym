import fs from 'fs/promises';
import http from 'node:http';
import { URL } from 'node:url';

const PORT = 3431;

function sendResponse(res, end, statusCode = 200) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(end));
}

const getRandomWords = async (res, count = 30) => {
  let array = [];
  try {
    const json = await fs.readFile('../../public/words-en.json', 'utf-8');
    const arr = JSON.parse(json);
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      array.push(arr[randomIndex]);
    }
    sendResponse(res, {
      words: array,
    });
  } catch (err) {
    console.error('АПИШКЕ не удалось загрузить слова');
    sendResponse(
      res,
      {
        words: ['Не удалось дернуть слова с БД >:('],
      },
      500,
    );
  }
};

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const url = new URL(req.url, `http://localhost:${PORT}`);
    console.log(url)
    if (url.pathname === '/get') {
      return getRandomWords(res, url.searchParams.get('getWords'));
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
