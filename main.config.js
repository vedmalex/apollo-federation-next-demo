module.exports = {
  apps: [
    {
      name: 'graphql',
      script: 'micro -l tcp://0.0.0.0:4000 graphql.js',
    },
  ],
};
