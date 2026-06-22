import path from 'path';
import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Database => {
  // Hum client ko hardcode 'postgres' kar rahe hain
  const client = 'postgres';

  return {
    connection: {
      client,
      connection: {
        // Yahan aapka database host, name, user, aur password hardcoded hai
        host: 'amit-real-estate-db-jt2tsy',
        port: 5432,
        database: 'amit_db_strapi',
        user: 'postgres',
        password: 'Johny09', 
        ssl: false,
      },
      pool: { min: 2, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};

export default config;
