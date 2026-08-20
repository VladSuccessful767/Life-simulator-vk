/* =========================================================
   БАЗА АВТОМОБИЛЕЙ
========================================================= */

const cars = [
    { brand: "Kia", model: "Rio", years: [2013, 2014, 2015, 2016], icon: "🚗" },
    { brand: "Kia", model: "Ceed", years: [2012, 2013, 2014, 2015], icon: "🚗" },
    { brand: "Hyundai", model: "Solaris", years: [2013, 2014, 2015, 2016], icon: "🚙" },
    { brand: "Hyundai", model: "Elantra", years: [2013, 2014, 2015], icon: "🚘" },
    { brand: "Lada", model: "Vesta", years: [2016, 2017, 2018, 2019], icon: "🚗" },
    { brand: "Lada", model: "Granta", years: [2014, 2015, 2016, 2017], icon: "🚗" },
    { brand: "Renault", model: "Logan", years: [2013, 2014, 2015, 2016], icon: "🚙" },
    { brand: "Volkswagen", model: "Polo", years: [2013, 2014, 2015, 2016], icon: "🚘" },
    { brand: "Skoda", model: "Rapid", years: [2014, 2015, 2016, 2017], icon: "🚗" },
    { brand: "Toyota", model: "Corolla", years: [2013, 2014, 2015, 2016], icon: "🚘" },
    { brand: "Ford", model: "Focus", years: [2013, 2014, 2015, 2016], icon: "🚗" },
    { brand: "Nissan", model: "Qashqai", years: [2013, 2014, 2015, 2016], icon: "🚙" }
];


/* =========================================================
   БАЗА КЛИЕНТОВ
========================================================= */

const clients = [
    {
        name: "Алексей",
        type: "Обычный клиент",
        patience: 0.65,
        priceSensitivity: 0.55
    },
    {
        name: "Максим",
        type: "Экономный клиент",
        patience: 0.55,
        priceSensitivity: 0.85
    },
    {
        name: "Дмитрий",
        type: "Постоянный клиент",
        patience: 0.85,
        priceSensitivity: 0.45
    },
    {
        name: "Иван",
        type: "Требовательный клиент",
        patience: 0.45,
        priceSensitivity: 0.75
    },
    {
        name: "Сергей",
        type: "Автолюбитель",
        patience: 0.80,
        priceSensitivity: 0.35
    },
    {
        name: "Андрей",
        type: "Торгуется за каждую услугу",
        patience: 0.60,
        priceSensitivity: 0.95
    },
    {
        name: "Евгений",
        type: "Срочный клиент",
        patience: 0.35,
        priceSensitivity: 0.50
    },
    {
        name: "Николай",
        type: "Новый клиент",
        patience: 0.70,
        priceSensitivity: 0.60
    }
];


/* =========================================================
   БАЗА НЕИСПРАВНОСТЕЙ
========================================================= */

const problems = [

    {
        id: "hard_start",
        category: "engine",
        title: "Трудный запуск двигателя",

        complaints: [
            "Машина плохо заводится утром.",
            "После ночной стоянки приходится долго крутить стартер.",
            "На холодную двигатель запускается не с первого раза."
        ],

        causes: [
            {
                id: "battery",
                name: "🔋 Слабый аккумулятор",
                probability: 0.25
            },
            {
                id: "spark",
                name: "🔥 Износ свечей зажигания",
                probability: 0.35
            },
            {
                id: "fuel",
                name: "⛽ Недостаточное давление топлива",
                probability: 0.20
            },
            {
                id: "sensor",
                name: "💻 Неисправность датчика температуры",
                probability: 0.20
            }
        ],

        checks: {
            visual: {
                name: "👀 Визуальный осмотр",
                time: 5,
                equipment: 0,
                results: {
                    battery:
                        "Внешних повреждений аккумулятора не обнаружено.",
                    spark:
                        "Явных внешних повреждений нет.",
                    fuel:
                        "Следов утечки топлива нет.",
                    sensor:
                        "Визуально система выглядит исправной."
                }
            },

            battery: {
                name: "🔋 Проверить аккумулятор",
                time: 5,
                equipment: 1,
                results: {
                    battery:
                        "Напряжение при запуске заметно проседает. Аккумулятор требует дальнейшей проверки.",
                    spark:
                        "Напряжение аккумулятора в норме.",
                    fuel:
                        "Аккумулятор работает в штатном режиме.",
                    sensor:
                        "Напряжение аккумулятора в норме."
                }
            },

            spark: {
                name: "🔥 Проверить свечи",
                time: 10,
                equipment: 1,
                results: {
                    battery:
                        "Свечи имеют небольшой износ, но критических проблем не обнаружено.",
                    spark:
                        "Свечи имеют сильный износ. Электроды загрязнены.",
                    fuel:
                        "Свечи в удовлетворительном состоянии.",
                    sensor:
                        "Свечи имеют нормальное состояние."
                }
            },

            fuel: {
                name: "⛽ Проверить давление топлива",
                time: 20,
                equipment: 3,
                results: {
                    battery:
                        "Давление топлива соответствует норме.",
                    spark:
                        "Давление топлива соответствует норме.",
                    fuel:
                        "Давление топлива ниже нормы.",
                    sensor:
                        "Давление топлива соответствует норме."
                }
            },

            obd: {
                name: "💻 Сканирование OBD",
                time: 10,
                equipment: 2,
                results: {
                    battery:
                        "Критических кодов двигателя нет.",
                    spark:
                        "Критических кодов двигателя нет.",
                    fuel:
                        "Критических кодов двигателя нет.",
                    sensor:
                        "Обнаружен код, связанный с температурным датчиком."
                }
            }
        },

        repairs: {
            battery: {
                name: "Аккумулятор",
                partCost: 5500,
                workCost: 700,
                time: 20
            },
            spark: {
                name: "Комплект свечей зажигания",
                partCost: 2500,
                workCost: 1000,
                time: 30
            },
            fuel: {
                name: "Топливный насос",
                partCost: 6500,
                workCost: 2500,
                time: 90
            },
            sensor: {
                name: "Датчик температуры ОЖ",
                partCost: 1800,
                workCost: 900,
                time: 40
            }
        }
    },


    {
        id: "rough_idle",
        category: "engine",
        title: "Неровная работа двигателя",

        complaints: [
            "На холостом ходу двигатель работает неровно.",
            "Обороты иногда плавают.",
            "На светофоре двигатель начинает вибрировать."
        ],

        causes: [
            {
                id: "air",
                name: "💨 Подсос воздуха",
                probability: 0.30
            },
            {
                id: "throttle",
                name: "🔧 Загрязнение дроссельной заслонки",
                probability: 0.30
            },
            {
                id: "spark",
                name: "🔥 Пропуски зажигания",
                probability: 0.25
            },
            {
                id: "injector",
                name: "⛽ Загрязнение форсунки",
                probability: 0.15
            }
        ],

        checks: {
            visual: {
                name: "👀 Осмотр впуска",
                time: 5,
                equipment: 0,
                results: {
                    air:
                        "Обнаружены подозрительные места на вакуумном шланге.",
                    throttle:
                        "Внешних повреждений не обнаружено.",
                    spark:
                        "Визуально всё выглядит нормально.",
                    injector:
                        "Следов внешних повреждений нет."
                }
            },

            obd: {
                name: "💻 OBD и Live Data",
                time: 15,
                equipment: 2,
                results: {
                    air:
                        "Коррекции топлива значительно увеличены.",
                    throttle:
                        "Параметры дросселя требуют дополнительной проверки.",
                    spark:
                        "Обнаружены эпизодические пропуски воспламенения.",
                    injector:
                        "Параметры двигателя не дают однозначного ответа."
                }
            },

            throttle: {
                name: "🔧 Проверить дроссель",
                time: 20,
                equipment: 1,
                results: {
                    air:
                        "Дроссель загрязнён умеренно.",
                    throttle:
                        "Дроссельная заслонка сильно загрязнена.",
                    spark:
                        "Дроссель загрязнён незначительно.",
                    injector:
                        "Дроссель работает нормально."
                }
            },

            smoke: {
                name: "💨 Дымогенератор",
                time: 25,
                equipment: 4,
                results: {
                    air:
                        "Обнаружена утечка воздуха во впускной системе.",
                    throttle:
                        "Утечек воздуха не обнаружено.",
                    spark:
                        "Утечек воздуха не обнаружено.",
                    injector:
                        "Утечек воздуха не обнаружено."
                }
            }
        },

        repairs: {
            air: {
                name: "Устранение подсоса воздуха",
                partCost: 700,
                workCost: 1800,
                time: 50
            },
            throttle: {
                name: "Очистка дроссельной заслонки",
                partCost: 300,
                workCost: 1500,
                time: 60
            },
            spark: {
                name: "Ремонт системы зажигания",
                partCost: 2800,
                workCost: 1700,
                time: 60
            },
            injector: {
                name: "Чистка форсунки",
                partCost: 1200,
                workCost: 2200,
                time: 80
            }
        }
    },


    {
        id: "suspension_noise",
        category: "suspension",
        title: "Стук в передней подвеске",

        complaints: [
            "Спереди появился стук на кочках.",
            "На неровной дороге слышен глухой стук.",
            "При проезде лежачих полицейских что-то стучит."
        ],

        causes: [
            {
                id: "stabilizer",
                name: "🛞 Стойка стабилизатора",
                probability: 0.35
            },
            {
                id: "bushing",
                name: "🔩 Втулки стабилизатора",
                probability: 0.25
            },
            {
                id: "ball",
                name: "⚙️ Шаровая опора",
                probability: 0.20
            },
            {
                id: "shock",
                name: "🛞 Амортизатор",
                probability: 0.20
            }
        ],

        checks: {
            visual: {
                name: "👀 Визуальный осмотр",
                time: 10,
                equipment: 0,
                results: {
                    stabilizer:
                        "Визуально обнаружены следы износа стойки стабилизатора.",
                    bushing:
                        "Втулки имеют заметные следы старения.",
                    ball:
                        "Визуальных признаков критического износа нет.",
                    shock:
                        "Следов явной течи амортизатора нет."
                }
            },

            lift: {
                name: "🔧 Проверка на подъёмнике",
                time: 15,
                equipment: 1,
                results: {
                    stabilizer:
                        "Стойка стабилизатора имеет люфт.",
                    bushing:
                        "Втулки имеют люфт и деформацию.",
                    ball:
                        "Шаровая опора имеет небольшой люфт.",
                    shock:
                        "Крепления исправны."
                }
            },

            shock: {
                name: "🛞 Проверить амортизатор",
                time: 15,
                equipment: 1,
                results: {
                    stabilizer:
                        "Амортизатор работает удовлетворительно.",
                    bushing:
                        "Амортизатор работает нормально.",
                    ball:
                        "Амортизатор исправен.",
                    shock:
                        "Эффективность амортизатора снижена."
                }
            }
        },

        repairs: {
            stabilizer: {
                name: "Стойка стабилизатора",
                partCost: 1800,
                workCost: 1400,
                time: 45
            },
            bushing: {
                name: "Комплект втулок стабилизатора",
                partCost: 900,
                workCost: 1300,
                time: 40
            },
            ball: {
                name: "Шаровая опора",
                partCost: 2500,
                workCost: 1800,
                time: 60
            },
            shock: {
                name: "Амортизатор",
                partCost: 4500,
                workCost: 2200,
                time: 70
            }
        }
    },


    {
        id: "check_engine",
        category: "obd",
        title: "Загорелся Check Engine",

        complaints: [
            "Загорелся Check Engine.",
            "На панели появился жёлтый значок двигателя.",
            "Машина едет нормально, но горит ошибка двигателя."
        ],

        causes: [
            {
                id: "misfire",
                name: "🔥 Пропуски зажигания",
                probability: 0.30
            },
            {
                id: "lambda",
                name: "💻 Лямбда-зонд",
                probability: 0.25
            },
            {
                id: "maf",
                name: "💨 Датчик расхода воздуха",
                probability: 0.20
            },
            {
                id: "evap",
                name: "⛽ Система EVAP",
                probability: 0.25
            }
        ],

        checks: {
            obd: {
                name: "💻 Сканирование OBD-II",
                time: 10,
                equipment: 2,
                results: {
                    misfire:
                        "Обнаружен код P0301 — пропуски воспламенения цилиндра №1.",
                    lambda:
                        "Обнаружен код, связанный с работой кислородного датчика.",
                    maf:
                        "Параметры расходомера воздуха выходят за ожидаемый диапазон.",
                    evap:
                        "Обнаружен код, связанный с системой EVAP."
                }
            },

            live: {
                name: "📊 Проверить Live Data",
                time: 15,
                equipment: 2,
                results: {
                    misfire:
                        "Параметры указывают на нестабильность работы одного цилиндра.",
                    lambda:
                        "Сигнал кислородного датчика работает нестабильно.",
                    maf:
                        "Показания расхода воздуха отличаются от ожидаемых.",
                    evap:
                        "Параметры двигателя в целом стабильны."
                }
            },

            visual: {
                name: "👀 Осмотр двигателя",
                time: 10,
                equipment: 0,
                results: {
                    misfire:
                        "Визуально явных повреждений нет.",
                    lambda:
                        "Проводка датчика выглядит нормально.",
                    maf:
                        "Разъём расходомера установлен.",
                    evap:
                        "Явных повреждений шлангов не обнаружено."
                }
            }
        },

        repairs: {
            misfire: {
                name: "Ремонт системы зажигания",
                partCost: 3200,
                workCost: 1800,
                time: 60
            },
            lambda: {
                name: "Кислородный датчик",
                partCost: 4200,
                workCost: 1500,
                time: 50
            },
            maf: {
                name: "Датчик расхода воздуха",
                partCost: 5000,
                workCost: 1600,
                time: 45
            },
            evap: {
                name: "Ремонт системы EVAP",
                partCost: 1500,
                workCost: 1800,
                time: 60
            }
        }
    },


    {
        id: "overheat",
        category: "cooling",
        title: "Перегрев двигателя",

        complaints: [
            "Температура двигателя стала выше обычного.",
            "В пробке машина начинает перегреваться.",
            "Из-под капота идёт горячий воздух."
        ],

        causes: [
            {
                id: "coolant",
                name: "💧 Низкий уровень охлаждающей жидкости",
                probability: 0.30
            },
            {
                id: "thermostat",
                name: "🌡️ Неисправен термостат",
                probability: 0.25
            },
            {
                id: "fan",
                name: "🌀 Не работает вентилятор",
                probability: 0.25
            },
            {
                id: "radiator",
                name: "❄️ Забит радиатор",
                probability: 0.20
            }
        ],

        checks: {
            coolant: {
                name: "💧 Проверить уровень ОЖ",
                time: 5,
                equipment: 0,
                results: {
                    coolant:
                        "Уровень охлаждающей жидкости значительно ниже нормы.",
                    thermostat:
                        "Уровень ОЖ в норме.",
                    fan:
                        "Уровень ОЖ в норме.",
                    radiator:
                        "Уровень ОЖ немного ниже нормы."
                }
            },

            temperature: {
                name: "🌡️ Проверить температуру",
                time: 10,
                equipment: 1,
                results: {
                    coolant:
                        "Температура двигателя повышена.",
                    thermostat:
                        "Двигатель перегревается из-за неправильной циркуляции.",
                    fan:
                        "Температура резко растёт при остановке.",
                    radiator:
                        "Температура повышена при нагрузке."
                }
            },

            fan: {
                name: "🌀 Проверить вентилятор",
                time: 10,
                equipment: 1,
                results: {
                    coolant:
                        "Вентилятор включается штатно.",
                    thermostat:
                        "Вентилятор работает.",
                    fan:
                        "Вентилятор не включается при достижении температуры.",
                    radiator:
                        "Вентилятор работает."
                }
            },

            radiator: {
                name: "❄️ Проверить радиатор",
                time: 15,
                equipment: 1,
                results: {
                    coolant:
                        "Радиатор в удовлетворительном состоянии.",
                    thermostat:
                        "Радиатор прогревается неравномерно.",
                    fan:
                        "Радиатор исправен.",
                    radiator:
                        "Проходимость радиатора снижена."
                }
            }
        },

        repairs: {
            coolant: {
                name: "Устранение утечки и замена ОЖ",
                partCost: 1800,
                workCost: 1700,
                time: 60
            },
            thermostat: {
                name: "Термостат",
                partCost: 2600,
                workCost: 1800,
                time: 70
            },
            fan: {
                name: "Вентилятор охлаждения",
                partCost: 4800,
                workCost: 1800,
                time: 60
            },
            radiator: {
                name: "Радиатор охлаждения",
                partCost: 6500,
                workCost: 2500,
                time: 100
            }
        }
    },


    {
        id: "braking_noise",
        category: "brakes",
        title: "Шум при торможении",

        complaints: [
            "При торможении появился скрип.",
            "Тормоза начали издавать неприятный звук.",
            "При торможении слышен металлический шум."
        ],

        causes: [
            {
                id: "pads",
                name: "🛑 Износ тормозных колодок",
                probability: 0.45
            },
            {
                id: "disc",
                name: "⚙️ Износ тормозного диска",
                probability: 0.25
            },
            {
                id: "caliper",
                name: "🔧 Закисший суппорт",
                probability: 0.15
            },
            {
                id: "debris",
                name: "🪨 Посторонний предмет",
                probability: 0.15
            }
        ],

        checks: {
            visual: {
                name: "👀 Осмотр тормозов",
                time: 10,
                equipment: 0,
                results: {
                    pads:
                        "Толщина колодок близка к минимально допустимой.",
                    disc:
                        "На диске заметна выраженная выработка.",
                    caliper:
                        "Суппорт имеет признаки загрязнения.",
                    debris:
                        "Обнаружены следы постороннего предмета."
                }
            },

            brake: {
                name: "🛑 Проверить тормозной механизм",
                time: 15,
                equipment: 1,
                results: {
                    pads:
                        "Колодки изношены неравномерно.",
                    disc:
                        "Рабочая поверхность диска имеет глубокую выработку.",
                    caliper:
                        "Суппорт работает с повышенным сопротивлением.",
                    debris:
                        "Механизм исправен."
                }
            }
        },

        repairs: {
            pads: {
                name: "Комплект тормозных колодок",
                partCost: 2800,
                workCost: 1400,
                time: 45
            },
            disc: {
                name: "Тормозные диски",
                partCost: 5200,
                workCost: 1800,
                time: 70
            },
            caliper: {
                name: "Обслуживание суппорта",
                partCost: 1000,
                workCost: 2200,
                time: 70
            },
            debris: {
                name: "Удаление постороннего предмета",
                partCost: 0,
                workCost: 800,
                time: 20
            }
        }
    }
];


/* =========================================================
   БАЗА ЗНАНИЙ
========================================================= */

const knowledgeBase = {

    engine: [
        ["🔥 Четырёхтактный двигатель",
            "Большинство бензиновых двигателей работают по циклу: впуск, сжатие, рабочий ход и выпуск."],

        ["🔥 Система зажигания",
            "Для воспламенения смеси необходимы свечи и система, создающая высокое напряжение."],

        ["🔥 Пропуски воспламенения",
            "Пропуски могут быть вызваны свечами, катушками, форсунками, подсосом воздуха, компрессией и другими причинами."],

        ["🔥 Компрессия",
            "Низкая компрессия может указывать на проблемы с клапанами, поршневой группой или прокладкой ГБЦ."],

        ["🛢️ Моторное масло",
            "Масло смазывает детали двигателя, отводит часть тепла и помогает защищать поверхности от износа."],

        ["⛓️ ГРМ",
            "Газораспределительный механизм синхронизирует движение поршней и клапанов."],

        ["🌡️ Перегрев",
            "Причиной перегрева могут быть низкий уровень ОЖ, термостат, вентилятор, радиатор, насос и другие элементы."]
    ],

    electrical: [
        ["🔋 Аккумулятор",
            "Аккумулятор обеспечивает питание электрооборудования и большой ток, необходимый стартеру."],

        ["⚡ Генератор",
            "Генератор заряжает аккумулятор во время работы двигателя и обеспечивает электрооборудование."],

        ["⚡ Стартер",
            "Стартер проворачивает коленчатый вал при запуске двигателя."],

        ["🔌 Масса",
            "Плохое соединение с массой может вызывать множество странных электрических неисправностей."],

        ["🧪 Мультиметр",
            "Мультиметром можно измерять напряжение, сопротивление и ток в зависимости от режима и схемы подключения."],

        ["🧯 Предохранители",
            "Предохранитель защищает электрическую цепь от чрезмерного тока."]
    ],

    obd: [
        ["💻 OBD-II",
            "OBD-II позволяет считывать диагностические коды и параметры электронных систем."],

        ["📟 Коды P0xxx",
            "Код неисправности помогает сузить область поиска, но не всегда означает неисправность конкретной детали."],

        ["📊 Live Data",
            "Поток текущих параметров двигателя помогает сравнивать фактическую работу систем с ожидаемой."],

        ["🧊 Freeze Frame",
            "Freeze Frame может сохранить параметры автомобиля в момент возникновения ошибки."],

        ["📟 P0301",
            "P0301 указывает на обнаруженные пропуски воспламенения в цилиндре №1. Причину необходимо подтверждать дополнительными проверками."],

        ["📟 Коррекции топлива",
            "Коррекции помогают оценивать, как система управления двигателем компенсирует отклонения состава смеси."]
    ],

    fuel: [
        ["⛽ Топливная система",
            "Система должна обеспечивать необходимое количество топлива при требуемом давлении."],

        ["⛽ Топливный насос",
            "Насос создаёт давление и обеспечивает подачу топлива к двигателю."],

        ["💉 Форсунки",
            "Форсунки дозируют топливо и распыляют его в соответствии с командами системы управления."],

        ["⛽ Давление топлива",
            "Пониженное давление может привести к плохому запуску, провалам и потере мощности."]
    ],

    suspension: [
        ["🛞 Амортизатор",
            "Амортизатор контролирует колебания подвески и помогает колесу сохранять контакт с дорогой."],

        ["🔩 Сайлентблок",
            "Сайлентблоки соединяют элементы подвески и гасят вибрации."],

        ["🛞 Стойка стабилизатора",
            "Связь стабилизатора с подвеской. Износ часто проявляется стуком на неровностях."],

        ["⚙️ Шаровая опора",
            "Шаровая позволяет элементам подвески двигаться относительно друг друга. Критический люфт опасен."]
    ],

    brakes: [
        ["🛑 Тормозные колодки",
            "Колодки создают трение о тормозной диск или барабан."],

        ["⚙️ Тормозной диск",
            "Диск работает вместе с колодками. Выработка и перегрев могут ухудшать работу тормозов."],

        ["🔧 Суппорт",
            "Суппорт прижимает колодки к диску. Его закисание может привести к неравномерному износу и перегреву."],

        ["🛑 ABS",
            "ABS предотвращает длительную блокировку колёс при торможении."]
    ],

    transmission: [
        ["⚙️ АКПП",
            "Автоматическая коробка передач использует гидравлическую и электронную системы управления."],

        ["⚙️ МКПП",
            "В механической коробке водитель самостоятельно выбирает передаточное отношение."],

        ["🔧 Сцепление",
            "Сцепление позволяет плавно соединять и разъединять двигатель и трансмиссию."]
    ],

    cooling: [
        ["💧 Охлаждающая жидкость",
            "ОЖ переносит тепло от двигателя к радиатору."],

        ["🌡️ Термостат",
            "Термостат регулирует циркуляцию охлаждающей жидкости и помогает двигателю выйти на рабочую температуру."],

        ["🌀 Вентилятор",
            "Вентилятор помогает охлаждать радиатор, особенно при небольшой скорости движения или остановке."]
    ],

    climate: [
        ["❄️ Кондиционер",
            "Система кондиционирования переносит тепло из салона наружу с помощью хладагента и компрессора."],

        ["❄️ Компрессор кондиционера",
            "Компрессор обеспечивает циркуляцию хладагента по системе."]
    ]
};


/* =========================================================
   СОСТОЯНИЕ ИГРЫ
========================================================= */


const SAVE_KEY = "put_master_v06";

const defaultState = {
    money: 15000,
    reputation: 0,
    level: 1,
    xp: 0,
    day: 1,
    time: 480,
    energy: 100,
    equipment: 100,
    garage: { level: 1, posts: 1 },
    currentOrder: null,
    history: [],
    lastProblemId: null,
    premium: 0,
    stats: { completed: 0, failed: 0, revenue: 0 }
};

let state = JSON.parse(localStorage.getItem(SAVE_KEY) || "null") || structuredClone(defaultState);

const $ = id => document.getElementById(id);
const money = value => new Intl.NumberFormat("ru-RU").format(Math.round(value)) + " ₽";
const random = arr => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function save(){ localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }

function timeText(minutes){
    return String(Math.floor(minutes / 60)).padStart(2,"0") + ":" +
           String(minutes % 60).padStart(2,"0");
}

function xpNeed(){ return 100 + (state.level - 1) * 50; }

function addXP(amount){
    state.xp += amount;
    while(state.xp >= xpNeed()){
        state.xp -= xpNeed();
        state.level++;
        state.reputation += 3;
        showToast(`🎉 Новый уровень: ${state.level}`);
    }
}

function addRep(amount){
    state.reputation = Math.max(-100, Math.min(100, state.reputation + amount));
}

function spendEnergy(amount){
    if(state.energy < amount){
        showToast("⚡ Недостаточно энергии");
        return false;
    }
    state.energy -= amount;
    return true;
}

function spendEquipment(amount){
    if(state.equipment < amount){
        showToast("🧰 Недостаточно ресурса оборудования");
        return false;
    }
    state.equipment -= amount;
    return true;
}

function addTime(minutes){
    state.time += minutes;
    if(state.time >= 600){
        state.time = 600;
        showToast("⏰ Рабочий день закончился");
    }
}

function generateOrder(){
    let problem, attempts = 0;
    do {
        problem = random(problems);
        attempts++;
    } while(problem.id === state.lastProblemId && attempts < 10);

    const car = random(cars);
    const client = random(clients);

    // Двигатель теперь является частью заказа и влияет на трудоёмкость.
    const engines = [
        {type:"R4", title:"R4 1.6", mult:1.00},
        {type:"R4", title:"R4 2.0 Turbo", mult:1.12},
        {type:"V6", title:"V6 3.0", mult:1.30},
        {type:"V8", title:"V8 4.4", mult:1.55},
        {type:"V10", title:"V10 5.2", mult:1.80},
        {type:"V12", title:"V12 6.0", mult:2.10},
        {type:"BOXER", title:"Boxer 2.5", mult:1.25}
    ];
    const engine = random(engines);

    const year = random(car.years);
    const mileage = randomInt(70000, 260000);
    const complaint = random(problem.complaints);
    const correctCause = randomWeighted(problem.causes);

    state.currentOrder = {
        id: Date.now(),
        car: {...car, year, mileage},
        client,
        engine,
        problem,
        complaint,
        correctCause: correctCause.id,
        diagnosisPrice: randomInt(700, 1500),
        history: [],
        selectedCause: null,
        repair: null,
        part: null,
        laborHours: 0,
        quotedPrice: 0,
        agreed: false,
        completed: false,
        diagnosisPaid: false
    };

    state.lastProblemId = problem.id;
    save();
}

function randomWeighted(items){
    const total = items.reduce((s,x)=>s+x.probability,0);
    let n = Math.random()*total;
    for(const item of items){
        n -= item.probability;
        if(n <= 0) return item;
    }
    return items[0];
}

function openModal(html){
    $("modalContent").innerHTML = html;
    $("modal").classList.add("show");
}
function closeModal(){ $("modal").classList.remove("show"); }

function showToast(text){
    const toast = $("toast");
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(()=>toast.classList.remove("show"), 2400);
}

function render(){
    const order = state.currentOrder;

    $("money").textContent = money(state.money);
    $("reputation").textContent = state.reputation;
    $("level").textContent = state.level;
    $("xp").textContent = state.xp;
    $("xpMax").textContent = xpNeed();
    $("energy").textContent = state.energy;
    $("energyMax").textContent = 100;
    $("garageLevel").textContent = state.garage.level;
    $("posts").textContent = state.garage.posts;
    $("tools").textContent = `Ресурс ${state.equipment}%`;
    $("mechanics").textContent = "1";
    $("goalMoney").textContent = `${money(Math.min(state.money,25000))} / 25 000 ₽`;
    $("goalXp").textContent = `${state.xp} / ${xpNeed()}`;

    if(order){
        $("carName").textContent = `${order.car.brand} ${order.car.model}`;
        $("problem").textContent = `🗣️ «${order.complaint}»`;
        $("engineInfo").textContent = `${order.engine.title} · ${order.car.mileage.toLocaleString("ru-RU")} км`;
        $("clientInfo").textContent = `👤 ${order.client.name} · ${order.client.type}`;
        $("orderStatus").textContent = order.completed ? "Завершён" :
            order.agreed ? "Ремонт согласован" :
            order.selectedCause ? "Согласование" : "Диагностика";
        $("orderHint").textContent = order.completed
            ? "Автомобиль готов. Можно принимать следующего клиента."
            : order.selectedCause
                ? "Диагноз установлен. Теперь согласуй ремонт."
                : "Изучи жалобу и проведи необходимые проверки.";
    }

    renderGarageScene();
}

function renderGarageScene(){
    const order = state.currentOrder;
    const box = document.querySelector(".garage-image");
    if(!box) return;

    const carName = order ? `${order.car.brand} ${order.car.model}` : "Автомобиль клиента";
    box.innerHTML = `
      <div class="garage-scene">
        <div class="garage-ceiling-light"></div>
        <div class="garage-sign">🔧 ПУТЬ МАСТЕРА</div>
        <div class="garage-shelf">🧰 🔩 🛢️ 🔧</div>
        <div class="garage-lift lift-left"></div><div class="garage-lift lift-right"></div>
        <div class="garage-car visual-car" onclick="inspectCar()">
          <div class="car-shadow"></div>
          <div class="car-body">
            <div class="car-roof"></div>
            <div class="car-window front-window"></div>
            <div class="car-window rear-window"></div>
            <div class="car-hood"></div>
            <div class="car-headlight left-headlight"></div>
            <div class="car-headlight right-headlight"></div>
            <div class="car-grille"></div>
            <div class="car-wheel left-wheel"></div>
            <div class="car-wheel right-wheel"></div>
          </div>
          <div class="car-nameplate">${carName}</div>
        </div>
        <button class="garage-hotspot hotspot-tools" onclick="openTools()">🧰<span>Инструменты</span></button>
        <button class="garage-hotspot hotspot-obd" onclick="openGarageOBD()">💻<span>OBD</span></button>
        <button class="garage-hotspot hotspot-parts" onclick="openGarageParts()">📦<span>Склад</span></button>
        <button class="garage-hotspot hotspot-knowledge" onclick="openKnowledgeMenu()">📚<span>База знаний</span></button>
        <div class="garage-hint">👆 Нажми на автомобиль для осмотра</div>
      </div>`;
}

function inspectCar(){
    const o = state.currentOrder;
    if(!o) return showToast("Нет автомобиля клиента");
    openModal(`
      <h2>🔍 Первичный осмотр</h2>
      <div class="client-card">
        <b>${o.client.name}</b> · ${o.client.type}
        <div class="complaint">🗣️ «${o.complaint}»</div>
      </div>
      <div class="vehicle-card">
        <div class="big-car">${o.car.icon}</div>
        <div><h3>${o.car.brand} ${o.car.model}</h3>
        <p>${o.car.year} · ${o.engine.title} · ${o.car.mileage.toLocaleString("ru-RU")} км</p></div>
      </div>
      <p>Визуальный осмотр бесплатен и помогает определить, какие проверки нужны дальше.</p>
      <div class="inspection-grid">
        ${[
          ["engine","⚙️","Двигатель","Шланги, разъёмы, течи"],
          ["battery","🔋","Аккумулятор","Корпус и клеммы"],
          ["brakes","🛑","Тормоза","Диски и колодки"],
          ["suspension","🛞","Подвеска","Пыльники и люфты"],
          ["body","🚘","Кузов","Следы повреждений"],
          ["interior","🪑","Салон","Панель и органы управления"]
        ].map(x=>`<button class="inspection-button" onclick="inspectArea('${x[0]}')"><span>${x[1]}</span><b>${x[2]}</b><small>${x[3]}</small></button>`).join("")}
      </div>
      <button class="action-button" onclick="openDiagnosis()">🔍 Перейти к диагностике</button>`);
}

function inspectArea(area){
    const messages = {
      engine:["⚙️ Двигатель","Проверены видимые элементы двигателя, шланги и разъёмы. Для точной причины нужны дополнительные проверки."],
      battery:["🔋 Аккумулятор","Визуально корпус без явных повреждений. Состояние нужно подтвердить измерением."],
      brakes:["🛑 Тормоза","Внешне критических повреждений не видно. Для оценки износа нужны дополнительные проверки."],
      suspension:["🛞 Подвеска","Проверены доступные элементы. Часть неисправностей выявляется только на подъёмнике."],
      body:["🚘 Кузов","Явных повреждений в рамках первичного осмотра не обнаружено."],
      interior:["🪑 Салон","Проверена панель приборов и органы управления. Жалоба клиента записана."]
    };
    const m=messages[area];
    openModal(`<h2>${m[0]}</h2><div class="diagnosis-result">${m[1]}</div><button class="action-button" onclick="inspectCar()">← Назад</button>`);
}

function openDiagnosis(){
    const o=state.currentOrder;
    const checks=o.problem.checks;
    openModal(`
      <h2>🔍 Диагностика</h2>
      <div class="client-card">
        <b>${o.client.name}</b> · ${o.client.type}<br>
        🗣️ «${o.complaint}»
      </div>
      <div class="vehicle-card">
        <b>${o.car.brand} ${o.car.model}</b>
        <span>${o.engine.title} · ${o.car.mileage.toLocaleString("ru-RU")} км</span>
      </div>
      <div class="stat-row"><span>⚡ Энергия</span><b>${state.energy}/100</b></div>
      <div class="stat-row"><span>🧰 Оборудование</span><b>${state.equipment}%</b></div>
      <div class="stat-row"><span>💰 Диагностика</span><b>${money(o.diagnosisPrice)}</b></div>
      <h3>Выбери проверку:</h3>
      <div class="diagnosis-list">
        ${Object.keys(checks).map(key=>{
          const c=checks[key], used=o.history.some(h=>h.key===key);
          return `<button class="diagnosis-button" ${used?"disabled":""} onclick="performCheck('${key}')">
            ${c.name}<small>⏱ ${c.time} мин · ⚡ −${Math.max(1,Math.ceil(c.time/5))} · 🧰 −${c.equipment}</small>
          </button>`;
        }).join("")}
      </div>
      ${renderHistory(o)}
      <button class="action-button" onclick="openAnalysis()">🧠 Анализировать результаты</button>`);
}

function performCheck(key){
    const o=state.currentOrder, c=o.problem.checks[key];
    if(!c || o.history.some(h=>h.key===key)) return;
    const energy=Math.max(1,Math.ceil(c.time/5));
    if(!spendEnergy(energy) || !spendEquipment(c.equipment)) return;
    addTime(c.time);
    const result=c.results[o.correctCause] || "Результат не дал однозначного ответа.";
    o.history.push({key,name:c.name,result,time:c.time,equipment:c.equipment,energy});
    save(); openDiagnosis(); render();
}

function renderHistory(o){
    if(!o.history.length) return `<div class="diagnosis-result">📋 Проверки ещё не проводились.</div>`;
    return `<div class="diagnosis-result"><b>📋 История</b>${o.history.map((h,i)=>
      `<div class="history-item"><b>${i+1}. ${h.name}</b><small>⏱ −${h.time} мин · ⚡ −${h.energy} · 🧰 −${h.equipment}</small><p>${h.result}</p></div>`
    ).join("")}</div>`;
}

function openAnalysis(){
    const o=state.currentOrder;
    if(!o.history.length) return showToast("Сначала проведи хотя бы одну проверку");
    openModal(`
      <h2>🧠 Анализ неисправности</h2>
      <div class="client-card">🗣️ «${o.complaint}»</div>
      ${renderHistory(o)}
      <h3>Какая причина наиболее вероятна?</h3>
      <div class="diagnosis-list">${o.problem.causes.map(c=>
        `<button class="diagnosis-button" onclick="chooseDiagnosis('${c.id}')">${c.name}</button>`).join("")}</div>
      <button class="secondary-btn" onclick="openKnowledgeMenu()">📚 Если сомневаешься — изучи базу знаний</button>`);
}

function chooseDiagnosis(id){
    const o=state.currentOrder;
    if(id!==o.correctCause){
        addRep(-2); addXP(5); state.stats.failed++;
        save();
        openModal(`<h2>❌ Диагноз не подтверждён</h2>
          <div class="diagnosis-result">Нужны дополнительные проверки. Репутация −2 · XP +5.</div>
          <button class="action-button" onclick="openDiagnosis()">🔍 Продолжить диагностику</button>`);
        render(); return;
    }
    o.selectedCause=id;
    addXP(20);
    save(); openPartsAgreement();
}

const partOptions = [
    {id:"original",name:"🟢 Оригинальная",mult:1.65,quality:100,reputation:2},
    {id:"analogue",name:"🔵 Аналог",mult:1.00,quality:85,reputation:1},
    {id:"refurbished",name:"🟡 Восстановленная",mult:.72,quality:72,reputation:0},
    {id:"used",name:"⚫ Б/у",mult:.48,quality:58,reputation:-1}
];

function repairData(){
    const o=state.currentOrder;
    return o.problem.repairs[o.selectedCause];
}

function calcLaborHours(repair){
    const base=Math.max(0.5, repair.time/60);
    return +(base * oEngineMult()).toFixed(2);
}
function oEngineMult(){ return state.currentOrder.engine.mult; }

function openPartsAgreement(){
    const o=state.currentOrder, r=repairData(), hours=calcLaborHours(r);
    o.laborHours=hours;
    const rate=2000 + (state.level-1)*250;
    o.normRate=rate;
    openModal(`
      <h2>📋 Смета и согласование</h2>
      <div class="client-card"><b>${o.client.name}</b> · ${o.client.type}<div class="complaint">🗣️ «${o.complaint}»</div></div>
      <div class="stat-row"><span>Автомобиль</span><b>${o.car.brand} ${o.car.model}</b></div>
      <div class="stat-row"><span>Двигатель</span><b>${o.engine.title}</b></div>
      <div class="stat-row"><span>Норма-час</span><b>${money(rate)}</b></div>
      <div class="stat-row"><span>Работа</span><b>${hours} н/ч · ${money(hours*rate)}</b></div>
      <h3>🔩 Выбери деталь</h3>
      <div class="part-grid">${partOptions.map(p=>`
        <button class="part-card" onclick="selectPart('${p.id}')">
          <b>${p.name}</b><span>${money(r.partCost*p.mult)}</span>
          <small>Качество ${p.quality}% · Репутация ${p.reputation>=0?"+":""}${p.reputation}</small>
        </button>`).join("")}</div>
      <div class="diagnosis-result">Клиент увидит выбранную деталь и итоговую цену перед согласием.</div>`);
}

function selectPart(partId){
    const o=state.currentOrder, r=repairData(), p=partOptions.find(x=>x.id===partId);
    const partCost=Math.round(r.partCost*p.mult);
    const labor=Math.round(o.laborHours*o.normRate);
    const cost=partCost+labor;
    o.part={...p, cost:partCost};
    o.repair={...r, cost, labor, partCost};
    o.quotedPrice=cost;
    openPriceAgreement();
}

function openPriceAgreement(){
    const o=state.currentOrder;
    const r=o.repair;
    openModal(`
      <h2>🤝 Цена для клиента</h2>
      <div class="stat-row"><span>🔩 Деталь</span><b>${o.part.name}</b></div>
      <div class="stat-row"><span>Запчасть</span><b>${money(o.part.cost)}</b></div>
      <div class="stat-row"><span>Работа</span><b>${o.laborHours} н/ч · ${money(r.labor)}</b></div>
      <div class="stat-row"><span>Себестоимость</span><b>${money(r.cost)}</b></div>
      <label>Цена для клиента</label>
      <input id="repairPrice" class="price-input" type="number" min="${r.cost}" step="100" value="${r.cost+Math.round(r.cost*.15)}">
      <div id="pricePreview" class="diagnosis-result">💡 Небольшая наценка обычно воспринимается спокойнее.</div>
      <button class="action-button" onclick="offerRepair()">🤝 Предложить клиенту</button>`);
    $("repairPrice").addEventListener("input", updatePricePreview);
}

function updatePricePreview(){
    const o=state.currentOrder, r=o.repair;
    const price=Number($("repairPrice").value||0);
    const markup=r.cost ? (price-r.cost)/r.cost : 0;
    const chance=Math.max(.05,Math.min(.98,.94-markup*o.client.priceSensitivity));
    $("pricePreview").textContent=`Наценка: ${Math.round(markup*100)}% · Вероятность согласия: ${Math.round(chance*100)}%`;
}

function offerRepair(){
    const o=state.currentOrder, r=o.repair;
    const price=Number($("repairPrice").value);
    if(!price || price<r.cost) return showToast("Цена ниже себестоимости");
    const markup=(price-r.cost)/r.cost;
    const chance=Math.max(.05,Math.min(.98,.94-markup*o.client.priceSensitivity + state.reputation*.001));
    o.quotedPrice=price;
    const accepted=Math.random()<chance;
    if(!accepted){
        state.money+=o.diagnosisPrice;
        o.diagnosisPaid=true; o.completed=true;
        state.stats.failed++; state.history.push({car:`${o.car.brand} ${o.car.model}`,problem:o.problem.title,profit:o.diagnosisPrice,day:state.day});
        addXP(15); addRep(-1); save(); render();
        return openModal(`<h2>❌ Клиент отказался</h2>
          <p>Цена показалась клиенту слишком высокой.</p>
          <div class="diagnosis-result">💰 Диагностика оплачена: ${money(o.diagnosisPrice)}</div>
          <button class="action-button" onclick="newOrder()">🚗 Следующий клиент</button>`);
    }
    o.agreed=true;
    save();
    openModal(`<h2>✅ Клиент согласен</h2>
      <div class="stat-row"><span>Итоговая цена</span><b>${money(price)}</b></div>
      <div class="stat-row"><span>Деталь</span><b>${o.part.name}</b></div>
      <div class="stat-row"><span>Работа</span><b>${o.laborHours} н/ч</b></div>
      <button class="action-button" onclick="performRepair()">🔧 Начать ремонт</button>`);
}

function performRepair(){
    const o=state.currentOrder, r=o.repair;
    const energy=Math.max(5,Math.ceil(r.time/4));
    if(!spendEnergy(energy) || !spendEquipment(2)) return;

    addTime(r.time);
    state.money += o.quotedPrice;
    state.stats.revenue += o.quotedPrice;
    addXP(30); addRep(8 + o.part.reputation);
    o.completed=true; o.diagnosisPaid=true;
    state.stats.completed++;
    state.history.push({car:`${o.car.brand} ${o.car.model}`,problem:o.problem.title,profit:o.quotedPrice-r.cost,day:state.day});
    save(); render();

    openModal(`<h2>🔧 Ремонт выполнен</h2>
      <div class="client-card"><b>${o.car.brand} ${o.car.model}</b> · ${o.engine.title}<div class="complaint">🗣️ «${o.complaint}»</div></div>
      <div class="stat-row"><span>🔩 Деталь</span><b>${o.part.name}</b></div>
      <div class="stat-row"><span>⏱️ Работа</span><b>${o.laborHours} н/ч · ${r.time} мин</b></div>
      <div class="stat-row"><span>💰 Клиент заплатил</span><b>+${money(o.quotedPrice)}</b></div>
      <div class="stat-row"><span>📈 Прибыль</span><b>+${money(o.quotedPrice-r.cost)}</b></div>
      <div class="stat-row"><span>⚡ Энергия</span><b>−${energy}</b></div>
      <button class="action-button" onclick="finishRepairCheck()">🧪 Проверить результат</button>`);
}

function finishRepairCheck(){
    const o=state.currentOrder;
    openModal(`<h2>🧪 Контрольная проверка</h2>
      <div class="diagnosis-result">✅ Жалоба клиента устранена.<br><br>Автомобиль можно выдавать клиенту.</div>
      <button class="action-button" onclick="newOrder()">🚗 Следующий клиент</button>`);
}

function newOrder(){
    state.day++;
    state.time=480;
    state.energy=Math.min(100,state.energy+35);
    state.equipment=Math.min(100,state.equipment+5);
    generateOrder(); render(); closeModal(); showToast("🚗 Новый клиент приехал!");
}

function openKnowledgeMenu(){
    if(typeof KNOWLEDGE_BASE !== "undefined"){
        openModal(`<h2>📚 База знаний</h2><p>Изучай устройство автомобиля. Эти знания будут использоваться в диагностике и ремонтах.</p>
        ${Object.keys(KNOWLEDGE_BASE).map(k=>`<div class="knowledge-category" onclick="openKnowledge('${k}')"><h3>${KNOWLEDGE_BASE[k].title}</h3><span>${KNOWLEDGE_BASE[k].items.length} тем</span></div>`).join("")}`);
    } else {
        openModal("<h2>📚 База знаний</h2><p>Файл knowledge.js не найден.</p>");
    }
}
function openKnowledge(key){
    const c=KNOWLEDGE_BASE[key];
    openModal(`<h2>${c.title}</h2>${c.items.map(x=>`<div class="knowledge-item"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("")}<button class="action-button" onclick="openKnowledgeMenu()">← Все разделы</button>`);
}

function openTraining(){ openKnowledgeMenu(); }

function openTools(){
    openModal(`<h2>🧰 Инструменты</h2>
      <div class="stat-row"><span>Ресурс оборудования</span><b>${state.equipment}%</b></div>
      <div class="diagnosis-result">Доступно: базовый набор, OBD-II. Дальше появятся подъёмник, мультиметр, дымогенератор, осциллограф, тестер давления, эндоскоп и профессиональный сканер.</div>`);
}
function openCars(){
    openModal(`<h2>🚘 Автомобили</h2><p>Сейчас автомобили принадлежат клиентам.</p>
      <div class="diagnosis-result">В будущем появятся собственные автомобили, обслуживание, тюнинг и коллекция машин.</div>`);
}
function openService(){
    openModal(`<h2>🏢 Развитие СТО</h2>
      <div class="stat-row"><span>Уровень</span><b>${state.garage.level}</b></div>
      <div class="stat-row"><span>Посты</span><b>${state.garage.posts}</b></div>
      <div class="stat-row"><span>Норма-час</span><b>${money(2000+(state.level-1)*250)}</b></div>
      <p>Следующие этапы: второй пост → подъёмник → склад → сотрудники → диагностический пост → большая СТО → сеть.</p>`);
}
function openGarageOBD(){ openDiagnosis(); }
function openGarageParts(){ openPartsAgreement(); }

function upgradeGarage(){
    const cost=state.garage.level*12000;
    if(state.money<cost) return showToast(`Нужно ${money(cost)}`);
    state.money-=cost; state.garage.level++; state.garage.posts++;
    save(); render(); showToast("🏢 СТО улучшена!");
}

$("diagnoseBtn").onclick=inspectCar;
$("trainingButton")?.addEventListener("click",openTraining);
$("toolsButton")?.addEventListener("click",openTools);
$("carsButton")?.addEventListener("click",openCars);
$("serviceButton")?.addEventListener("click",openService);
$("upgradeGarageBtn")?.addEventListener("click",upgradeGarage);
$("closeModal").onclick=closeModal;
$("modal").onclick=e=>{if(e.target.id==="modal")closeModal();};

if(!state.currentOrder || state.currentOrder.completed) generateOrder();
render();
save();
