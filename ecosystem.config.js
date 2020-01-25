module.exports = {
  apps: [
    {
      name: 'accounts',
      script: 'micro -l tcp://0.0.0.0:4001 accounts.js',
    },
    {
      name: 'reviews',
      script: 'micro -l tcp://0.0.0.0:4002 reviews.js',
    },
    {
      name: 'products',
      script: 'micro -l tcp://0.0.0.0:4003 products.js',
    },
    {
      name: 'inventory',
      script: 'micro -l tcp://0.0.0.0:4004 inventory.js',
    },
  ],
};
