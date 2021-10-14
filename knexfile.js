const commonConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...commonConfig,
    connection: {
      filename: "./data/resources.db3",
    },
  },
  testing: {
    ...commonConfig,
    connection: {
      filename: "./data/test.db3",
    },
  },
  production: {},
};
