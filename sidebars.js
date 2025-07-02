// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introdução',
    },
    {
      type: 'category',
      label: 'Gerenciamento de Entregas',
      collapsed: false,
      link: {
        type: 'generated-index',
        slug: '/gerenciamento-entregas',
        description:
          'Agora que você entendeu como configurar o eEntrega, vamos mostrar agora em etapas como utilizar a ferramenta.',
      },
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/criacao',
          label: 'Criação',
          customProps: {
            emoji: '🛠️',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/movimentacao',
          label: 'Movimentação',
          customProps: {
            emoji: '🔄',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/cancelamento',
          label: 'Cancelamento',
          customProps: {
            emoji: '❌',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/mensageria',
          label: 'Mensageria',
          customProps: {
            emoji: '✉️',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/relatorios',
          label: 'Relatórios',
          customProps: {
            emoji: '📊',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/validacoes',
          label: 'Validações',
          customProps: {
            emoji: '✅',
          },
        },
      ],
    },
  ],
};

export default sidebars;
