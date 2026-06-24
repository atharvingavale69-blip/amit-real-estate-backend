import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Ye line add karein:
  url: env('STRAPI_URL', 'https://api.amitrealestate.in'), 
  proxy: true, // Dockploy/Nginx ke liye ye bohot zaroori hai
  app: {
    keys: env.array('APP_KEYS'),
  },
});

export default config;
