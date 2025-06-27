// @ts-check
const prismThemes = require('prism-react-renderer').themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eEntrega',
  tagline: 'Documentação sobre o módulo de entregas',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://willamegabriel.github.io',  // URL pública do GitHub Pages
  baseUrl: '/documentacao-entrega/',        // baseUrl correto para o repositório

  organizationName: 'willamegabriel',
  projectName: 'documentacao-entrega',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/entrega-social-card.png',
    metadata: [
      { name: 'description', content: 'Facilitando seu fluxo e controle de Entregas do dia a dia' },
      { property: 'og:title', content: 'eEntrega' },
      { property: 'og:description', content: 'Facilitando seu fluxo e controle de Entregas do dia a dia' },
      { property: 'og:image', content: 'img/entrega-social-card.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'eEntrega' },
      { name: 'twitter:description', content: 'Facilitando seu fluxo e controle de Entregas do dia a dia' },
      { name: 'twitter:image', content: 'img/entrega-social-card.png' },
    ],
    navbar: {
      title: 'eEntrega',
      logo: {
        alt: 'My Logo eEntrega',
        src: 'img/logo-entrega.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/viggosistemas?igsh=MXNnaTd6cjlqaGR1cQ==',
            },
            {
              label: 'Site',
              href: 'https://viggo.digital/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eEntrega.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
