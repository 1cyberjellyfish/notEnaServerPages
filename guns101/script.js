document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION LOGIC ---
    const translations = {
        pageTitle: {
            ru: 'Огнестрельное оружие 101',
            en: 'Firearms 101',
            uk: 'Вогнепальна зброя 101'
        },
        mainTitle: {
            ru: 'Огнестрельное оружие 101',
            en: 'Firearms 101',
            uk: 'Вогнепальна зброя 101'
        },
        importantNote: {
            ru: '<span class="accent-text">ВАЖНО!</span><br>Перед тем как начинать работу с оружием, я советую вам поменять кнопки в настройках мода <span class="accent-text">Point Blank</span>, а так-же отключить кнопку перезагрузки шейдеров в <span class="accent-text">Oculus</span>!',
            en: '<span class="accent-text">IMPORTANT!</span><br>Before you start working with weapons, I advise you to change the keybinds in the <span class="accent-text">Point Blank</span> mod settings, as well as disable the shader reload button in <span class="accent-text">Oculus</span>!',
            uk: '<span class="accent-text">ВАЖЛИВО!</span><br>Перш ніж починати роботу зі зброєю, я раджу вам змінити клавіші в налаштуваннях моду <span class="accent-text">Point Blank</span>, а також вимкнути клавішу перезавантаження шейдерів у <span class="accent-text">Oculus</span>!'
        },
        creationTitle: {
            ru: 'Основы создания оружия',
            en: 'Basics of Weapon Crafting',
            uk: 'Основи створення зброї'
        },
        creationP1: {
            ru: 'Что-бы умело стрелять, нам надо создать само оружие, не так ли? Что-бы это сделать, сначала скрафтите <span class="accent-text">Принтер Оружия</span>, он имеет слишком интуитивный интерфейс что-бы обьяснять его работу, выбираете пушку и создаёте!',
            en: 'To shoot skillfully, we need to create the weapon itself, right? To do this, first craft a <span class="accent-text">Weapon Printer</span>. It has a very intuitive interface, so explaining how it works is unnecessary. Just choose a gun and create it!',
            uk: 'Щоб вправно стріляти, нам потрібно створити саму зброю, чи не так? Для цього спершу створіть <span class="accent-text">Збройовий Принтер</span>. Він має надто інтуїтивний інтерфейс, щоб пояснювати його роботу: обираєте зброю та створюєте!'
        },
        altPrinter: { ru: 'Принтер Оружия', en: 'Weapon Printer', uk: 'Збройовий Принтер' },
        altPrinterInside: { ru: 'Интерфейс принтера', en: 'Printer Interface', uk: 'Інтерфейс принтера' },
        handlingTitle: {
            ru: 'Обращение с оружием',
            en: 'Handling Weapons',
            uk: 'Поводження зі зброєю'
        },
        handlingP1: {
            ru: 'Теперь вы хотите начать стрелять, не так ли? У оружия есть такие возможности: Перезарядка, Прицеливание, Изменение режима огня но! В отличие от остальных игр, здесь так-же присутствует баллистика, под которую вам лучше компенсироваться! Разное вооружение имеет разную баллистическую дугу, но в целом - чем слабее калибр, тем хуже дальность! Для перезарядки оружия вам нужна аммуниция совместимая с самим оружием, в случае <span class="accent-text">M1911</span> например: <span class="accent-text">.45 ACP</span>.',
            en: 'Now you want to start shooting, right? Weapons have the following features: Reloading, Aiming, Changing fire mode, but! Unlike other games, there is also ballistics, which you need to compensate for! Different weapons have different ballistic arcs, but in general, the weaker the caliber, the worse the range! To reload a weapon, you need ammunition compatible with the weapon itself, in the case of the <span class="accent-text">M1911</span> for example: <span class="accent-text">.45 ACP</span>.',
            uk: 'Тепер ви хочете почати стріляти, чи не так? Зброя має такі можливості: Перезаряджання, Прицілювання, Зміна режиму вогню, але! На відміну від інших ігор, тут також є балістика, до якої вам доведеться пристосовуватися! Різне озброєння має різну балістичну дугу, але загалом — що слабший калібр, то гірша дальність! Для перезаряджання зброї вам потрібні боєприпаси, сумісні із самою зброєю, у випадку <span class="accent-text">M1911</span>, наприклад: <span class="accent-text">.45 ACP</span>.'
        },
        altGunReload: { ru: 'Перезарядка оружия', en: 'Reloading a weapon', uk: 'Перезаряджання зброї' },
        handlingP2: {
            ru: 'Но этим не всё сказано! Так-же присутствует система обвесов! Каждое оружие имеет свой набор совместимых обвесов, который можно увидеть, если навестись на оружие нажать <i>Shift</i>. Вы можете добавлять прицелы, глушители, дополнительные планки, всё что вашей душе пожелается!',
            en: 'But that\'s not all! There is also an attachment system! Each weapon has its own set of compatible attachments, which you can see by hovering over the weapon and pressing <i>Shift</i>. You can add sights, suppressors, additional rails—whatever your heart desires!',
            uk: 'Але це ще не все! Також існує система обвісів! Кожна зброя має свій набір сумісних обвісів, який можна побачити, навівши на зброю та натиснувши <i>Shift</i>. Ви можете додавати приціли, глушники, додаткові планки — все, що душа забажає!'
        },
        altAttachments: { ru: 'Система обвесов', en: 'Attachment System', uk: 'Система обвісів' },
        outroP: {
            ru: 'И на этом всё, вы готовы к стрельбе, будь это просто самозащита, охота, или убийство <span class="strikethrough-text">людей</span> монстров вокруг вашей базы!',
            en: 'And that\'s it, you are ready to shoot, whether it\'s for self-defense, hunting, or killing <span class="strikethrough-text">people</span> monsters around your base!',
            uk: 'І на цьому все, ви готові до стрільби, чи то для самозахисту, полювання, чи для вбивства <span class="strikethrough-text">людей</span> монстрів навколо вашої бази!'
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
