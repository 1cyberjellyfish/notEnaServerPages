document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        pageTitle: {
            ru: 'Основы игры',
            en: 'Game Basics',
            uk: 'Основи гри'
        },
        mainTitle: {
            ru: 'Эта статья поможет новичку разобраться с базой игры на нашем сервере',
            en: 'This article will help a newcomer to understand the basics of the game on our server',
            uk: 'Ця стаття допоможе новачкові розібратися з базою гри на нашому сервері'
        },
        interfaceTitle: {
            ru: 'Интерфейс:',
            en: 'Interface:',
            uk: 'Інтерфейс:'
        },
        interfaceP1: {
            ru: `Наверное вы сразу заметите что ваш интерфейс теперь не так прост как в ванильном Майнкрафте, а конкретно: Добавлена <span class="accent-text">Миникарта</span>. Так-же при открытии вашего инвентаря, вы увидите мод Curios, который позволяет вам экипировать предметы кроме вашей брони, и <span class="accent-text">JEI</span>, Это мы пока-что можем игнорировать. Но <span class="accent-text">Миникарта</span> - крайне полезный инструмент который позволяет лучше ориентироваться в местности, и вы так-же можете открыть полноэкранную карту, нажав M.`,
            en: `You will probably immediately notice that your interface is not as simple as in vanilla Minecraft, specifically: a <span class="accent-text">Minimap</span> has been added. Also, when you open your inventory, you will see the Curios mod, which allows you to equip items other than your armor, and <span class="accent-text">JEI</span>, which we can ignore for now. But the <span class="accent-text">Minimap</span> is an extremely useful tool that allows you to better navigate the terrain, and you can also open the full-screen map by pressing M.`,
            uk: `Напевно, ви відразу помітите, що ваш інтерфейс тепер не такий простий, як у ванільному Майнкрафті, а конкретно: додано <span class="accent-text">Мінікарта</span>. Також, відкривши ваш інвентар, ви побачите мод Curios, який дозволяє вам екіпірувати предмети крім вашої броні, і <span class="accent-text">JEI</span>, що ми поки що можемо ігнорувати. Але <span class="accent-text">Мінікарта</span> - вкрай корисний інструмент, який дозволяє краще орієнтуватися в місцевості, і ви також можете відкрити повноекранну карту, натиснувши M.`
        },
        altInterface: { ru: 'Интерфейс с миникартой', en: 'Interface with minimap', uk: 'Інтерфейс з мінікартою' },
        altCurios: { ru: 'Инвентарь Curios', en: 'Curios Inventory', uk: 'Інвентар Curios' },
        altGeneration: { ru: 'Генерация мира', en: 'World Generation', uk: 'Генерація світу' },
        interfaceP2: {
            ru: 'Так-же осмотревшись вы можете увидеть, что генерация теперь не состоит из одной сплошной земли, все усеяно океанами, а земля плоская, прямо как в реальной жизни!',
            en: 'Also, looking around you can see that the generation no longer consists of solid land, everything is dotted with oceans, and the earth is flat, just like in real life!',
            uk: 'Також, озирнувшись, ви можете побачити, що генерація тепер не складається з однієї суцільної землі, все усіяне океанами, а земля пласка, прямо як у реальному житті!'
        },
        equipmentTitle: {
            ru: 'Основы снаряжения',
            en: 'Equipment Basics',
            uk: 'Основи спорядження'
        },
        equipmentP1: {
            ru: `При первом спавне в вашем инвентаре будет синий <span class="accent-text">Пакет Чертежей</span>, который вам не стоит открывать так сразу! При открытии вам дадутся <span class="accent-text">Чертежи</span> базовых вещей. Для начала я рекомендую вам отплыть от спавна, покопаться в шахте, добыть базовейшие ресурсы Майнкрафта(Не мне учить вас как это делать.) После чего вы можете приступать к улучшению или созданию своих инструментов! В этот момент вы наконец-то можете распаковать <i>Пакет Чертежей</i>, и получить чертежи! А конкретно нас интересуют чертежи палки, кирки, топора, и прочих инструментов что вы желаете себе скрафтить. Припустим вы желаете себе сделать крайне дешевую кирку из <span class="accent-text">Меди</span>, и сейчас я покажу как вы можете это сделать! Для начала, нам нужен сам <span class="accent-text">Чертеж Кирки</span>, ложите его в любой слот <span class="accent-text">Верстака</span>. После чего мы добавляем 3 предмета которые будут делать головье нашей <span class="accent-text">Кирки</span>, в этом случае - <span class="accent-text">Медь</span> Мы вытаскиваем получившееся головье, и добавляем любую <span class="accent-text">Рукоять</span> (Можно скрафтить аналогично с <span class="accent-text">Головьем Кирки</span>, или использовать Кость) По итогу у нас выйдет как-то так:`,
            en: `When you first spawn, you will have a blue <span class="accent-text">Blueprint Pack</span> in your inventory, which you should not open right away! When you open it, you will receive <span class="accent-text">Blueprints</span> for basic items. To start, I recommend you sail away from the spawn, dig in a mine, and gather the most basic Minecraft resources (I don't need to teach you how to do that). After that, you can start improving or creating your tools! At this moment, you can finally unpack the <i>Blueprint Pack</i> and get the blueprints! Specifically, we are interested in blueprints for a stick, pickaxe, axe, and other tools you want to craft. Let's say you want to make a very cheap pickaxe from <span class="accent-text">Copper</span>, and now I will show you how to do it! First, we need the <span class="accent-text">Pickaxe Blueprint</span> itself, place it in any slot of the <span class="accent-text">Crafting Table</span>. Then we add 3 items that will make the head of our <span class="accent-text">Pickaxe</span>, in this case - <span class="accent-text">Copper</span>. We take out the resulting head and add any <span class="accent-text">Handle</span> (it can be crafted similarly to the <span class="accent-text">Pickaxe Head</span>, or you can use a Bone). In the end, it will look something like this:`,
            uk: `При першому спавні у вашому інвентарі буде синій <span class="accent-text">Пакет Креслень</span>, який вам не варто відкривати одразу! При відкритті вам видадуть <span class="accent-text">Креслення</span> базових речей. Для початку я рекомендую вам відплисти від спавну, покопатися в шахті, добути найпростіші ресурси Майнкрафту (Не мені вчити вас, як це робити.) Після цього ви можете приступати до покращення або створення своїх інструментів! У цей момент ви нарешті можете розпакувати <i>Пакет Креслень</i> і отримати креслення! А конкретно нас цікавлять креслення палиці, кирки, сокири та інших інструментів, які ви бажаєте собі скрафтити. Припустимо, ви хочете зробити собі вкрай дешеву кирку з <span class="accent-text">Міді</span>, і зараз я покажу, як ви можете це зробити! Для початку нам потрібне саме <span class="accent-text">Креслення Кирки</span>, кладіть його в будь-який слот <span class="accent-text">Верстака</span>. Після цього ми додаємо 3 предмети, які будуть робити головку нашої <span class="accent-text">Кирки</span>, в цьому випадку - <span class="accent-text">Мідь</span>. Ми витягуємо отриману головку і додаємо будь-яке <span class="accent-text">Руків'я</span> (можна скрафтити аналогічно до <span class="accent-text">Головки Кирки</span>, або використовувати Кістку). У підсумку в нас вийде якось так:`
        },
        altCrafting1: { ru: 'Создание головья кирки', en: 'Creating a pickaxe head', uk: 'Створення головки кирки' },
        altCrafting2: { ru: 'Создание кирки', en: 'Creating a pickaxe', uk: 'Створення кирки' },
        equipmentP2: {
            ru: `Поздравляю! Вы создали свой первый кастомный инструмент! Так-же вы можете создать <span class="accent-text">Комплект Починки</span> который позволяет вам ремонтировать вещи в своем верстаке! Сначала добавляете материал внутрь <span class="accent-text">Комплекта Починки</span>(<span class="accent-text">Repair Kit</span> в JEI), и добавляете <span class="accent-text">Комплект Починки</span> вместе с тем что желаете поремонтировать. Остальные крафты вы можете посмотреть в <span class="accent-text">JEI</span>!`,
            en: `Congratulations! You have created your first custom tool! You can also create a <span class="accent-text">Repair Kit</span> that allows you to repair items in your crafting table! First, add the material inside the <span class="accent-text">Repair Kit</span>, and then add the <span class="accent-text">Repair Kit</span> along with what you want to repair. You can see the other crafts in <span class="accent-text">JEI</span>!`,
            uk: `Вітаю! Ви створили свій перший кастомний інструмент! Також ви можете створити <span class="accent-text">Комплект для Ремонту</span>, який дозволяє вам ремонтувати речі у своєму верстаку! Спочатку додаєте матеріал всередину <span class="accent-text">Комплекту для Ремонту</span> (<span class="accent-text">Repair Kit</span> в JEI), і додаєте <span class="accent-text">Комплект для Ремонту</span> разом з тим, що бажаєте поремонтувати. Інші крафти ви можете подивитися в <span class="accent-text">JEI</span>!`
        },
        nextStepsTitle: {
            ru: 'Что делать дальше?',
            en: 'What to do next?',
            uk: 'Що робити далі?'
        },
        nextStepsP1: {
            ru: `Создайте убежище, фракцию, город, или прибейтесь к группе игроков, не бойтесь социальности, ведь сервер как раз про это! Найдите людей с общими интересами, постройте себе красивый дом, создавайте производства, воюйте, захватывайте, выживайте, общайтесь, создайте свою таверну, или завод <span class="accent-text">Апельсиновой Колбасы</span>... Ваши возможности безграничны!(пока вы не нарушаете правила...) После этой статьи, переходите в остальные статьи что подписаны как <span class="accent-text">101</span>! Там есть остальная базовая информация что пригодится по ходу вашей игры.`,
            en: `Create a shelter, a faction, a city, or join a group of players. Don't be afraid to be social, because that's what the server is all about! Find people with common interests, build a beautiful house, create industries, fight, conquer, survive, communicate, create your own tavern, or an <span class="accent-text">Orange Sausage</span> factory... Your possibilities are endless! (as long as you don't break the rules...) After this article, move on to the other articles labeled <span class="accent-text">101</span>! They contain the rest of the basic information that will be useful during your game.`,
            uk: `Створіть притулок, фракцію, місто, або приєднайтеся до групи гравців, не бійтеся соціальності, адже сервер якраз про це! Знайдіть людей зі спільними інтересами, побудуйте собі гарний будинок, створюйте виробництва, воюйте, захоплюйте, виживайте, спілкуйтеся, створіть свою таверну, або завод <span class="accent-text">Апельсинової Ковбаси</span>... Ваші можливості безмежні! (поки ви не порушуєте правила...) Після цієї статті, переходьте до інших статей, що підписані як <span class="accent-text">101</span>! Там є решта базової інформації, що знадобиться під час вашої гри.`
        },
        backLink: {
            ru: 'Вернуться на главную',
            en: 'Back to main page',
            uk: 'Повернутися на головну'
        }
    };

    const userLang = navigator.language.slice(0, 2);
    const lang = (translations.pageTitle[userLang]) ? userLang : 'en';

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
    
    document.querySelectorAll('[data-lang-key-alt]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key-alt');
        const translation = translations[key]?.[lang];
        if (translation) {
            elem.setAttribute('alt', translation);
        }
    });
});
