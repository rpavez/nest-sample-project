import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'evolve',
      entities: [
          __dirname + '/../models/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];