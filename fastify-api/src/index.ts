// https://github.com/mcollina/make-promises-safe#a-happy-note
// TODO: Remove using Node.js v15+
import 'make-promises-safe';

import createServer from './apollo';
import createApp from './fastify';
import connectToDB from './mongoose';

(async () => {
  const db = await connectToDB();
  console.log(`🍃 Connected to MongoDB at: ${db.connection.user || ''}${db.connection.host}:${db.connection.port}/${db.connection.name}`);

  const app = createApp();
  const server = await createServer(app);

  const url = await app.listen(4000, '0.0.0.0');
  console.log(`🐅 Fastify Server ready at: ${url}`);
  console.log(`🚀 Apollo Server ready at: ${url}${server.graphqlPath}`);
})();
