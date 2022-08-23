    module.exports = ({ env }) => ({
        connection: {
            client: 'postgres',
            connection: {
              host: env('DATABASE_HOST', 'localhost'),
              port: env.int('DATABASE_PORT', 5432),
              database: env('DATABASE_NAME', 'myShop'),
              user: env('DATABASE_USERNAME', 'postgres'),
              password: env('DATABASE_PASSWORD', '8988'),
              schema: env('DATABASE_SCHEMA', 'public'), // Not required
            ssl: {
             ca: env('DATABASE_CA')
            },
          },
          debug: false,
        },
      });