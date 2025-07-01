document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        pageTitle: {
            en: 'Furry Not Server Ena - Docs',
            ru: 'Furry Not Server Ena - Документация',
            uk: 'Furry Not Server Ena - Документація'
        },
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
        mainLinkNewbieGuide: {
            en: 'Newbie Guide 101',
            ru: 'Гайд для Новичков 101',
            uk: 'Гайд для Новачків 101'
        },
        sectionBasicKnowledge: {
            en: 'Basic Knowledge:', ru: 'Базовые знания:', uk: 'Базові знання:'
        },
        sectionForLeaders: {
            en: 'For Leaders', ru: 'Для Лидеров', uk: 'Для Лідерів'
        },
        sectionForBuilders: {
            en: 'For City Builders:', ru: 'Для градостроителей:', uk: 'Для містобудівників:'
        },
        linkCreate101: {
            en: 'Create 101', ru: 'Create 101', uk: 'Create 101'
        },
        linkCreateBrave: {
            en: 'Create for the Brave', ru: 'Create для храбрых', uk: 'Create для хоробрих'
        },
        linkSilentGear101: {
            en: 'Silent Gear 101', ru: 'Silent Gear 101', uk: 'Silent Gear 101'
        },
        linkSilentGearBrave: {
            en: 'Silent Gear for the Brave', ru: 'Silent Gear для храбрых', uk: 'Silent Gear для хоробрих'
        },
        linkFirearms101: {
            en: 'Firearms 101', ru: 'Огнестрельное оружие 101', uk: 'Вогнепальна зброя 101'
        },
        linkBusiness101: {
            en: 'Business 101', ru: 'Бизнес 101', uk: 'Бізнес 101'
        },
        linkFactionBasics: {
            en: 'Faction Basics', ru: 'Основы ведения Фракции', uk: 'Основи ведення Фракції'
        },
        linkBaseDefense: {
            en: 'Base Defense Basics', ru: 'Основы обороны Базы', uk: 'Основи оборони Бази'
        },
        linkDiplomacy: {
            en: 'How to conduct diplomacy?', ru: 'Как вести дипломатию?', uk: 'Як вести дипломатію?'
        },
        linkCityBuilding: {
            en: 'City Building Basics', ru: 'Основы строительства Города', uk: 'Основи будівництва Міста'
        },
        linkTrains101: {
            en: 'Trains 101', ru: 'Поезда 101', uk: 'Поїзди 101'
        },
        linkPowerGrid101: {
            en: 'Power Grid 101', ru: 'Электрическая Сеть 101', uk: 'Електрична Мережа 101'
        },
        linkFactory101: {
            en: 'Factory 101', ru: 'Фабрика 101', uk: 'Фабрика 101'
        }
    };

    const userLang = navigator.language.slice(0, 2);
    const lang = (translations.mainHeader[userLang]) ? userLang : 'en';

    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        const translation = translations[key]?.[lang];
        
        if (translation) {
            if (translation.includes('<') && translation.includes('>')) {
                elem.innerHTML = translation;
            } else {
                elem.textContent = translation;
            }
        }
    });
});
