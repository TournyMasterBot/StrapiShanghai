'use strict';
const path = require('path');

module.exports = (config) => {
  // This internal path is what the admin bundle imports as its root App.
  // Adjust if your Strapi minor version changes its file layout.
  const STRAPI_APP_ENTRY = '@strapi/admin/admin/src/App';

  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    OriginalStrapiApp: STRAPI_APP_ENTRY, // keep original
    [STRAPI_APP_ENTRY]: path.resolve(__dirname, './overrides/AdminAppWrapper.tsx'), // replace with ours
  };

  return config;
};
