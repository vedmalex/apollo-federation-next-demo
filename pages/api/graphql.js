const { ApolloServer } = require('apollo-server-micro');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'accounts', url: 'http://localhost:3000/api/accounts' },
    { name: 'reviews', url: 'http://localhost:3000/api/reviews' },
    { name: 'products', url: 'http://localhost:3000/api/products' },
    { name: 'inventory', url: 'http://localhost:3000/api/inventory' },
  ],
  debug: true,
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

export default server.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};
