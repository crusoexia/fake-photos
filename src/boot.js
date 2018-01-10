import jsonServer from 'json-server';
import commandLineArgs from 'command-line-args';

import createDb from './api/createDb';

const optionDef = [
  { name: 'port', alias: 'p', type: Number },
];

export const run = () => {
  const options = commandLineArgs(optionDef);
  const port = options.port || 8080;
  const server = jsonServer.create();
  const router = jsonServer.router(createDb());
  const middleware = jsonServer.defaults();

  server.use(middleware);
  server.use(router);
  server.listen(port, () => {
    console.log('photo service is running'); // eslint-disable-line no-console
  });
};

export default run;
