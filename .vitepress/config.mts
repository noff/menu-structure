import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Магазин",
  description: "3-уровневое меню",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    docFooter: {
      prev: false,
      next: false
    },

    sidebar: [
      { text: 'Обзор', link: '/index.md' },

      {
        text: 'Инсайты',
        collapsed: true,
        items: [
          {
            text: 'Заказы',
            collapsed: true,
            items: [
              { text: 'Список заказов', link: '/insights/orders/index.md' },
              { text: 'Заказы по сервисам', link: '/insights/orders/tools.md' },
              { text: 'Заказы по UTM', link: '/insights/orders/utm.md' },
              { text: 'Заказы по каналам', link: '/insights/orders/channels.md' },
              { text: 'Онлайн-заказы по каналам', link: '/insights/orders/online_channels.md' },
            ]
          },
          { text: 'Воронки', link: '/insights/funnels.md' },
          { text: 'AI аналитик', link: '/insights/ai_reports.md' },
        ]
      },

      {
        text: 'CDP',
        collapsed: true,
        items: [
          { text: 'Посетители', link: '/cdp/users.md' },
          {
            text: 'Отчеты',
            collapsed: true,
            items: [
              { text: 'Аудитория', link: '/cdp/reports/audience.md' },
              { text: 'Динамика', link: '/cdp/reports/dynamics.md' },
              { text: 'Сессии', link: '/cdp/reports/sessions.md' },
              { text: 'Пользователи с email', link: '/cdp/reports/users_with_email.md' },
              { text: 'Отток email', link: '/cdp/reports/email_list_churn.md' },
              { text: 'Открытия email', link: '/cdp/reports/opened_and_not_opened_emails.md' },
              { text: 'Устройства', link: '/cdp/reports/devices.md' },
              { text: 'Отток web push', link: '/cdp/reports/web_push_token_churn_forecast.md' },
              { text: 'Отток mobile push', link: '/cdp/reports/mobile_push_token_churn_forecast.md' },
            ]
          },
          {
            text: 'Сегменты',
            collapsed: true,
            items: [
              { text: 'Статичные сегменты', link: '/cdp/segments/static.md' },
              { text: 'Динамические сегменты', link: '/cdp/segments/dynamic.md' },
              { text: 'RFM', link: '/cdp/segments/rfm.md' },
              { text: 'Suppressed emails', link: '/cdp/segments/suppressed_emails.md' },
              { text: 'Soft bounced emails', link: '/cdp/segments/soft_bounced_emails.md' },
              { text: 'Hard bounced emails', link: '/cdp/segments/hard_bounced_emails.md' },
            ]
          },
          {
            text: 'Настройки',
            collapsed: true,
            items: [
              { text: 'Политика контактов', link: '/cdp/settings/contacts_management_policy.md' },
              { text: 'Автосборщик', link: '/cdp/settings/auto_collector.md' },
              { text: 'Свойства профилей', link: '/cdp/settings/profile_properties.md' },
              { text: 'Кастомные события', link: '/cdp/settings/custom_events.md' },
              { text: 'Статусы заказов', link: '/cdp/settings/order_statuses.md' },
              { text: 'Свойства заказов', link: '/cdp/settings/order_properties.md' },
              { text: 'Теги пользователей', link: '/cdp/settings/user_tags.md' },
              { text: 'RFM', link: '/cdp/settings/rfm.md' },
            ]
          },
        ]
      },

      {
        text: 'Библиотека',
        collapsed: true,
        items: [
          {
            text: 'Товары',
            collapsed: true,
            items: [
              {
                text: 'Отчеты',
                collapsed: true,
                items: [
                  { text: 'Продажи товаров', link: '/library/products/reports/products_sales.md' },
                  { text: 'Подписки на наличие', link: '/library/products/reports/subscriptions_for_stock.md' },
                  { text: 'Подписки на цену', link: '/library/products/reports/subscriptions_for_price.md' },
                  { text: 'Брошенные корзины', link: '/library/products/reports/abandoned_carts.md' },
                  { text: 'Избранное', link: '/library/products/reports/wishlisted_products.md' },
                ]
              },
              { text: 'Каталог товаров', link: '/library/products/catalog.md' },
              { text: 'Логи импорта', link: '/library/products/import_logs.md' },
              { text: 'Категории', link: '/library/products/categories.md' },
              { text: 'Локации', link: '/library/products/locations.md' },
              { text: 'Бренды', link: '/library/products/brands.md' },
              { text: 'Параметры товаров', link: '/library/products/product_parameters.md' },
              { text: 'Настройки импорта', link: '/library/products/import_settings.md' },
            ]
          },
          {
            text: 'Контент',
            collapsed: true,
            items: [
              { text: 'Галерея', link: '/library/content/gallery.md' },
              { text: 'Баннеры для рассылок', link: '/library/content/banners.md' },
            ]
          },
          {
            text: 'Утилиты',
            collapsed: true,
            items: [
              { text: 'Встраиваемые скрипты', link: '/library/utilities/js_snippets.md' },
            ]
          },
        ]
      },

      {
        text: 'Витрина',
        collapsed: true,
        items: [
          {
            text: 'Поиск',
            collapsed: true,
            items: [
              {
                text: 'Отчеты',
                collapsed: true,
                items: [
                  { text: 'Отчет по запросам', link: '/storefront/search/reports/search_queries.md' },
                  { text: 'Категорийные подсказки', link: '/storefront/search/reports/category_suggests.md' },
                  { text: 'Популярные запросы', link: '/storefront/search/reports/popular_queries.md' },
                  { text: 'Запросы без результатов', link: '/storefront/search/reports/failed_search_queries.md' },
                  { text: 'Конверсионные запросы', link: '/storefront/search/reports/top_performing_queries.md' },
                  { text: 'Запросы без конверсий', link: '/storefront/search/reports/top_queries_without_purchases.md' },
                ]
              },
              {
                text: 'Управление',
                collapsed: true,
                items: [
                  { text: 'Синонимы', link: '/storefront/search/manage/synonyms.md' },
                  { text: 'Редиректы', link: '/storefront/search/manage/redirects.md' },
                  { text: 'Стоп-слова', link: '/storefront/search/manage/stop_words.md' },
                  { text: 'Софт бусты', link: '/storefront/search/manage/soft_boosts.md' },
                  { text: 'Хард бусты', link: '/storefront/search/manage/hard_boosts.md' },
                ]
              },
              {
                text: 'Настройки',
                collapsed: true,
                items: [
                  { text: 'Основные настройки', link: '/storefront/search/settings/common.md' },
                  { text: 'Обработка текста', link: '/storefront/search/settings/text_processing.md' },
                  { text: 'Быстрый поиск', link: '/storefront/search/settings/instant_search.md' },
                  { text: 'Текстовые вставки', link: '/storefront/search/settings/instant_search_static_content.md' },
                  { text: 'Полный поиск', link: '/storefront/search/settings/full_search.md' },
                  { text: 'Фасетный поиск', link: '/storefront/search/settings/facet_settings.md' },
                  { text: 'Расширенные настройки', link: '/storefront/search/settings/advanced_settings.md' },
                  { text: 'Переводы', link: '/storefront/search/settings/i18n.md' },
                ]
              },
              {
                text: 'Оформление',
                collapsed: true,
                items: [
                  { text: 'Тема оформления', link: '/storefront/search/theme/theme.md' },
                  { text: 'Шаблон полного поиска', link: '/storefront/search/theme/full_template.md' },
                  { text: 'Шаблон быстрого поиска', link: '/storefront/search/theme/instant_template.md' },
                ]
              },
            ]
          },
          {
            text: 'Товарные рекомендации',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/storefront/recommendations/report.md' },
              { text: 'Блоки', link: '/storefront/recommendations/blocks.md' },
              { text: 'Темы оформления', link: '/storefront/recommendations/themes.md' },
              { text: 'Шаблоны', link: '/storefront/recommendations/templates.md' },
              { text: 'Настройки', link: '/storefront/recommendations/settings.md' },
            ]
          },
          {
            text: 'Коллекции',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/storefront/collections/report.md' },
              { text: 'Коллекции', link: '/storefront/collections/collections.md' },
              { text: 'Шаблоны', link: '/storefront/collections/templates.md' },
            ]
          },
          {
            text: 'Ленты товаров',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/storefront/listings/report.md' },
              { text: 'Шаблон', link: '/storefront/listings/template.md' },
            ]
          },
          {
            text: 'Сторис',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/storefront/stories/report.md' },
              { text: 'Блоки', link: '/storefront/stories/blocks.md' },
              { text: 'Кампании', link: '/storefront/stories/campaigns.md' },
            ]
          },
          {
            text: 'Попапы',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/storefront/popups/report.md' },
              { text: 'Попапы для сайта', link: '/storefront/popups/web.md' },
              { text: 'In-app попапы', link: '/storefront/popups/mobile.md' },
            ]
          },
          {
            text: 'Баннеры',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/storefront/banners/report.md' },
              { text: 'Баннерные блоки', link: '/storefront/banners/sliders.md' },
            ]
          },
        ]
      },

      {
        text: 'Коммуникации',
        collapsed: true,
        items: [
          {
            text: 'Отчеты',
            collapsed: true,
            items: [
              { text: 'Email', link: '/communications/reports/email.md' },
              { text: 'Web push', link: '/communications/reports/web_push.md' },
              { text: 'Mobile push', link: '/communications/reports/mobile_push.md' },
              { text: 'SMS', link: '/communications/reports/sms.md' },
              { text: 'Telegram', link: '/communications/reports/telegram.md' },
              { text: 'MAX', link: '/communications/reports/max.md' },
              { text: 'WhatsApp', link: '/communications/reports/whatsapp.md' },
              { text: 'Доставка по доменам', link: '/communications/reports/deliverability_by_domain.md' },
              { text: 'Доставка по гео', link: '/communications/reports/deliverability_by_location.md' },
              { text: 'Триггерные цепочки', link: '/communications/reports/chains_reports.md' },
            ]
          },
          {
            text: 'Массовые рассылки',
            collapsed: true,
            items: [
              { text: 'Email', link: '/communications/bulk/email.md' },
              { text: 'Web push', link: '/communications/bulk/web_push.md' },
              { text: 'Mobile push', link: '/communications/bulk/mobile_push.md' },
              { text: 'SMS', link: '/communications/bulk/sms.md' },
              { text: 'Telegram', link: '/communications/bulk/telegram.md' },
              { text: 'MAX', link: '/communications/bulk/max.md' },
              { text: 'WhatsApp', link: '/communications/bulk/whatsapp.md' },
              { text: 'Wallet', link: '/communications/bulk/wallet.md' },
            ]
          },
          {
            text: 'Триггерные цепочки',
            collapsed: true,
            items: [
              { text: 'Цепочки', link: '/communications/chains/campaigns.md' },
              { text: 'События', link: '/communications/chains/events.md' },
              { text: 'Шаблоны писем', link: '/communications/chains/templates.md' },
              { text: 'Мониторинг', link: '/communications/chains/monitoring.md' },
              {
                text: 'Настройки',
                collapsed: true,
                items: [
                  { text: 'Умные цепочки', link: '/communications/chains/settings/smart_chains.md' },
                  { text: 'Лимиты', link: '/communications/chains/settings/limits.md' },
                  { text: 'Тихий режим', link: '/communications/chains/settings/silent_mode.md' },
                  { text: 'Снижение цены', link: '/communications/chains/settings/price_drop.md' },
                ]
              },
            ]
          },
          {
            text: 'Сервисные рассылки',
            collapsed: true,
            items: [
              { text: 'Email', link: '/communications/transactional/email.md' },
              { text: 'Web push', link: '/communications/transactional/web_push.md' },
              { text: 'Mobile push', link: '/communications/transactional/mobile_push.md' },
              { text: 'SMS', link: '/communications/transactional/sms.md' },
              { text: 'Telegram', link: '/communications/transactional/telegram.md' },
              { text: 'MAX', link: '/communications/transactional/max.md' },
              { text: 'WhatsApp', link: '/communications/transactional/whatsapp.md' },
              { text: 'Каскады', link: '/communications/transactional/cascade.md' },
            ]
          },
          {
            text: 'Настройки',
            collapsed: true,
            items: [
              { text: 'Общие настройки', link: '/communications/settings/common.md' },
              { text: 'Настройки email', link: '/communications/settings/email.md' },
              { text: 'Email-домены', link: '/communications/settings/email_domains.md' },
              { text: 'Web push', link: '/communications/settings/web_push.md' },
              { text: 'Mobile push', link: '/communications/settings/mobile_push.md' },
              { text: 'SMS', link: '/communications/settings/sms.md' },
              { text: 'SMS шлюзы', link: '/communications/settings/sms_gateways.md' },
              { text: 'WhatsApp', link: '/communications/settings/whatsapp.md' },
              { text: 'MAX', link: '/communications/settings/max.md' },
              { text: 'Telegram', link: '/communications/settings/telegram.md' },
              { text: 'Категории рассылок', link: '/communications/settings/bulk_campaign_categories.md' },
              { text: 'Страницы подтверждения', link: '/communications/settings/confirmation_pages.md' },
            ]
          },
        ]
      },

      {
        text: 'Программа лояльности',
        collapsed: true,
        items: [
          { text: 'Общий отчет', link: '/loyalty/report.md' },
          { text: 'Участники', link: '/loyalty/members.md' },
          { text: 'Заказы', link: '/loyalty/orders.md' },
          {
            text: 'Бонусы',
            collapsed: true,
            items: [
              { text: 'Отчет', link: '/loyalty/bonuses/report.md' },
              { text: 'Транзакции', link: '/loyalty/bonuses/transactions.md' },
            ]
          },
          {
            text: 'Массовые начисления',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/loyalty/bulk-rewards/reports.md' },
              { text: 'Кампании', link: '/loyalty/bulk-rewards/campaigns.md' },
            ]
          },
          {
            text: 'Промокоды',
            collapsed: true,
            items: [
              { text: 'Списки', link: '/loyalty/promo-codes/lists.md' },
              { text: 'Генераторы', link: '/loyalty/promo-codes/generators.md' },
            ]
          },
          {
            text: 'Акции',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/loyalty/promotions/reports.md' },
              { text: 'Акции', link: '/loyalty/promotions/promotions.md' },
            ]
          },
          {
            text: 'Сертификаты',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/loyalty/certificates/reports.md' },
              { text: 'Пулы сертификатов', link: '/loyalty/certificates/pools.md' },
            ]
          },
          {
            text: 'Фишки',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/loyalty/stickers/reports.md' },
              { text: 'Кампании', link: '/loyalty/stickers/campaigns.md' },
            ]
          },
          {
            text: 'Реферальные программы',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/loyalty/referral/reports.md' },
              { text: 'Программы', link: '/loyalty/referral/campaigns.md' },
              { text: 'Участники', link: '/loyalty/referral/members.md' },
            ]
          },
          {
            text: 'Подписки',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/loyalty/subscriptions/reports.md' },
              { text: 'Управление подписками', link: '/loyalty/subscriptions/campaigns.md' },
              { text: 'Участники', link: '/loyalty/subscriptions/members.md' },
            ]
          },
          {
            text: 'Настройки',
            collapsed: true,
            items: [
              { text: 'Лимиты', link: '/loyalty/settings/limits.md' },
              { text: 'Настройки бонусов', link: '/loyalty/settings/bonuses.md' },
              { text: 'Настройки скидок', link: '/loyalty/settings/discounts.md' },
              { text: 'Настройки уровней', link: '/loyalty/settings/levels.md' },
              { text: 'Исключения', link: '/loyalty/settings/exclusions.md' },
              { text: 'Безопасность', link: '/loyalty/settings/security.md' },
              { text: 'Wallet', link: '/loyalty/settings/wallet.md' },
            ]
          },
        ]
      },

      {
        text: 'Опросы и формы',
        collapsed: true,
        items: [
          {
            text: 'NPS',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/polls/nps/report.md' },
              { text: 'Кампании', link: '/polls/nps/campaigns.md' },
            ]
          },
          {
            text: 'CSAT',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/polls/csat/report.md' },
              { text: 'Кампании', link: '/polls/csat/campaigns.md' },
            ]
          },
          {
            text: 'CES',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/polls/ces/report.md' },
              { text: 'Кампании', link: '/polls/ces/campaigns.md' },
            ]
          },
          {
            text: 'Отзывы о товарах',
            collapsed: true,
            items: [
              { text: 'Отчеты', link: '/polls/reviews/report.md' },
            ]
          },
          {
            text: 'Обращения',
            collapsed: true,
            items: [
              { text: 'Конструктор', link: '/polls/tickets/editor.md' },
              { text: 'Каналы', link: '/polls/tickets/channels.md' },
              { text: 'Темы обращений', link: '/polls/tickets/topics.md' },
              { text: 'Типы обращений', link: '/polls/tickets/types.md' },
            ]
          },
          {
            text: 'Настройки',
            collapsed: true,
            items: [
              { text: 'Каналы', link: '/polls/settings/channels.md' },
            ]
          },
        ]
      },

      {
        text: 'Аудит и безопасность',
        collapsed: true,
        items: [
          { text: 'Статус подключения', link: '/audit/health_check.md' },
          { text: 'История выгрузок', link: '/audit/export_logs.md' },
          { text: 'Системный лог', link: '/audit/system_log.md' },
          { text: 'Лог тестовых запросов', link: '/audit/test_requests_log.md' },
          { text: 'База данных', link: '/audit/database_explorer.md' },
        ]
      },

      {
        text: 'Настройки',
        collapsed: true,
        items: [

          {
            text: 'Настройки проекта',
            collapsed: true,
            items: [
              { text: 'Общие настройки', link: '/settings/project/common.md' },
              { text: 'Настройки валюты', link: '/settings/project/currency.md' },
              { text: 'Часовой пояс', link: '/settings/project/time_zone.md' },
              { text: 'Sales rate', link: '/settings/project/sales_rate.md' },
              { text: 'Период расчета прибыли', link: '/settings/project/profit_calculation_period.md' },
              { text: 'Логотип', link: '/settings/project/logo.md' },
            ]
          },

          {
            text: 'Управление доступом',
            collapsed: true,
            items: [
              { text: 'Пользователи', link: '/settings/access/employees.md' },
              { text: 'Роли', link: '/settings/access/roles.md' },
              { text: 'Белые списки IP', link: '/settings/access/white_listed_ip.md' },
              { text: '2FA', link: '/settings/access/2fa.md' },
              { text: 'Группы тестировщиков', link: '/settings/access/testers_groups.md' },
            ]
          },

          { text: 'Веб-хуки', link: '/settings/webhooks.md' },

          {
            text: 'API',
            collapsed: true,
            items: [
              { text: 'Ключи API', link: '/settings/api/keys.md' },
            ]
          },

        ]
      },


    ],
  }
})
