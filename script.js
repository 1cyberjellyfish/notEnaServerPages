document.addEventListener('DOMContentLoaded', () => {

    // Объект с переводами. Ключи - это значения атрибута data-lang-key в HTML.
    const translations = {
        // Общее
        pageTitle: {
            en: 'Furry Not Server Ena - Docs',
            ru: 'Furry Not Server Ena - Документация',
            uk: 'Furry Not Server Ena - Документація'
        },
        sidebarTitle: {
            en: 'Navigation',
            ru: 'Навигация',
            uk: 'Навігація'
        },
        // Главная страница
        mainHeader: {
            en: 'Furry Not Server Ena',
            ru: 'Furry Not Server Ena',
            uk: 'Furry Not Server Ena'
        },
        howToPlay: {
            en: 'How to play?',
            ru: 'Как играть?',
            uk: 'Як грати?'
        },
        introText: {
            en: 'This documentation contains a lot of help for the average player, it will allow a <span class="accent-text">Newbie</span> to get comfortable, and an <span class="accent-text">Amateur</span> to move on, choose an article:',
            ru: 'Эта документация содержит множество помощи обычному игроку, она позволит освоиться <span class="accent-text">Новичку</span>, и продвинуться дальше <span class="accent-text">Любителю</span>, выберите статью:',
            uk: 'Ця документація містить багато допомоги звичайному гравцеві, вона дозволить освоїтися <span class="accent-text">Новачку</span>, і просунутися далі <span class="accent-text">Любителю</span>, виберіть статтю:'
        },
        textNewbie: {
            en: 'Newbie', ru: 'Новичку', uk: 'Новачку'
        },
        textAmateur: {
            en: 'Amateur', ru: 'Любителю', uk: 'Любителю'
        },
        mainLinkNewbieGuide: {
            en: 'Newbie Guide 101',
            ru: 'Гайд для Новичков 101',
            uk: 'Гайд для Новачків 101'
        },
        // Заголовки секций
        sectionBasicKnowledge: {
            en: 'Basic Knowledge:', ru: 'Базовые знания:', uk: 'Базові знання:'
        },
        sectionForLeaders: {
            en: 'For Leaders', ru: 'Для Лидеров', uk: 'Для Лідерів'
        },
        sectionForBuilders: {
            en: 'For City Builders:', ru: 'Для градостроителей:', uk: 'Для містобудівників:'
        },
        // Навигация
        navNewbieGuide: {
            en: 'Newbie Guide 101', ru: 'Гайд для Новичков 101', uk: 'Гайд для Новачків 101'
        },
        navBasicKnowledge: {
            en: 'Basic Knowledge:', ru: 'Базовые знания:', uk: 'Базові знання:'
        },
        navCreate101: {
            en: 'Create 101', ru: 'Create 101', uk: 'Create 101'
        },
        navCreateBrave: {
            en: 'Create for the Brave', ru: 'Create для храбрых', uk: 'Create для хоробрих'
        },
        navSilentGear101: {
            en: 'Silent Gear 101', ru: 'Silent Gear 101', uk: 'Silent Gear 101'
        },
        navSilentGearBrave: {
            en: 'Silent Gear for the Brave', ru: 'Silent Gear для храбрых', uk: 'Silent Gear для хоробрих'
        },
        navFirearms101: {
            en: 'Firearms 101', ru: 'Огнестрельное оружие 101', uk: 'Вогнепальна зброя 101'
        },
        navBusiness101: {
            en: 'Business 101', ru: 'Бизнес 101', uk: 'Бізнес 101'
        },
        navForLeaders: {
            en: 'For Leaders:', ru: 'Для Лидеров:', uk: 'Для Лідерів:'
        },
        navFactionBasics: {
            en: 'Faction Basics', ru: 'Основы ведения Фракции', uk: 'Основи ведення Фракції'
        },
        navBaseDefense: {
            en: 'Base Defense Basics', ru: 'Основы обороны Базы', uk: 'Основи оборони Бази'
        },
        navDiplomacy: {
            en: 'How to conduct diplomacy?', ru: 'Как вести дипломатию?', uk: 'Як вести дипломатію?'
        },
        navCityBuilding: {
            en: 'City Building Basics', ru: 'Основы строительства Города', uk: 'Основи будівництва Міста'
        },
        navForBuilders: {
            en: 'For City Builders:', ru: 'Для градостроителей:', uk: 'Для містобудівників:'
        },
        navTrains101: {
            en: 'Trains 101', ru: 'Поезда 101', uk: 'Поїзди 101'
        },
        navPowerGrid101: {
            en: 'Power Grid 101', ru: 'Электрическая Сеть 101', uk: 'Електрична Мережа 101'
        },
        navFactory101: {
            en: 'Factory 101', ru: 'Фабрика 101', uk: 'Фабрика 101'
        }
        // ... Дублирование ссылок для основного контента (можно сделать один ключ на оба места)
    };
    // Сделаем дубликаты ключей, чтобы не создавать новые для одного и того же текста
    translations.linkCreate101 = translations.navCreate101;
    translations.linkCreateBrave = translations.navCreateBrave;
    translations.linkSilentGear101 = translations.navSilentGear101;
    translations.linkSilentGearBrave = translations.navSilentGearBrave;
    translations.linkFirearms101 = translations.navFirearms101;
    translations.linkBusiness101 = translations.navBusiness101;
    translations.linkFactionBasics = translations.navFactionBasics;
    translations.linkBaseDefense = translations.navBaseDefense;
    translations.linkDiplomacy = translations.navDiplomacy;
    translations.linkCityBuilding = translations.navCityBuilding;
    translations.linkTrains101 = translations.navTrains101;
    translations.linkPowerGrid101 = translations.navPowerGrid101;
    translations.linkFactory101 = translations.navFactory101;


    // --- Логика переключения языка ---

    // 1. Определяем язык браузера
    const userLang = navigator.language.slice(0, 2);

    // 2. Выбираем язык для использования: 'uk', 'ru', или 'en' по умолчанию
    const lang = (translations.mainHeader[userLang]) ? userLang : 'en';

    // 3. Находим все элементы для перевода и заменяем их текст
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        const translation = translations[key]?.[lang];
        
        if (translation) {
            // Если в переводе есть HTML теги (как в introText), используем innerHTML
            if (translation.includes('<') && translation.includes('>')) {
                elem.innerHTML = translation;
            } else {
                elem.textContent = translation;
            }
        }
    });
});
