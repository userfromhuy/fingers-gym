import { ServerResponse } from "http";

export function sendResponse(
  res: ServerResponse,
  end: { words: string[] },
  statusCode: number = 200,
) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(end));
}
