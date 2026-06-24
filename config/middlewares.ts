import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'", 
            'https:', 
            'http:', 
            'https://*.lovable.app', 
            'https://*.pages.dev',
            'https://amit-estate-core.lovable.app',
            'https://admin.amitrealestate.in'
          ],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'upgrade-insecure-requests': null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://amitrealestate.in',
        'https://admin.amitrealestate.in',
        'https://amit-real-estate.pages.dev',
        'https://amit-real-estate.lovable.app',
        'https://amit-estate-core.lovable.app',
        'https://*.lovable.app',
        'http://localhost:5173'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With', 'Content-Length'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
