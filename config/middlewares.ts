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
          'connect-src': ["'self'", 'https:', 'http:', 'https://*.lovable.app', 'https://*.pages.dev'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      // '*' hatana behtar hai, yahan specific domains daalein
      origin: [
        'https://amitrealestate.in',              // Aapka main production domain
        'https://amit-real-estate.pages.dev',     // Cloudflare ka default domain
        'https://amit-real-estate.lovable.app',   // Lovable production/temp
        'https://*.lovable.app',                  // Wildcard for any lovable preview
        'http://localhost:5173'                   // Local development
      ], 
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      keepHeaderWithResponsibility: true,         // Ye true hona chahiye agar custom headers bhej rahe hain
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
