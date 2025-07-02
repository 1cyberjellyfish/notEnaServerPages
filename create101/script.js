document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION LOGIC ---
    const translations = {
        pageTitle: { ru: 'Create 101', en: 'Create 101', uk: 'Create 101' },
        mainTitle: { ru: 'Create 101', en: 'Create 101', uk: 'Create 101' },
        introP: {
            ru: 'Эта статья поможет новичку разобраться с основами Create.',
            en: 'This article will help a newcomer understand the basics of Create.',
            uk: 'Ця стаття допоможе новачку розібратися з основами Create.'
        },
        speedAndStressTitle: {
            ru: 'Скорость и Стресс',
            en: 'Speed and Stress',
            uk: 'Швидкість та Напруга'
        },
        speedAndStressP1: {
            ru: 'Наверное за это время вы захотели сделать свою <span class="accent-text">Мельницу</span> что-бы продуктивнее делать <span class="accent-text">Хлеб</span>, не так ли? Эта статья поможет с этим!',
            en: 'You\'ve probably wanted to make your own <span class="accent-text">Mill</span> to make <span class="accent-text">Bread</span> more productively by now, right? This article will help with that!',
            uk: 'Напевно, ви вже захотіли зробити свій <span class="accent-text">Млин</span>, щоб продуктивніше робити <span class="accent-text">Хліб</span>, чи не так? Ця стаття допоможе з цим!'
        },
        speedAndStressP2: {
            ru: 'В Create есть система оборотов, мощности, и скорости, скорость измеряется в Оборотах в Минуту (<span class="accent-text">RPM</span>), а мощность в Юнитах Стресса(<span class="accent-text">SU</span>). Пусть мы и можем просто передавать обороты через прямые палки под названием <span class="accent-text">Вал</span>, но нам ведь хочется использовать нашу мельницу эффективнее, не так ли? Для этого нам надо разобраться с <span class="accent-text">Шестернями</span>...',
            en: 'Create has a system of rotation, power, and speed. Speed is measured in Rotations Per Minute (<span class="accent-text">RPM</span>), and power in Stress Units (<span class="accent-text">SU</span>). While we can simply transmit rotation through straight rods called <span class="accent-text">Shafts</span>, we want to use our mill more effectively, right? For that, we need to understand <span class="accent-text">Cogs</span>...',
            uk: 'У Create є система обертів, потужності та швидкості. Швидкість вимірюється в Обертах на Хвилину (<span class="accent-text">RPM</span>), а потужність в Одиницях Напруги (<span class="accent-text">SU</span>). Хоча ми можемо просто передавати оберти через прямі палиці під назвою <span class="accent-text">Вал</span>, ми ж хочемо використовувати наш млин ефективніше, чи не так? Для цього нам треба розібратися з <span class="accent-text">Шестернями</span>...'
        },
        speedAndStressP3: {
            ru: 'Есть 2 вида шестерней, <span class="large-text">Большая</span> и <span class="small-text">маленькая</span>, и что же произойдёт если мы их совместим? Соотношений Передач!(<span class="accent-text">Ratio</span>) Две шестерни что совмещены друг с другом имеют соотношение оборотов 1:2. Это значит что если мы введём 1 RPM на большую шестерню - мы способны вывести 2 RPM из маленькой, и наоборот, но при этом, обороты реверсируются!',
            en: 'There are 2 types of cogs, <span class="large-text">Large</span> and <span class="small-text">small</span>, and what happens if we combine them? Gear Ratios! (<span class="accent-text">Ratio</span>) Two cogs connected to each other have a 1:2 speed ratio. This means if we input 1 RPM to the large cog, we can get 2 RPM from the small one, and vice versa, but the rotation is reversed!',
            uk: 'Є 2 види шестерень, <span class="large-text">Велика</span> та <span class="small-text">маленька</span>, і що ж станеться, якщо ми їх поєднаємо? Передатне відношення! (<span class="accent-text">Ratio</span>) Дві поєднані шестерні мають співвідношення обертів 1:2. Це означає, що якщо ми подамо 1 RPM на велику шестерню, ми можемо отримати 2 RPM з маленької, і навпаки, але при цьому оберти реверсуються!'
        },
        altCogsRatio: { ru: 'Соотношение шестерней', en: 'Cog Ratios', uk: 'Співвідношення шестерень' },
        speedAndStressP4: {
            ru: 'Но не бывает ведь бесплатной энергии, не так ли? Когда мы увеличиваем обороты, каждый механизм что потребляет их - начинает есть больше <span class="accent-text">SU</span>, и если наш источник не способен выдать достаточно <span class="accent-text">SU</span>, случится <span class="accent-text">ПЕРЕГРУЗ</span>.',
            en: 'But there\'s no such thing as free energy, right? When we increase the speed, every mechanism that consumes it starts using more <span class="accent-text">SU</span>, and if our source cannot provide enough <span class="accent-text">SU</span>, an <span class="accent-text">OVERSTRESS</span> will occur.',
            uk: 'Але ж не буває безкоштовної енергії, чи не так? Коли ми збільшуємо оберти, кожен механізм, що їх споживає, починає використовувати більше <span class="accent-text">SU</span>, і якщо наше джерело нездатне видати достатньо <span class="accent-text">SU</span>, станеться <span class="accent-text">ПЕРЕВАНТАЖЕННЯ</span>.'
        },
        sourcesAndConsumersTitle: {
            ru: 'Источники и потребители',
            en: 'Sources and Consumers',
            uk: 'Джерела та споживачі'
        },
        sourcesAndConsumersP1: {
            ru: 'Но как же нам это использовать? Откуда брать обороты? Куда их выводить?',
            en: 'But how do we use this? Where do we get the rotation from? Where do we direct it?',
            uk: 'Але як нам це використати? Звідки брати оберти? Куди їх спрямовувати?'
        },
        sourcesAndConsumersP2: {
            ru: 'В Create есть множество <span class="accent-text">Источников</span> и <span class="accent-text">Потребителей</span> оборотов и стресса, но в этом случае мы рассмотрим лишь 2: <span class="accent-text">Водяная Мельница</span> и <span class="accent-text">Жернов</span>.',
            en: 'Create has many <span class="accent-text">Sources</span> and <span class="accent-text">Consumers</span> of rotation and stress, but in this case, we will only look at 2: the <span class="accent-text">Water Wheel</span> and the <span class="accent-text">Millstone</span>.',
            uk: 'У Create є безліч <span class="accent-text">Джерел</span> та <span class="accent-text">Споживачів</span> обертів і напруги, але в цьому випадку ми розглянемо лише 2: <span class="accent-text">Водяне Колесо</span> та <span class="accent-text">Жорна</span>.'
        },
        sourcesAndConsumersP3: {
            ru: 'У водяной мельницы есть вал что подобен валу у шестерни, и если мы добавим текущую в одну сторону воду вокруг водяной мельницы, она начнёт вращаться! Если мы добавим к нашем конструкции <span class="large-text">Больших</span> и <span class="small-text">Маленьких</span> шестерней, что по цепочке идут по увеличению соотношения, мы создаём огромное число соотношения. И куда же нам использовать все эти <span class="accent-text">RPM</span> и <span class="accent-text">SU</span>? Естественно в наши жернова! Просто подключите его так-же как и шестерню, к другой шестерне, и мы получим что-то на подобии этого...',
            en: 'A water wheel has a shaft similar to a cog\'s shaft, and if we add water flowing in one direction around the water wheel, it will start spinning! If we add a series of <span class="large-text">Large</span> and <span class="small-text">Small</span> cogs to our setup to increase the ratio, we create a huge gear ratio. And where do we use all this <span class="accent-text">RPM</span> and <span class="accent-text">SU</span>? In our millstones, of course! Just connect it like a cog to another cog, and we\'ll get something like this...',
            uk: 'Водяне колесо має вал, схожий на вал шестерні, і якщо ми додамо воду, що тече в один бік, навколо водяного колеса, воно почне обертатися! Якщо ми додамо до нашої конструкції ланцюжок з <span class="large-text">Великих</span> та <span class="small-text">Маленьких</span> шестерень для збільшення співвідношення, ми створимо величезне передатне число. І куди ж нам використати всі ці <span class="accent-text">RPM</span> та <span class="accent-text">SU</span>? Звісно, в наші жорна! Просто підключіть їх так само, як шестерню, до іншої шестерні, і ми отримаємо щось на зразок цього...'
        },
        altMill: { ru: 'Работающая мельница', en: 'Working mill', uk: 'Млин у роботі' },
        sourcesAndConsumersP4: {
            ru: 'После этого вы можете вручную ложить и вытаскивать ресурсы в и из <span class="accent-text">Жернова</span>, или же добавить несколько воронок, прямо как в ванильном майнкрафте.',
            en: 'After that, you can manually put in and take out resources from the <span class="accent-text">Millstone</span>, or you can add a few hoppers, just like in vanilla Minecraft.',
            uk: 'Після цього ви можете вручну класти та забирати ресурси з <span class="accent-text">Жорен</span>, або ж додати кілька лійок, точнісінько як у ванільному Minecraft.'
        },
        outroP: {
            ru: 'После этой статьи советую ознакомиться с остальными статьями 101.',
            en: 'After this article, I recommend checking out the other 101 articles.',
            uk: 'Після цієї статті раджу ознайомитися з іншими статтями 101.'
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
            if (translation.includes('<') || translation.includes('>')) {
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

    // --- LIGHTBOX LOGIC ---
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');
    const galleryImages = document.querySelectorAll('.image-gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage) {
            lightbox.classList.remove('active');
        }
    });
});
