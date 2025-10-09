import path from 'path';
import fs from 'fs/promises';

export const getRandomWords = async (
  count: number = 30,
): Promise<{ words: string[] }> => {
  let array: string[] = [];
  try {
    const json = await fs.readFile(
      path.resolve('public', 'words-en.json'),
      'utf-8',
    );
    const arr: string[] = JSON.parse(json) as string[];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      array.push(arr[randomIndex]);
    }
    return { words: array };
  } catch (err) {
    console.error('АПИШКЕ не удалось загрузить слова');
    return { words: ['Не удалось дернуть слова с БД >:('] };
  }
};
