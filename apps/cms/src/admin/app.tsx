// src/admin/app.tsx
import React from 'react';
import type { StrapiApp } from '@strapi/strapi/admin';

// A tiny component for the widget
const HelloWidget: React.FC = () => (
  <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
    <h3 style={{ margin: 0 }}>hello, world</h3>
    <p style={{ marginTop: 8 }}>This is a custom homepage widget.</p>
  </div>
);

export default {
  // You can still use config for logos, theme, etc.
  // See docs: auth.logo, head.favicon, menu.logo, theme, locales, translations...
  // config: { ... },

  register(app: StrapiApp) {
    // v5 way: register a Homepage widget (Strapi 5.13+)
    if ('widgets' in app) {
      app.widgets.register({
        id: 'hello-world-widget',
        title: { id: 'hello.world.title', defaultMessage: 'Hello, world' },
        // You can use an icon from @strapi/icons, or omit it
        icon: () => null,
        component: async () => HelloWidget, // return a React component
        // No pluginId here since this is app-level, not a plugin
      });
    }
    // If you also want a menu page:
    app.addMenuLink({
      to: '/hello',
      intlLabel: { id: 'hello.world.menu', defaultMessage: 'Hello' },
      icon: () => null,
      Component: async () => HelloWidget,
      permissions: [],
    });
  },

  bootstrap() {
    // late tweaks if you need them
  },
};
