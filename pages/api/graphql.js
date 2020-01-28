const { ApolloServer } = require('apollo-server-micro');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'accounts', url: 'https://0.0.0.0/api/accounts' },
    { name: 'reviews', url: 'https://0.0.0.0/api/reviews' },
    { name: 'products', url: 'https://0.0.0.0/api/products' },
    { name: 'inventory', url: 'https://0.0.0.0/api/inventory' },
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
