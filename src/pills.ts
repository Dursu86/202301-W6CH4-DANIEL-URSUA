import http from 'http';
import url from 'url';
import fs from 'fs/promises';


const { PORT } = process.env;
const server = http.createServer((req, resp) => {
const { pathname } = url.parse(req.url!);
const instruction = pathname?.slice(1).split('/')[1]
const endpoint = pathname?.slice(1).split('/')[0]
const stringDataInitial = await fs.readFile('things.json', {
  encoding: 'utf-8',
})
endpoint?.toLowerCase();
  if (endpoint !== '/api-things') {
    server.emit('error', new Error('404'));
    resp.writeHead(404, 'Page not found');
    resp.write(`
      <h1>PAGE NOT FOUND<h1>
      <p> Please enter a valid url<p>
    `);
    return;
  }
  if(endpoint === 'things'){
  switch (req.method) {
    case 'POST':
     const data: { [key: string]: string }[] = JSON.parse(stringDataInitial);
    data.push(country);
    const stringData = JSON.stringify(data);
    fs.writeFile('things.json', stringData, { encoding: 'utf-8' });
    break;
    case 'GET':
    const data: { [key: string]: string }[] = JSON.parse(stringDataInitial);



  }



    case 'PATCH':
    case 'DELETE':
    default:
      resp.write('Método no implementado');
      break;
  }}
  resp.end();
});
type thingStructure = [
  {
    things: {
      id: string;
      thing: string;
    };
  }
];


    ;

  };

  addCountry(newCountry);
};
