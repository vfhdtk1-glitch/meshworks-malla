(function () {
    const TRANSLATIONS = {
        'ru': {
            // Dashboard
            'Mesh Network Dashboard': 'Панель управления сетью Meshtastic',
            'Mesh Metrics': 'Метрики сети',
            'Total Nodes': 'Всего узлов',
            'Active Nodes (24h)': 'Активные узлы (24ч)',
            'Gateway Diversity': 'Разнообразие шлюзов',
            'Protocol Diversity': 'Разнообразие протоколов',
            'Total Messages': 'Всего сообщений',
            'Processing Success': 'Успешная обработка',
            'Network Activity Trends (7 Days)': 'Тренды сетевой активности (7 дней)',
            'Network Health': 'Состояние сети',
            'Network Coverage': 'Покрытие сети',
            'Message Success Rate': 'Успешность сообщений',
            'Multiple data sources improve reliability': 'Несколько источников данных повышают надежность',
            'Recent Activity': 'Недавняя активность',
            'Protocol Types': 'Типы протоколов',
            'Node Activity Distribution': 'Распределение активности узлов',
            'Gateway Activity Distribution': 'Распределение активности шлюзов',
            'Signal Quality Distribution': 'Распределение качества сигнала',
            'Message Routing Patterns': 'Паттерны маршрутизации сообщений',
            'Protocol Usage (24h)': 'Использование протоколов (24ч)',
            'Most Active Nodes': 'Самые активные узлы',
            'Network Information': 'Информация о сети',
            'Activity Summary': 'Сводка активности',
            'Signal Quality': 'Качество сигнала',
            'Avg RSSI': 'Средний RSSI',
            'Avg SNR': 'Средний SNR',
            'Network Health': 'Состояние сети',
            
            // Nodes
            'Network Nodes': 'Узлы сети',
            'Node Filters': 'Фильтры узлов',
            'Search': 'Поиск',
            'Search by name, ID, or hardware...': 'Поиск по имени, ID или оборудованию...',
            'Role': 'Роль',
            'All Roles': 'Все роли',
            'Hardware Model': 'Модель оборудования',
            'All Hardware': 'Все оборудование',
            'Primary Channel': 'Основной канал',
            'All Channels': 'Все каналы',
            'Active nodes only (24h)': 'Только активные узлы (24ч)',
            'Named nodes only': 'Только названные узлы',
            'Apply Filters': 'Применить фильтры',
            'Clear Filters': 'Очистить фильтры',
            'Refresh': 'Обновить',
            'Share': 'Поделиться',
            'Legend': 'Легенда',
            'Name': 'Имя',
            'Short Name': 'Краткое имя',
            'Hardware': 'Оборудование',
            'Last Seen': 'Последнее появление',
            '24h Activity': 'Активность (24ч)',
            'Channel': 'Канал',
            'Actions': 'Действия',
            'View node details': 'Просмотр деталей узла',
            'View packets from this node': 'Просмотр пакетов от этого узла',
            'View traceroutes from this node': 'Просмотр трассировок от этого узла',
            
            // Common
            'Loading...': 'Загрузка...',
            'No data found': 'Данные не найдены',
            'Try adjusting your search terms': 'Попробуйте изменить поисковый запрос',
            'No records match your current filters': 'Нет записей, соответствующих вашим фильтрам',
            'Error loading data': 'Ошибка загрузки данных',
            'Excellent': 'Отличное',
            'Good': 'Хорошее',
            'Fair': 'Удовлетворительное',
            'Poor': 'Плохое',
            'Never': 'Никогда',
            'Unknown': 'Неизвестно',
            'Unnamed': 'Без имени'
,
            
            // Packets
            'Packets': 'Пакеты',
            'Packet Filters': 'Фильтры пакетов',
            
            // Traceroute
            'Traceroute Analysis': 'Анализ трассировок',
            'Traceroute Filters': 'Фильтры трассировок'
        }
    };

    const I18n = {
        currentLanguage: 'ru', // Default to Russian as requested
        
        /**
         * Get translated string for current language
         */
        t(key) {
            const translations = TRANSLATIONS[this.currentLanguage];
            if (translations && translations[key]) {
                return translations[key];
            }
            return key; // Return original key if no translation found
        },
        
        /**
         * Set current language
         */
        setLanguage(lang) {
            if (TRANSLATIONS[lang]) {
                this.currentLanguage = lang;
                // Store in localStorage
                try {
                    localStorage.setItem('malla_language', lang);
                } catch (e) {
                    // Ignore storage errors
                }
                return true;
            }
            return false;
        },
        
        /**
         * Initialize i18n system
         */
        init() {
            // Try to load language from localStorage
            try {
                const storedLang = localStorage.getItem('malla_language');
                if (storedLang && TRANSLATIONS[storedLang]) {
                    this.currentLanguage = storedLang;
                }
            } catch (e) {
                // Ignore storage errors
            }
            
            // Apply translations to static content
            this.applyTranslations();
        },
        
        /**
         * Apply translations to static content
         */
        applyTranslations() {
            // Translate all elements with data-i18n attribute
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const translated = this.t(key);
                element.textContent = translated;
            });
            
            // Translate placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                const translated = this.t(key);
                element.placeholder = translated;
            });
            
            // Translate titles
            document.querySelectorAll('[data-i18n-title]').forEach(element => {
                const key = element.getAttribute('data-i18n-title');
                const translated = this.t(key);
                element.title = translated;
            });
        }
    };

    // Expose globally
    window.I18n = I18n;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => I18n.init());
    } else {
        I18n.init();
    }
})();