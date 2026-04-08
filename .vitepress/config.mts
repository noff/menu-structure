import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Пример меню",
  description: "3-уровневое меню",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Начало', link: '/' },
      { text: 'Пример меню', link: '/menu/index.md' }
    ],

    sidebar: {
      '/menu/': [
        {text: 'Overview', link: '/menu/index.md'},

        {
          text: 'CDP',
          collapsed: true,
          items: [
            {
              text: 'Reports',
              collapsed: true,
              items: [
                {text: 'Overview', link: '/integration/cdp/reports/index.md'},
                {text: 'Transactions', link: '/integration/cdp/reports/transactions.md'},
                {text: 'Products sales', link: '/integration/cdp/reports/products_sales.md'},
              ]
            },
            {text: 'Users management', link: '/menu/index.md'},
            {
              text: 'Settings',
              collapsed: true,
              items: [
                {text: 'Custom events', link: '/menu/cdp/custom_events.md'},
                {text: 'Custom properties', link: '/menu/cdp/custom_properties.md'},
                {text: 'User tags', link: '/menu/cdp/users_tags.md'},
                {text: 'Order properties', link: '/menu/cdp/order_properties.md'},
                {text: 'Order statuses', link: '/menu/cdp/order_statuses.md'},
              ]
            },
          ]
        },

        {
          text: 'Витринные инструменты',
          collapsed: true,
          items: [
            {
              text: 'Товарные рекомендации',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/standard-events/index.md'},
              ]
            },
            {
              text: 'Поиск',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },
            {
              text: 'Товарные коллекции',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },
            {
              text: 'Листинг товаров',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },

          ]
        },

        {
          text: 'Коммуникации',
          collapsed: true,
          items: [
            {
              text: 'Товарные рекомендации',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/standard-events/index.md'},
              ]
            },
            {
              text: 'Поиск',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },
            {
              text: 'Товарные коллекции',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },
            {
              text: 'Листинг товаров',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },

          ]
        },

        {
          text: 'Настройки проекта',
          collapsed: true,
          items: [
            {
              text: 'Товарные рекомендации',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/standard-events/index.md'},
              ]
            },
            {
              text: 'Поиск',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },
            {
              text: 'Товарные коллекции',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },
            {
              text: 'Листинг товаров',
              collapsed: true,
              items: [
                {text: 'Введение', link: '/integration/cdp/communications-events/index.md'},
              ]
            },

          ]
        },

      ],
    },


  }
})
