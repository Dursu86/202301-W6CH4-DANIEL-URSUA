import http from 'http';
import fs from 'fs';
import url from 'url';
import { calculator } from './calculator.js';

const { PORT } = process.env;

const server = http.createServer((req, resp) => {
  const { pathname, query } = url.parse(req.url!);
  if (pathname !== '/calculator') {
    server.emit('error', new Error('404'));
    return;
  }

  const parseQuery = query?.split('&').map((item) => item.split('='));
  if (!parseQuery) return;
  const object = { a: Number(parseQuery[0][1]), b: Number(parseQuery[1][1]) };

  console.log(object.a, object.b);

  switch (req.method) {
    case 'GET':
      if (isNaN(object.a) || isNaN(object.b)) {
        server.emit('error', new Error('Please use valid numbers'));
        return;
      }

      resp.writeHead(200);
      resp.write(`
      <p>${object.a} + ${object.b} = ${calculator(object.a, object.b).sum}</p>
      <p>${object.a} + ${object.b} = ${calculator(object.a, object.b).rest}</p>
      <p>${object.a} + ${object.b} = ${calculator(object.a, object.b).mult}</p>
      <p>${object.a} + ${object.b} = ${calculator(object.a, object.b).div}</p>
      </h1>`);

      calculator(object.a, object.b);

      break;
    case 'POST':
    case 'PATCH':
    case 'DELETE':
    default:
      resp.write('Método no implementado');
      break;
  }

  resp.end();
});

server.on('error', () => {});

server.listen(PORT);
