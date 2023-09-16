module.exports = ({ env }) => ({

  //host: 'cards.natar.fr',
  // url: "/dashboard",
  autoOpen: false,
  // port: 1337,
  // url: "https://cards.natar.fr/admin",
  // serveAdminPanel: true, // http://yourbackend.com will not serve any static admin files

  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
