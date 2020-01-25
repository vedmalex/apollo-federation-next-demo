const { ApolloServer } = require('apollo-server-micro');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'accounts', url: 'http://localhost:4001/api/accounts' },
    { name: 'reviews', url: 'http://localhost:4002/api/reviews' },
    { name: 'products', url: 'http://localhost:4003/api/products' },
    { name: 'inventory', url: 'http://localhost:4004/api/inventory' },
  ],
  debug: true,
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

module.exports = server.createHandler({ path: '/api/graphql' });
