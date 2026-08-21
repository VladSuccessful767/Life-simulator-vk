const SAVE_KEY = "auto_service_v04";

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

    ,{
        id: "pulling_side", category: "suspension", title: "Автомобиль уводит в сторону",
        complaints: [
            "После отпускания руля автомобиль начинает уходить вправо.",
            "Машину тянет в сторону на ровной дороге.",
            "После ремонта подвески руль стоит неровно и автомобиль уводит в сторону."
        ],
        causes: [
            { id: "alignment", name: "📐 Нарушены углы установки колёс", probability: 0.45 },
            { id: "pressure", name: "🛞 Разное давление в шинах", probability: 0.25 },
            { id: "suspension", name: "⚙️ Люфт элемента подвески", probability: 0.20 },
            { id: "tire", name: "🛞 Неравномерный износ / проблема шины", probability: 0.10 }
        ],
        checks: {
            visual: { name: "👀 Осмотреть шины и подвеску", time: 8, equipment: 0, results: {
                alignment: "Явных повреждений нет. После осмотра рекомендуется проверить углы установки колёс.",
                pressure: "Визуально одна из шин выглядит немного иначе. Нужна проверка давления.",
                suspension: "Обнаружены подозрительные следы износа. Нужна проверка подвески.",
                tire: "На одной из шин заметен неравномерный износ."
            }},
            pressure: { name: "🛞 Проверить давление в шинах", time: 5, equipment: 1, toolId: "tire_gauge", results: {
                alignment: "Давление в шинах соответствует норме.", pressure: "Давление в одной из шин заметно отличается от нормы.", suspension: "Давление в шинах соответствует норме.", tire: "Давление немного отличается, но не объясняет выраженный увод."
            }},
            suspension: { name: "⚙️ Проверить подвеску", time: 15, equipment: 2, toolId: "basic", results: {
                alignment: "Люфтов, способных объяснить увод, не обнаружено.", pressure: "Подвеска без явных люфтов.", suspension: "Обнаружен люфт в элементе подвески. Сначала требуется устранить его.", tire: "Подвеска без критических люфтов."
            }},
            alignment: { name: "📐 Проверить развал-схождение", time: 25, equipment: 4, toolId: "alignment", results: {
                alignment: "Углы установки передних колёс вышли за допустимый диапазон. Требуется регулировка.",
                pressure: "Углы установки колёс близки к норме. Причина, вероятнее всего, в шинах/давлении.",
                suspension: "Углы установки нарушены, но перед регулировкой необходимо устранить люфт подвески.",
                tire: "Углы установки в норме. Причину нужно искать в состоянии шин."
            }}
        },
        repairs: {
            alignment: { name: "Развал-схождение", partCost: 0, workCost: 2500, time: 50, serviceOnly: true },
            pressure: { name: "Восстановление давления в шинах", partCost: 0, workCost: 400, time: 10, serviceOnly: true },
            suspension: { name: "Ремонт элемента подвески", partCost: 3500, workCost: 2200, time: 70 },
            tire: { name: "Шина", partCost: 5200, workCost: 900, time: 35 }
        }
    },

    {
        id: "brake_squeal",
        category: "brakes",
        title: "Скрип при торможении",
        minLevel: 1,
        difficulty: "🟢 Простая",
        complaints: ["При торможении появился скрип.", "Тормоза начали неприятно пищать.", "После прогрева тормоза скрипят сильнее."],
        causes: [
            {id:"pads", name:"🛑 Износ тормозных колодок", probability:.40},
            {id:"dust", name:"🧹 Загрязнение тормозного механизма", probability:.30},
            {id:"disc", name:"⚙️ Износ тормозного диска", probability:.20},
            {id:"caliper", name:"🔧 Подклинивание суппорта", probability:.10}
        ],
        checks: {
            visual:{name:"👀 Осмотр тормозов",time:10,equipment:0,results:{pads:"Колодки заметно изношены.",dust:"В механизме много загрязнений.",disc:"На диске виден выраженный износ.",caliper:"Визуально нужна дополнительная проверка суппорта."}},
            lift:{name:"🏗️ Осмотр на подъёмнике",time:12,equipment:1,toolId:"lift",results:{pads:"Остаток колодок небольшой.",dust:"Механизм загрязнён, критического износа диска нет.",disc:"Диск имеет выраженный износ.",caliper:"Суппорт имеет признаки подклинивания."}},
            brake_test:{name:"🛑 Проверка тормозного механизма",time:15,equipment:2,results:{pads:"Работа механизма соответствует износу колодок.",dust:"После очистки механизм должен работать штатно.",disc:"Есть выраженные следы неравномерного контакта.",caliper:"Механизм суппорта работает с заметным сопротивлением."}}
        },
        repairs:{pads:{name:"Замена тормозных колодок",partCost:3200,workCost:1400,time:45},dust:{name:"Очистка тормозного механизма",partCost:300,workCost:1200,time:40},disc:{name:"Замена тормозных дисков",partCost:6500,workCost:2200,time:90},caliper:{name:"Ремонт тормозного суппорта",partCost:4500,workCost:2800,time:120}}
    },
    {
        id: "brake_vibration",
        category: "brakes",
        title: "Вибрация при торможении",
        minLevel: 3,
        difficulty: "🟡 Средняя",
        complaints: ["При торможении на скорости бьёт в руль.", "Педаль тормоза слегка пульсирует.", "При торможении появляется вибрация."],
        causes:[
            {id:"warped_disc",name:"🛑 Неравномерность тормозного диска",probability:.45},
            {id:"hub",name:"⚙️ Проблема с посадкой диска/ступицей",probability:.20},
            {id:"caliper",name:"🔧 Неравномерная работа суппорта",probability:.20},
            {id:"suspension",name:"🛞 Люфт элемента передней подвески",probability:.15}
        ],
        checks:{
            road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{warped_disc:"Вибрация усиливается при торможении с высокой скорости.",hub:"Вибрация сохраняется и требует проверки ступицы.",caliper:"Торможение сопровождается неравномерным поведением.",suspension:"Есть ощущение дополнительного люфта в передней части."}},
            lift:{name:"🏗️ Проверка на подъёмнике",time:15,equipment:1,toolId:"lift",results:{warped_disc:"Подвеска без выраженного люфта, нужен контроль тормозного диска.",hub:"Посадка диска/ступицы требует проверки.",caliper:"Суппорт требует дополнительной проверки.",suspension:"Обнаружен люфт элемента подвески."}},
            brake_test:{name:"🛑 Проверка тормозного механизма",time:20,equipment:2,results:{warped_disc:"Есть выраженная неравномерность тормозного диска.",hub:"Есть подозрение на биение посадочной поверхности.",caliper:"Работа суппорта неравномерна.",suspension:"Тормозной механизм работает нормально."}}
        },
        repairs:{warped_disc:{name:"Замена тормозных дисков",partCost:7000,workCost:2400,time:100},hub:{name:"Проверка и обслуживание ступицы",partCost:3800,workCost:1800,time:80},caliper:{name:"Ремонт суппорта",partCost:4500,workCost:2600,time:120},suspension:{name:"Ремонт элемента передней подвески",partCost:4200,workCost:2200,time:100}}
    },
    {
        id:"car_pulls",
        category:"suspension",
        title:"Автомобиль уводит в сторону",
        minLevel:2,
        difficulty:"🟡 Средняя",
        complaints:["Машину тянет вправо.","После отпускания руля автомобиль уходит влево.","На ровной дороге машина не держит направление."],
        causes:[
            {id:"pressure",name:"🛞 Неправильное давление в шине",probability:.25},
            {id:"alignment",name:"📐 Нарушены углы установки колёс",probability:.40},
            {id:"tire",name:"🛞 Неравномерный износ/деформация шины",probability:.20},
            {id:"suspension",name:"🔩 Люфт элемента подвески",probability:.15}
        ],
        checks:{
            visual:{name:"👀 Осмотр шин",time:5,equipment:0,results:{pressure:"Внешне шины выглядят нормально.",alignment:"Шины без явных повреждений.",tire:"Есть неравномерный износ протектора.",suspension:"Нужна дальнейшая проверка подвески."}},
            tire_pressure:{name:"🛞 Проверить давление",time:5,equipment:0,toolId:"tire_gauge",results:{pressure:"Давление отличается от нормы.",alignment:"Давление в норме.",tire:"Давление в норме.",suspension:"Давление в норме."}},
            lift:{name:"🏗️ Проверка подвески",time:15,equipment:1,toolId:"lift",results:{pressure:"Люфтов не обнаружено.",alignment:"Люфтов не обнаружено.",tire:"Подвеска исправна.",suspension:"Обнаружен люфт элемента подвески."}},
            alignment:{name:"📐 Проверить развал-схождение",time:35,equipment:2,toolId:"alignment",results:{pressure:"Углы установки колёс близки к норме.",alignment:"Обнаружено нарушение углов установки колёс.",tire:"Углы в норме, причина в состоянии шины.",suspension:"Углы требуют регулировки после ремонта подвески."}}
        },
        repairs:{pressure:{name:"Корректировка давления в шинах",partCost:0,workCost:400,time:10,serviceOnly:true},alignment:{name:"Развал-схождение",partCost:0,workCost:1800,time:60,serviceOnly:true},tire:{name:"Замена проблемной шины",partCost:6500,workCost:1000,time:45},suspension:{name:"Ремонт элемента подвески",partCost:4200,workCost:2200,time:100}}
    },
    {
        id:"wheel_vibration",
        category:"suspension",
        title:"Вибрация на скорости",
        minLevel:3,
        difficulty:"🟡 Средняя",
        complaints:["После 90 км/ч появляется вибрация.","На трассе начинает трясти руль.","На скорости ощущается вибрация кузова."],
        causes:[
            {id:"balance",name:"⚖️ Нарушена балансировка колёс",probability:.45},
            {id:"tire",name:"🛞 Деформация шины",probability:.25},
            {id:"disc",name:"⚙️ Погнут диск",probability:.20},
            {id:"hub",name:"🔩 Люфт ступичного узла",probability:.10}
        ],
        checks:{road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{balance:"Вибрация появляется в определённом диапазоне скорости.",tire:"Вибрация ощущается сильнее на одном колесе.",disc:"Есть характерная вибрация вращающегося колеса.",hub:"Вибрация сопровождается шумом."}},visual:{name:"👀 Осмотр колёс",time:5,equipment:0,results:{balance:"Внешних повреждений не видно.",tire:"Есть подозрение на деформацию шины.",disc:"Диск имеет признаки удара.",hub:"Внешне узел без явных повреждений."}},balancer:{name:"⚖️ Балансировка колеса",time:25,equipment:2,toolId:"balancer",results:{balance:"Выявлен заметный дисбаланс.",tire:"Балансировка не устраняет проблему полностью.",disc:"Есть отклонение геометрии диска.",hub:"Балансировка в пределах нормы."}},lift:{name:"🏗️ Проверка ступицы",time:15,equipment:1,toolId:"lift",results:{balance:"Люфта ступицы нет.",tire:"Ступица исправна.",disc:"Ступица исправна.",hub:"Обнаружен люфт ступичного узла."}}},
        repairs:{balance:{name:"Балансировка колёс",partCost:0,workCost:1600,time:50,serviceOnly:true},tire:{name:"Замена шины",partCost:6500,workCost:1000,time:45},disc:{name:"Замена колёсного диска",partCost:8500,workCost:900,time:35},hub:{name:"Замена ступичного подшипника",partCost:5200,workCost:2600,time:120}}
    },
    {
        id:"coolant_leak",category:"cooling",title:"Утечка антифриза",minLevel:2,difficulty:"🟡 Средняя",
        complaints:["Уходит антифриз.","Под машиной появились следы охлаждающей жидкости.","Приходится постоянно доливать антифриз."],
        causes:[{id:"hose",name:"💧 Течь патрубка",probability:.30},{id:"radiator",name:"💧 Течь радиатора",probability:.25},{id:"pump",name:"⚙️ Течь водяной помпы",probability:.25},{id:"thermostat",name:"🌡️ Течь корпуса термостата",probability:.20}],
        checks:{visual:{name:"👀 Осмотр системы охлаждения",time:8,equipment:0,results:{hose:"Следы антифриза видны возле патрубка.",radiator:"Есть следы жидкости возле радиатора.",pump:"Внешне есть подозрение на течь помпы.",thermostat:"Следы жидкости возле корпуса термостата."}},pressure:{name:"💧 Проверка системы под давлением",time:20,equipment:2,toolId:"manometer",results:{hose:"Давление падает, течь локализуется на патрубке.",radiator:"Давление падает, радиатор негерметичен.",pump:"Течь усиливается в районе помпы.",thermostat:"Негерметичен корпус термостата."}},obd:{name:"💻 Сканирование температуры",time:10,equipment:2,toolId:"obd",results:{hose:"Температура пока в норме.",radiator:"Температура повышается при нагрузке.",pump:"Температура повышается быстрее нормы.",thermostat:"Температура прогрева отклоняется от нормы."}}},
        repairs:{hose:{name:"Замена патрубка системы охлаждения",partCost:1600,workCost:1000,time:45},radiator:{name:"Замена радиатора",partCost:8500,workCost:2800,time:150},pump:{name:"Замена водяной помпы",partCost:6500,workCost:4500,time:180},thermostat:{name:"Замена термостата",partCost:2200,workCost:1400,time:70}}
    },
    {
        id:"charging_problem",category:"electrics",title:"Генератор плохо заряжает аккумулятор",minLevel:3,difficulty:"🟡 Средняя",
        complaints:["На панели горит лампа аккумулятора.","После поездки аккумулятор снова разряжается.","Напряжение зарядки кажется низким."],
        causes:[{id:"alternator",name:"⚡ Неисправность генератора",probability:.40},{id:"belt",name:"🔧 Проблема с приводным ремнём",probability:.20},{id:"ground",name:"🔌 Плохой контакт массы",probability:.20},{id:"battery",name:"🔋 Изношенный аккумулятор",probability:.20}],
        checks:{visual:{name:"👀 Осмотр приводного ремня",time:5,equipment:0,results:{alternator:"Ремень визуально исправен.",belt:"Ремень имеет трещины и следы износа.",ground:"Ремень исправен.",battery:"Ремень исправен."}},voltage:{name:"📟 Измерить напряжение",time:10,equipment:1,toolId:"multimeter",results:{alternator:"Зарядное напряжение ниже нормы.",belt:"Напряжение нестабильно из-за привода.",ground:"Падение напряжения обнаружено по массе.",battery:"Генератор заряжает, но аккумулятор плохо держит заряд."}},obd:{name:"💻 Проверить параметры зарядки",time:10,equipment:2,toolId:"obd",results:{alternator:"Есть признаки проблемы системы зарядки.",belt:"Параметры меняются при изменении оборотов.",ground:"Электронных ошибок нет.",battery:"Система зарядки в целом работает."}}},
        repairs:{alternator:{name:"Ремонт/замена генератора",partCost:9500,workCost:3500,time:150},belt:{name:"Замена приводного ремня",partCost:1800,workCost:900,time:40},ground:{name:"Восстановление контакта массы",partCost:300,workCost:900,time:35},battery:{name:"Замена аккумулятора",partCost:6500,workCost:500,time:20}}
    },
    {
        id:"starter_no_crank",category:"electrics",title:"Стартер не крутит двигатель",minLevel:2,difficulty:"🟡 Средняя",
        complaints:["При повороте ключа стартер молчит.","Слышен только щелчок.","Двигатель не проворачивается стартером."],
        causes:[{id:"battery",name:"🔋 Слабый аккумулятор",probability:.30},{id:"starter",name:"⚡ Неисправен стартер",probability:.35},{id:"ground",name:"🔌 Плохая масса",probability:.20},{id:"relay",name:"🔌 Неисправность реле/управления стартером",probability:.15}],
        checks:{battery:{name:"🔋 Проверить аккумулятор",time:5,equipment:1,toolId:"multimeter",results:{battery:"Напряжение проседает при попытке запуска.",starter:"Аккумулятор в норме.",ground:"Аккумулятор в норме.",relay:"Аккумулятор в норме."}},visual:{name:"👀 Осмотр клемм и массы",time:5,equipment:0,results:{battery:"Клеммы выглядят исправно.",starter:"Клеммы исправны.",ground:"Контакт массы загрязнён.",relay:"Клеммы исправны."}},starter_test:{name:"⚡ Проверить цепь стартера",time:15,equipment:2,toolId:"multimeter",results:{battery:"Сигнал на стартер приходит, проблема связана с питанием.",starter:"На стартер приходит питание, но он не работает.",ground:"Падение напряжения по массе.",relay:"Сигнал управления стартером отсутствует."}}},
        repairs:{battery:{name:"Замена аккумулятора",partCost:6500,workCost:500,time:20},starter:{name:"Ремонт стартера",partCost:7500,workCost:2800,time:120},ground:{name:"Восстановление массы",partCost:300,workCost:900,time:35},relay:{name:"Ремонт цепи управления стартером",partCost:900,workCost:1800,time:80}}
    },
    {
        id:"check_engine_misfire",category:"engine",title:"Check Engine и пропуски зажигания",minLevel:4,difficulty:"🟠 Сложная",
        complaints:["Загорелся Check Engine, двигатель троит.","При разгоне появились рывки и загорелся Check Engine.","Двигатель работает неровно, иногда мигает лампа неисправности."],
        causes:[{id:"spark",name:"🔥 Свеча зажигания",probability:.30},{id:"coil",name:"⚡ Катушка зажигания",probability:.30},{id:"injector",name:"⛽ Форсунка",probability:.20},{id:"compression",name:"🔧 Низкая компрессия",probability:.20}],
        checks:{obd:{name:"💻 OBD-II и коды P030x",time:10,equipment:2,toolId:"obd",results:{spark:"Обнаружен пропуск в одном цилиндре. Требуется проверка свечи.",coil:"Обнаружен пропуск в одном цилиндре. Требуется проверка катушки.",injector:"Обнаружен пропуск. Требуется проверка топливной системы.",compression:"Обнаружен устойчивый пропуск. Требуется механическая проверка."}},freeze:{name:"📸 Freeze Frame",time:10,equipment:2,toolId:"obd",results:{spark:"Пропуск фиксируется при нагрузке.",coil:"Пропуск повторяется при разгоне.",injector:"Пропуск связан с определённым режимом работы.",compression:"Пропуск стабилен в разных режимах."}},compression:{name:"📈 Измерить компрессию",time:25,equipment:3,toolId:"manometer",results:{spark:"Компрессия в норме.",coil:"Компрессия в норме.",injector:"Компрессия в норме.",compression:"Компрессия заметно ниже нормы в проблемном цилиндре."}},spark_test:{name:"🔥 Проверить свечу и катушку",time:20,equipment:1,results:{spark:"Свеча имеет выраженный износ.",coil:"Катушка работает нестабильно.",injector:"Свеча и катушка исправны.",compression:"Свеча и катушка исправны."}}},
        repairs:{spark:{name:"Замена свечей зажигания",partCost:2800,workCost:1100,time:35},coil:{name:"Замена катушки зажигания",partCost:4200,workCost:900,time:30},injector:{name:"Диагностика и чистка форсунки",partCost:3500,workCost:2400,time:100},compression:{name:"Ремонт двигателя по причине низкой компрессии",partCost:15000,workCost:12000,time:480}}
    },
    {
        id:"oil_leak",category:"engine",title:"Течь моторного масла",minLevel:2,difficulty:"🟡 Средняя",
        complaints:["Под машиной появились масляные пятна.","Двигатель начал расходовать масло и есть следы течи.","После стоянки остаются капли масла."],
        causes:[{id:"valve_cover",name:"🛢️ Прокладка клапанной крышки",probability:.30},{id:"sump",name:"🛢️ Герметичность поддона",probability:.25},{id:"seal",name:"🛢️ Сальник двигателя",probability:.25},{id:"filter",name:"🛢️ Течь в районе масляного фильтра",probability:.20}],
        checks:{visual:{name:"👀 Осмотр двигателя снизу и сверху",time:10,equipment:0,results:{valve_cover:"Следы масла возле клапанной крышки.",sump:"Масло появляется в районе поддона.",seal:"Течь уходит в район соединения валов.",filter:"Масляные следы возле фильтра."}},lift:{name:"🏗️ Осмотр на подъёмнике",time:15,equipment:1,toolId:"lift",results:{valve_cover:"Нижняя часть двигателя относительно сухая.",sump:"Поддон имеет следы масла.",seal:"Есть следы масла в районе сальника.",filter:"Есть следы масла возле фильтра."}},clean:{name:"🧼 Очистить и повторно проверить",time:25,equipment:1,results:{valve_cover:"После очистки источник течи локализован у крышки.",sump:"Источник течи локализован у поддона.",seal:"Источник течи локализован у сальника.",filter:"Источник течи локализован у фильтра."}}},
        repairs:{valve_cover:{name:"Замена прокладки клапанной крышки",partCost:1800,workCost:1500,time:70},sump:{name:"Герметизация/ремонт поддона",partCost:1400,workCost:1800,time:80},seal:{name:"Замена сальника двигателя",partCost:1800,workCost:6500,time:240},filter:{name:"Устранение течи масляного фильтра",partCost:900,workCost:700,time:25}}
    },
    {
        id:"ac_not_cold",category:"cooling",title:"Кондиционер плохо охлаждает",minLevel:3,difficulty:"🟡 Средняя",
        complaints:["Кондиционер дует, но почти не холодит.","Летом салон долго не охлаждается.","Из дефлекторов идёт прохладный, но не холодный воздух."],
        causes:[{id:"refrigerant",name:"❄️ Недостаток хладагента",probability:.40},{id:"compressor",name:"⚙️ Проблема с компрессором кондиционера",probability:.20},{id:"fan",name:"🌀 Не работает вентилятор конденсатора",probability:.20},{id:"filter",name:"🌬️ Забит салонный фильтр",probability:.20}],
        checks:{visual:{name:"👀 Осмотр системы кондиционирования",time:8,equipment:0,results:{refrigerant:"Явных повреждений не видно.",compressor:"Компрессор включается нестабильно.",fan:"Вентилятор требует проверки.",filter:"Салонный фильтр выглядит сильно загрязнённым."}},pressure:{name:"📈 Проверить давление в контуре",time:20,equipment:3,toolId:"manometer",results:{refrigerant:"Давление хладагента ниже нормы.",compressor:"Давление нестабильно из-за работы компрессора.",fan:"Давление растёт при плохом охлаждении конденсатора.",filter:"Давление контура в норме."}},fan:{name:"🌀 Проверить вентилятор",time:15,equipment:1,toolId:"multimeter",results:{refrigerant:"Вентилятор работает.",compressor:"Вентилятор работает.",fan:"Вентилятор не включается в нужном режиме.",filter:"Вентилятор исправен."}}},
        repairs:{refrigerant:{name:"Проверка герметичности и заправка кондиционера",partCost:2500,workCost:2200,time:80},compressor:{name:"Ремонт/замена компрессора кондиционера",partCost:14000,workCost:6500,time:240},fan:{name:"Ремонт вентилятора кондиционера",partCost:4500,workCost:2200,time:120},filter:{name:"Замена салонного фильтра",partCost:1200,workCost:500,time:20}}
    },
    {
        id:"turbo_loss",category:"engine",title:"Потеря мощности турбодвигателя",minLevel:7,difficulty:"🔴 Экспертная",
        complaints:["Турбомотор перестал нормально тянуть.","После 2500 оборотов мощность пропадает.","Машина стала заметно медленнее на разгоне."],
        causes:[{id:"boost_leak",name:"💨 Утечка наддува",probability:.30},{id:"actuator",name:"⚙️ Проблема управления турбиной",probability:.25},{id:"sensor",name:"💻 Датчик давления наддува",probability:.20},{id:"turbo",name:"🌀 Неисправность турбокомпрессора",probability:.25}],
        checks:{obd:{name:"💻 OBD-II и Live Data",time:15,equipment:2,toolId:"obd",results:{boost_leak:"Фактический наддув ниже заданного.",actuator:"Параметры управления турбиной отклоняются.",sensor:"Показания датчика давления подозрительны.",turbo:"Наддув нестабилен и заметно ниже ожидаемого."}},smoke:{name:"💨 Проверить систему наддува дымогенератором",time:30,equipment:4,toolId:"smoke",results:{boost_leak:"Обнаружена утечка в системе наддува.",actuator:"Утечек воздуха не обнаружено.",sensor:"Утечек воздуха не обнаружено.",turbo:"Утечек воздуха не обнаружено."}},actuator:{name:"⚙️ Проверить управление турбиной",time:30,equipment:2,toolId:"obd",results:{boost_leak:"Управление работает.",actuator:"Механизм управления работает некорректно.",sensor:"Управление работает.",turbo:"Управление работает, но турбина не развивает требуемый наддув."}}},
        repairs:{boost_leak:{name:"Устранение утечки системы наддува",partCost:2500,workCost:3200,time:120},actuator:{name:"Ремонт управления турбиной",partCost:6500,workCost:4500,time:180},sensor:{name:"Замена датчика давления наддува",partCost:4200,workCost:1800,time:70},turbo:{name:"Ремонт/замена турбокомпрессора",partCost:28000,workCost:12000,time:420}}
    },
    {
        id:"automatic_transmission_kick",category:"transmission",title:"Пинки автоматической коробки",minLevel:6,difficulty:"🟠 Сложная",
        complaints:["АКПП переключается с толчком.","При включении D появляется удар.","При разгоне коробка переключается жёстко."],
        causes:[{id:"fluid",name:"🛢️ Проблема с состоянием/уровнем ATF",probability:.30},{id:"solenoid",name:"⚙️ Проблема соленоида",probability:.25},{id:"mount",name:"🔩 Опора двигателя/КПП",probability:.20},{id:"wear",name:"⚙️ Внутренний износ АКПП",probability:.25}],
        checks:{road:{name:"🚗 Пробная поездка",time:25,equipment:0,results:{fluid:"Пинки меняются после прогрева коробки.",solenoid:"Пинки повторяются на конкретном переключении.",mount:"Удар особенно заметен при включении D/R.",wear:"Переключения сопровождаются устойчивыми задержками."}},obd:{name:"💻 Диагностика АКПП",time:20,equipment:2,toolId:"obd",results:{fluid:"Критических ошибок нет, требуется проверка обслуживания.",solenoid:"Есть данные по работе соленоида.",mount:"Ошибок управления коробкой нет.",wear:"Параметры требуют углублённой диагностики."}},lift:{name:"🏗️ Проверка опор и утечек",time:15,equipment:1,toolId:"lift",results:{fluid:"Есть следы ATF, уровень требует проверки.",solenoid:"Утечек нет.",mount:"Опора имеет повреждение.",wear:"Внешних повреждений нет."}}},
        repairs:{fluid:{name:"Обслуживание АКПП и замена ATF",partCost:6500,workCost:3000,time:150},solenoid:{name:"Ремонт соленоида АКПП",partCost:8500,workCost:5500,time:220},mount:{name:"Замена опоры двигателя/КПП",partCost:4200,workCost:1800,time:90},wear:{name:"Сложный ремонт АКПП",partCost:32000,workCost:18000,time:600}}
    },
    {
        id:"diesel_glow",category:"engine",title:"Дизель плохо запускается на холодную",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["Дизель долго заводится утром.","На холодную мотор запускается тяжело.","После запуска первые секунды двигатель работает неровно."],
        causes:[{id:"glow",name:"🔥 Свечи накаливания",probability:.40},{id:"battery",name:"🔋 Недостаточное напряжение при запуске",probability:.20},{id:"fuel",name:"⛽ Проблема с давлением топлива",probability:.20},{id:"injector",name:"💉 Форсунка с повышенным обратным сливом",probability:.20}],
        checks:{visual:{name:"👀 Осмотр системы запуска",time:8,equipment:0,results:{glow:"Внешних повреждений не видно.",battery:"Клеммы выглядят нормально.",fuel:"Следов утечки нет.",injector:"Внешних повреждений нет."}},voltage:{name:"📟 Проверить питание свечей накаливания",time:15,equipment:1,toolId:"multimeter",results:{glow:"Питание системы накала требует проверки свечей.",battery:"Напряжение питания проседает.",fuel:"Питание свечей в норме.",injector:"Питание свечей в норме."}},fuel_pressure:{name:"⛽ Проверить давление топлива",time:25,equipment:3,toolId:"manometer",results:{glow:"Давление топлива соответствует норме.",battery:"Давление топлива соответствует норме.",fuel:"Давление топлива ниже ожидаемого.",injector:"Давление топлива в норме."}},injector_test:{name:"💉 Проверить обратный слив форсунок",time:35,equipment:2,results:{glow:"Обратный слив в норме.",battery:"Обратный слив в норме.",fuel:"Обратный слив в норме.",injector:"Одна форсунка имеет повышенный обратный слив."}}},
        repairs:{glow:{name:"Замена свечей накаливания",partCost:3200,workCost:1800,time:80},battery:{name:"Замена аккумулятора",partCost:7500,workCost:600,time:25},fuel:{name:"Ремонт топливной системы дизеля",partCost:8500,workCost:5000,time:220},injector:{name:"Ремонт/замена дизельной форсунки",partCost:12000,workCost:5000,time:240}}
    },
    {
        id:"wheel_bearing",category:"suspension",title:"Гул ступичного подшипника",minLevel:4,difficulty:"🟠 Сложная",
        complaints:["На скорости появился гул.","Гул усиливается с ростом скорости.","Слышен равномерный шум со стороны колеса."],
        causes:[{id:"bearing",name:"🔩 Износ ступичного подшипника",probability:.60},{id:"tire",name:"🛞 Шум от неравномерного износа шины",probability:.25},{id:"brake",name:"🛑 Шум тормозного механизма",probability:.15}],
        checks:{road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{bearing:"Гул меняется при перестроении и растёт со скоростью.",tire:"Шум связан с покрытием и состоянием протектора.",brake:"Шум меняется при лёгком нажатии на тормоз."}},lift:{name:"🏗️ Проверить люфт ступицы",time:15,equipment:1,toolId:"lift",results:{bearing:"Есть заметный люфт ступичного узла.",tire:"Люфта нет.",brake:"Люфта нет."}},wheel_spin:{name:"🔄 Проверить вращение колеса",time:10,equipment:1,toolId:"lift",results:{bearing:"Подшипник шумит при вращении.",tire:"Подшипник работает тихо.",brake:"Есть лёгкий контакт тормозного механизма."}}},
        repairs:{bearing:{name:"Замена ступичного подшипника",partCost:5200,workCost:2800,time:140},tire:{name:"Замена шины",partCost:6500,workCost:1000,time:45},brake:{name:"Обслуживание тормозного механизма",partCost:900,workCost:1300,time:50}}
    },
    {
        id:"timing_belt_wear",category:"engine",title:"Износ ремня ГРМ",minLevel:6,difficulty:"🔴 Экспертная",
        complaints:["Клиент хочет проверить ремень ГРМ перед дальней поездкой.","На плановом обслуживании нужно оценить состояние ГРМ.","Появились сомнения по сроку службы ремня ГРМ."],
        causes:[{id:"belt",name:"⛓️ Изношен ремень ГРМ",probability:.55},{id:"tensioner",name:"⚙️ Изношен натяжитель/ролик",probability:.20},{id:"waterpump",name:"💧 Изношена помпа привода ГРМ",probability:.15},{id:"ok",name:"✅ Привод ГРМ в нормальном состоянии",probability:.10}],
        checks:{visual:{name:"👀 Осмотр привода ГРМ",time:20,equipment:0,results:{belt:"На ремне заметны признаки старения.",tensioner:"Ремень выглядит приемлемо, нужен контроль роликов.",waterpump:"Есть признаки возможной проблемы помпы.",ok:"Визуально привод выглядит исправным."}},knowledge:{name:"📚 Свериться с регламентом",time:10,equipment:0,results:{belt:"Пробег и срок обслуживания указывают на необходимость замены.",tensioner:"Регламент требует оценки комплекта ГРМ.",waterpump:"Регламент предусматривает контроль помпы.",ok:"По регламенту замена пока не обязательна."}},timing_test:{name:"🔧 Проверить состояние элементов ГРМ",time:30,equipment:1,results:{belt:"Ремень требует замены.",tensioner:"Натяжитель/ролик имеет признаки износа.",waterpump:"Помпа имеет признаки износа.",ok:"Критического износа не обнаружено."}}},
        repairs:{belt:{name:"Замена комплекта ремня ГРМ",partCost:8500,workCost:6500,time:300},tensioner:{name:"Замена роликов и натяжителя ГРМ",partCost:6500,workCost:5000,time:240},waterpump:{name:"Замена помпы вместе с приводом ГРМ",partCost:7000,workCost:6500,time:300},ok:{name:"Плановая проверка без ремонта",partCost:0,workCost:700,time:30,serviceOnly:true}}
    },
    {
        id:"battery_drain",category:"electrics",title:"Аккумулятор разряжается за ночь",minLevel:4,difficulty:"🟠 Сложная",
        complaints:["Утром аккумулятор разряжен.","Машина стоит ночь и потом не заводится.","После полной зарядки проблема возвращается."],
        causes:[{id:"leak",name:"🔌 Паразитный ток утечки",probability:.45},{id:"battery",name:"🔋 Изношенный аккумулятор",probability:.25},{id:"alternator",name:"⚡ Утечка через генератор",probability:.15},{id:"module",name:"💻 Блок автомобиля не переходит в сон",probability:.15}],
        checks:{battery:{name:"🔋 Проверить состояние аккумулятора",time:10,equipment:1,toolId:"multimeter",results:{leak:"Аккумулятор способен держать заряд.",battery:"Ёмкость аккумулятора снижена.",alternator:"Аккумулятор способен держать заряд.",module:"Аккумулятор способен держать заряд."}},current:{name:"📟 Измерить ток покоя",time:25,equipment:2,toolId:"multimeter",results:{leak:"Ток покоя выше допустимого.",battery:"Ток покоя находится в норме.",alternator:"Есть подозрение на утечку через генератор.",module:"Ток покоя повышен после закрытия автомобиля."}},obd:{name:"💻 Проверить переход блоков в сон",time:20,equipment:2,toolId:"obd",results:{leak:"Нужно локализовать потребителя.",battery:"Блоки переходят в сон.",alternator:"Электронных ошибок нет.",module:"Один из блоков не переходит в спящий режим."}}},
        repairs:{leak:{name:"Поиск и устранение утечки тока",partCost:800,workCost:3500,time:180},battery:{name:"Замена аккумулятора",partCost:7500,workCost:600,time:25},alternator:{name:"Ремонт генератора",partCost:9500,workCost:3500,time:150},module:{name:"Диагностика и ремонт блока управления",partCost:8500,workCost:6000,time:240}}
    },
    {
        id:"steering_play",category:"suspension",title:"Люфт рулевого управления",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["В руле появился люфт.","Машина реагирует на руль с задержкой.","На прямой приходится постоянно подруливать."],
        causes:[{id:"tie_rod",name:"🔩 Рулевой наконечник/тяга",probability:.30},{id:"rack",name:"⚙️ Износ рулевой рейки",probability:.25},{id:"ball",name:"🛞 Люфт шаровой/подвески",probability:.20},{id:"alignment",name:"📐 Нарушение углов установки колёс",probability:.25}],
        checks:{road:{name:"🚗 Проверка на дороге",time:15,equipment:0,results:{tie_rod:"Есть свободный ход в рулевом управлении.",rack:"Люфт ощущается в районе рейки.",ball:"Реакция автомобиля сопровождается посторонним стуком.",alignment:"Автомобиль требует проверки углов установки."}},lift:{name:"🏗️ Проверить рулевые соединения",time:20,equipment:1,toolId:"lift",results:{tie_rod:"Обнаружен люфт рулевого наконечника.",rack:"Соединения исправны, требуется проверка рейки.",ball:"Обнаружен люфт шаровой опоры.",alignment:"Люфтов нет."}},alignment:{name:"📐 Проверить углы установки колёс",time:35,equipment:2,toolId:"alignment",results:{tie_rod:"Углы нарушены из-за люфта, сначала нужен ремонт.",rack:"Углы близки к норме.",ball:"Углы нарушены из-за неисправности подвески.",alignment:"Углы установки колёс нарушены."}}},
        repairs:{tie_rod:{name:"Замена рулевого наконечника/тяги",partCost:3200,workCost:1800,time:80},rack:{name:"Ремонт рулевой рейки",partCost:14000,workCost:7000,time:300},ball:{name:"Замена шаровой опоры",partCost:3000,workCost:1800,time:80},alignment:{name:"Развал-схождение",partCost:0,workCost:1800,time:60,serviceOnly:true}}
    },
    {
        id:"exhaust_smoke",category:"engine",title:"Дым из выхлопной системы",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["Из выхлопа идёт дым.","На холодную появляется заметный дым.","После перегазовки из выхлопа выходит дым."],
        causes:[{id:"oil",name:"🛢️ Масло попадает в цилиндры",probability:.30},{id:"coolant",name:"💧 Попадание охлаждающей жидкости",probability:.20},{id:"fuel",name:"⛽ Неполное сгорание топлива",probability:.30},{id:"normal",name:"🌫️ Нормальный пар при холодном запуске",probability:.20}],
        checks:{visual:{name:"👀 Оценить дым и состояние двигателя",time:8,equipment:0,results:{oil:"Дым имеет признаки масляного характера.",coolant:"Дым плотный, требуется проверка охлаждающей системы.",fuel:"Есть признаки неполного сгорания.",normal:"После прогрева дым исчезает."}},obd:{name:"💻 Проверить параметры двигателя",time:15,equipment:2,toolId:"obd",results:{oil:"Параметры требуют дальнейшей механической проверки.",coolant:"Температурные параметры требуют проверки.",fuel:"Коррекции/пропуски указывают на проблему смеси.",normal:"Параметры после прогрева в норме."}},compression:{name:"📈 Измерить компрессию",time:25,equipment:3,toolId:"manometer",results:{oil:"Есть отклонения компрессии.",coolant:"Компрессия неоднородна.",fuel:"Компрессия в норме.",normal:"Компрессия в норме."}}},
        repairs:{oil:{name:"Ремонт двигателя по причине расхода масла",partCost:18000,workCost:12000,time:500},coolant:{name:"Диагностика и ремонт системы охлаждения/ГБЦ",partCost:16000,workCost:10000,time:420},fuel:{name:"Ремонт системы впрыска",partCost:6500,workCost:4000,time:180},normal:{name:"Проверка без ремонта",partCost:0,workCost:600,time:20,serviceOnly:true}}
    },
    {
        id:"clutch_slip",category:"transmission",title:"Сцепление буксует",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["Обороты растут, а машина почти не ускоряется.","При разгоне сцепление начинает проскальзывать.","После прогрева сцепление буксует сильнее."],
        causes:[{id:"clutch",name:"⚙️ Изношен комплект сцепления",probability:.55},{id:"oil",name:"🛢️ Замасливание сцепления",probability:.20},{id:"hydraulic",name:"💧 Проблема гидропривода сцепления",probability:.15},{id:"normal",name:"✅ Явной неисправности сцепления нет",probability:.10}],
        checks:{road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{clutch:"Обороты растут быстрее скорости автомобиля.",oil:"Есть признаки проскальзывания и запаха.",hydraulic:"Педаль и включение сцепления требуют проверки.",normal:"Симптом не подтверждается постоянно."}},lift:{name:"🏗️ Осмотр трансмиссии",time:20,equipment:1,toolId:"lift",results:{clutch:"Для точной проверки требуется демонтаж.",oil:"Обнаружены следы масла в районе соединения.",hydraulic:"Внешних следов утечки нет.",normal:"Внешних повреждений нет."}},hydraulic:{name:"💧 Проверить привод сцепления",time:15,equipment:1,results:{clutch:"Гидропривод работает штатно.",oil:"Гидропривод работает штатно.",hydraulic:"Есть отклонение в работе гидропривода.",normal:"Гидропривод исправен."}}},
        repairs:{clutch:{name:"Замена комплекта сцепления",partCost:12000,workCost:7000,time:360},oil:{name:"Устранение течи и замена сцепления",partCost:14500,workCost:8500,time:420},hydraulic:{name:"Ремонт гидропривода сцепления",partCost:2800,workCost:2200,time:120},normal:{name:"Проверка без ремонта",partCost:0,workCost:700,time:30,serviceOnly:true}}
    }

];


/* =========================================================
   БАЗА ЗНАНИЙ — ПОЛНАЯ ТЕОРИЯ v2
   Структура: что это → как работает → симптомы → проверка → практика.
   Позже эти topic.id будут использоваться для тестов и допусков.
========================================================= */

const knowledgeBase = {
    engine: {
        title: "🔥 Двигатель",
        topics: [
            {
                id: "engine_basics", title: "Устройство двигателя", icon: "🔥",
                theory: "Поршневой двигатель превращает энергию сгорания топливовоздушной смеси в механическую работу. Основные элементы: блок цилиндров, поршни, шатуны, коленчатый вал, ГБЦ, клапаны и газораспределительный механизм.",
                how: "Поршень движется внутри цилиндра, шатун передаёт усилие на коленвал, а коленвал превращает возвратно-поступательное движение во вращение.",
                symptoms: ["потеря мощности", "нестабильный холостой ход", "повышенный расход масла", "трудный запуск", "посторонние звуки"],
                checks: ["визуальный осмотр", "уровень и состояние масла", "OBD-II и Live Data", "компрессия при необходимости"],
                tools: "Набор инструмента, OBD-II, компрессометр, мультиметр.",
                practice: "Перед ремонтом нужно понять, какая система может быть причиной симптома. Не стоит менять детали только по одному признаку."
            },
            {
                id: "four_stroke", title: "Четырёхтактный цикл", icon: "🔄",
                theory: "Рабочий цикл четырёхтактного двигателя состоит из впуска, сжатия, рабочего хода и выпуска.",
                how: "На впуске цилиндр получает заряд, затем смесь сжимается. После воспламенения газы расширяются и совершают работу, после чего отработавшие газы удаляются.",
                symptoms: ["потеря мощности", "пропуски воспламенения", "дымность", "трудный запуск"],
                checks: ["состояние ГРМ", "компрессия", "зажигание", "топливная система"],
                tools: "Компрессометр, OBD-II, тестер зажигания, набор инструмента.",
                practice: "Понимание четырёх тактов помогает связать симптом с конкретной системой двигателя."
            },
            {
                id: "cylinder_head", title: "ГБЦ и клапанный механизм", icon: "🧱",
                theory: "Головка блока цилиндров закрывает верхнюю часть цилиндров и содержит элементы газораспределения, впускные и выпускные каналы, а в зависимости от конструкции — свечи, форсунки и другие компоненты.",
                how: "Клапаны открываются и закрываются в заданные моменты. Распредвал управляет их движением через соответствующий механизм привода.",
                symptoms: ["потеря компрессии", "троение", "расход масла", "посторонний шум", "перегрев при проблемах с прокладкой ГБЦ"],
                checks: ["компрессия", "утечки цилиндров", "состояние свечей", "признаки попадания ОЖ или масла", "состояние клапанного механизма"],
                tools: "Компрессометр, тестер утечек цилиндров, эндоскоп, набор инструмента.",
                practice: "При серьёзных работах с ГБЦ важно соблюдать порядок разборки и требования производителя по затяжке."
            },
            {
                id: "pistons_crank", title: "Поршни, шатуны и коленвал", icon: "⚙️",
                theory: "Поршень воспринимает давление газов, шатун передаёт усилие на коленчатый вал, а коленвал преобразует движение поршней во вращение.",
                how: "Коленвал вращается на коренных опорах. Шатуны соединяют его с поршнями через шатунные шейки.",
                symptoms: ["стук из нижней части двигателя", "расход масла", "низкая компрессия", "вибрации", "металлическая стружка в масле"],
                checks: ["давление масла", "компрессия", "анализ шума", "состояние масла и фильтра", "измерения при разборке"],
                tools: "Манометр, компрессометр, эндоскоп, микрометр/нутромер при ремонте.",
                practice: "Диагностика механической части двигателя должна подтверждаться измерениями, а не только звуком."
            },
            {
                id: "timing", title: "ГРМ", icon: "⛓️",
                theory: "Газораспределительный механизм синхронизирует коленчатый и распределительные валы, чтобы клапаны открывались в нужные моменты.",
                how: "Привод ГРМ может быть ременным или цепным. Натяжитель и направляющие поддерживают правильное натяжение и положение привода.",
                symptoms: ["трудный запуск", "потеря мощности", "ошибки фаз", "шум цепи/привода", "двигатель может не запускаться при серьёзном нарушении фаз"],
                checks: ["ошибки по фазам", "метки ГРМ", "состояние ремня/цепи", "натяжитель и направляющие", "синхронизация датчиков"],
                tools: "Фиксаторы ГРМ, набор инструмента, OBD-II, динамометрический ключ.",
                practice: "Перед допуском к самостоятельной замене ГРМ игрок должен пройти обучение и тест без ошибок."
            },
            {
                id: "timing_belt", title: "Ремень ГРМ", icon: "🪢",
                theory: "Ремень ГРМ передаёт вращение от коленчатого вала к распределительному валу или валам. Он работает в заданном направлении и требует правильного натяжения.",
                how: "Ремень взаимодействует со шкивами и натяжным механизмом. При нарушении положения зубьев меняются фазы газораспределения.",
                symptoms: ["свист или посторонний шум", "ошибки фаз", "трудный запуск", "потеря мощности"],
                checks: ["трещины и повреждения", "состояние зубьев", "натяжение", "ролики и помпа при соответствующей конструкции", "совпадение меток"],
                tools: "Фиксаторы, ключ для натяжителя, динамометрический ключ.",
                practice: "Работа с ГРМ требует строгой последовательности. После установки необходимо проверить совпадение меток и правильность натяжения."
            },
            {
                id: "oil_system", title: "Система смазки", icon: "🛢️",
                theory: "Система смазки подаёт моторное масло к трущимся деталям, уменьшает трение, отводит часть тепла и помогает удалять продукты износа.",
                how: "Масляный насос создаёт поток, масло проходит через фильтр и поступает к каналам двигателя. Давление зависит от конструкции и состояния системы.",
                symptoms: ["лампа давления масла", "стук или шум двигателя", "расход масла", "утечки", "перегрев отдельных деталей"],
                checks: ["уровень масла", "утечки", "состояние фильтра", "давление манометром", "состояние масла"],
                tools: "Щуп, манометр давления масла, набор инструмента.",
                practice: "Лампа давления масла — повод остановить диагностику и проверить причину, а не просто продолжать эксплуатацию."
            },
            {
                id: "cooling_system", title: "Система охлаждения", icon: "💧",
                theory: "Система охлаждения отводит избыточное тепло от двигателя и поддерживает рабочий температурный режим.",
                how: "Охлаждающая жидкость циркулирует через двигатель и радиатор. Термостат регулирует поток, а вентилятор помогает отводить тепло.",
                symptoms: ["перегрев", "долгий прогрев", "утечки ОЖ", "вентилятор работает слишком часто", "сладковатый запах ОЖ"],
                checks: ["уровень ОЖ", "утечки", "температура по OBD", "термостат", "вентилятор", "радиатор"],
                tools: "OBD-II, тестер давления системы охлаждения, мультиметр, набор инструмента.",
                practice: "Система охлаждения проверяется по цепочке: уровень → утечки → температура → циркуляция → вентилятор."
            },
            {
                id: "intake", title: "Впускная система", icon: "🌬️",
                theory: "Впускная система обеспечивает двигатель необходимым количеством воздуха и включает фильтр, патрубки, дроссель и другие элементы.",
                how: "Воздух проходит через фильтр и измеряется соответствующим датчиком, затем количество воздуха регулируется дросселем.",
                symptoms: ["плавающие обороты", "потеря мощности", "бедная смесь", "провалы при разгоне"],
                checks: ["подсос воздуха", "MAF/MAP", "дроссель", "патрубки", "дымогенератором при необходимости"],
                tools: "OBD-II, дымогенератор, мультиметр, набор инструмента.",
                practice: "При подозрении на подсос нельзя ограничиваться заменой датчика — сначала проверяется герметичность впуска."
            },
            {
                id: "ignition", title: "Система зажигания", icon: "⚡",
                theory: "Бензиновому двигателю требуется искра в нужный момент. В зависимости от конструкции используются свечи, катушки и система управления зажиганием.",
                how: "ЭБУ управляет моментом и условиями возникновения искры. Катушка создаёт высокое напряжение, а свеча формирует разряд в цилиндре.",
                symptoms: ["троение", "рывки", "потеря мощности", "Check Engine", "увеличенный расход топлива"],
                checks: ["свечи", "катушки", "разъёмы", "ошибки пропусков", "перестановка исправных компонентов при диагностике"],
                tools: "OBD-II, тестер зажигания, мультиметр, свечной ключ.",
                practice: "Код пропуска не доказывает неисправность свечи или катушки. Причину нужно подтвердить."
            },
            {
                id: "diesel_glow", title: "Дизель и свечи накаливания", icon: "🛢️",
                theory: "Дизельный двигатель воспламеняет топливо за счёт высокой температуры сжатого воздуха. Свечи накаливания помогают холодному запуску.",
                how: "Перед запуском и в некоторых режимах свечи накаливания нагреваются. Управление зависит от температуры и конструкции двигателя.",
                symptoms: ["трудный холодный запуск", "дым после запуска", "неровная работа на холодную", "ошибки системы накаливания"],
                checks: ["ошибки OBD", "сопротивление свечей", "питание системы", "реле/модуль управления", "состояние проводки"],
                tools: "OBD-II, мультиметр, токовые клещи при наличии, свечной инструмент.",
                practice: "При замене свечи накаливания важно учитывать риск её прикипания и не применять чрезмерное усилие."
            },
            {
                id: "turbo", title: "Турбонаддув", icon: "🌪️",
                theory: "Турбокомпрессор использует энергию выхлопных газов для увеличения количества воздуха, поступающего в двигатель.",
                how: "Турбина вращает компрессор. Система управления наддувом регулирует давление в зависимости от конструкции.",
                symptoms: ["недостаток мощности", "недодув", "передув", "свист", "дымность", "масло во впуске"],
                checks: ["патрубки", "утечки воздуха", "давление наддува", "управление турбиной", "состояние масла"],
                tools: "OBD-II, дымогенератор, диагностический манометр, мультиметр. ",
                practice: "Ошибка по наддуву не означает автоматически неисправную турбину: сначала проверяются утечки и управление."
            }
        ]
    },

    electrical: {
        title: "⚡ Электрика",
        topics: [
            {id:"battery",title:"Аккумулятор",icon:"🔋",theory:"Аккумулятор хранит электрическую энергию и способен отдавать большой ток стартеру.",how:"При работающем двигателе аккумулятор заряжается от генератора, а при запуске питает стартер и системы автомобиля.",symptoms:["медленный запуск","щелчки стартера","просадка напряжения","быстрый разряд"],checks:["напряжение покоя","просадка при запуске","зарядное напряжение","нагрузочный тест"],tools:"Мультиметр или тестер аккумулятора.",practice:"Слабый аккумулятор нельзя диагностировать только по напряжению покоя — важна его способность отдавать ток под нагрузкой."},
            {id:"alternator",title:"Генератор",icon:"⚡",theory:"Генератор вырабатывает электроэнергию при работающем двигателе и поддерживает заряд аккумулятора.",how:"Механическая энергия двигателя через привод вращает генератор, который формирует электрическую энергию.",symptoms:["лампа аккумулятора","разряд аккумулятора","нестабильное напряжение","шум привода"],checks:["напряжение без нагрузки и под нагрузкой","ремень","соединения","ошибки зарядной системы"],tools:"Мультиметр, OBD-II при поддержке.",practice:"Проверять нужно всю цепь зарядки, а не только генератор."},
            {id:"starter",title:"Стартер",icon:"🔑",theory:"Стартер кратковременно вращает коленчатый вал для запуска двигателя.",how:"При команде запуска электромотор стартера через привод вращает маховик или венец коленвала.",symptoms:["не крутит","медленно крутит","один щелчок","частые щелчки"],checks:["аккумулятор","масса","питание стартера","управляющий сигнал","потребляемый ток"],tools:"Мультиметр, токовые клещи, набор инструмента.",practice:"Если стартер медленно крутит, сначала исключают слабый аккумулятор и плохие соединения."},
            {id:"multimeter",title:"Мультиметр",icon:"📟",theory:"Мультиметр позволяет измерять электрические параметры: напряжение, сопротивление и в подходящем режиме ток.",how:"Измерение выполняется выбранным режимом и правильным подключением щупов.",symptoms:["нет питания","плохая масса","обрыв цепи","неверное сопротивление"],checks:["питание","масса","целостность проводки","падение напряжения"],tools:"Мультиметр и электрическая схема автомобиля.",practice:"Неправильное подключение мультиметра может повредить прибор или цепь, поэтому режим измерения выбирается до подключения."},
            {id:"fuses",title:"Предохранители и реле",icon:"🧷",theory:"Предохранители защищают электрические цепи от чрезмерного тока, а реле позволяют управлять мощными потребителями.",how:"При превышении допустимого тока предохранитель разрывает цепь. Реле замыкает силовую цепь по управляющему сигналу.",symptoms:["не работает потребитель","предохранитель снова перегорает","не включается реле"],checks:["предохранитель","питание","масса","управляющий сигнал","короткое замыкание"],tools:"Мультиметр, контрольная лампа, схема предохранителей.",practice:"Если новый предохранитель снова перегорает, нужно искать причину перегрузки, а не ставить предохранитель большего номинала."}
        ]
    },

    diagnostics: {
        title: "💻 Диагностика",
        topics: [
            {id:"obd",title:"OBD-II",icon:"💻",theory:"OBD-II — диагностический интерфейс, через который можно получать доступные электронные данные автомобиля.",how:"Сканер связывается с блоками управления и получает коды неисправностей и параметры, которые поддерживает конкретный автомобиль.",symptoms:["Check Engine","электронные ошибки","необычные параметры"],checks:["коды ошибок","pending-коды","Freeze Frame","Live Data"],tools:"OBD-II сканер.",practice:"Код ошибки — это направление поиска, а не готовый приговор конкретной детали."},
            {id:"live_data",title:"Live Data",icon:"📊",theory:"Live Data показывает текущие параметры электронных систем в реальном времени.",how:"Сканер получает PID от блока управления. Значение нужно оценивать в контексте температуры, нагрузки и режима работы.",symptoms:["параметр вне ожидаемого диапазона","нестабильные значения","несоответствие заданного и фактического"],checks:["холодный запуск","прогретый двигатель","холостой ход","нагрузка"],tools:"OBD-II сканер.",practice:"Один параметр редко даёт полный диагноз. Полезнее смотреть взаимосвязанные параметры."},
            {id:"freeze_frame",title:"Freeze Frame",icon:"📸",theory:"Freeze Frame сохраняет доступные параметры в момент регистрации определённых ошибок.",how:"Блок управления фиксирует часть данных: например обороты, нагрузку и температуру.",symptoms:["плавающая неисправность","ошибка возникает только под нагрузкой","периодический Check Engine"],checks:["обороты","температура","нагрузка","скорость","сопутствующие коды"],tools:"OBD-II сканер.",practice:"Freeze Frame помогает воспроизвести условия, при которых появилась неисправность."},
            {id:"misfire_codes",title:"Коды пропусков P0300–P030x",icon:"📟",theory:"Коды серии P030x указывают на обнаруженные пропуски воспламенения, а последние цифры могут указывать на конкретный цилиндр.",how:"ЭБУ отслеживает изменения вращения коленвала и по ним определяет нестабильность работы цилиндров.",symptoms:["троение","рывки","Check Engine","потеря мощности"],checks:["свеча","катушка","форсунка","компрессия","проводка","подсос воздуха"],tools:"OBD-II, мультиметр, компрессометр.",practice:"P0301, например, говорит о цилиндре №1, но не говорит автоматически, какая деталь неисправна."},
            {id:"diagnosis_order",title:"Алгоритм диагностики",icon:"🧠",theory:"Хорошая диагностика строится от жалобы к подтверждённой причине: симптомы → базовые проверки → измерения → подтверждение неисправности.",how:"Сначала выбираются простые и информативные проверки, затем более глубокие, если причина не подтверждена.",symptoms:["несколько возможных причин","неоднозначные результаты","повторная неисправность после ремонта"],checks:["жалоба клиента","визуальный осмотр","коды","измерения","подтверждение результата"],tools:"Инструмент зависит от неисправности.",practice:"В игре именно этот принцип будет определять доступные действия диагностики и расход энергии."}
        ]
    },

    fuel: {
        title: "⛽ Топливная система",
        topics: [
            {id:"fuel_system",title:"Топливная система",icon:"⛽",theory:"Топливная система хранит, подаёт и дозирует топливо для двигателя.",how:"Насос обеспечивает подачу, фильтрация очищает топливо, а форсунки дозируют его в соответствии с системой управления.",symptoms:["трудный запуск","провалы","потеря мощности","бедная или богатая смесь"],checks:["давление топлива","утечки","коррекции","работа форсунок"],tools:"Манометр давления топлива, OBD-II, мультиметр.",practice:"Давление топлива измеряют по процедуре, предусмотренной конструкцией автомобиля."},
            {id:"injectors",title:"Форсунки",icon:"💉",theory:"Форсунка дозирует топливо и распыляет его в нужный момент.",how:"ЭБУ управляет временем открытия форсунки, а качество распыла зависит от состояния самой форсунки и условий работы системы.",symptoms:["троение","трудный запуск","неравномерная работа","повышенный расход"],checks:["коррекции","баланс форсунок","электрическая цепь","давление топлива"],tools:"OBD-II, мультиметр, стенд/тестер форсунок при необходимости.",practice:"Перед заменой форсунки важно исключить проблемы питания и давления топлива."},
            {id:"fuel_pressure",title:"Давление топлива",icon:"📈",theory:"Двигателю требуется определённое давление топлива, зависящее от конструкции системы.",how:"Давление создаётся насосом и контролируется регуляцией системы. Отклонение влияет на количество топлива.",symptoms:["плохой запуск","провалы","потеря мощности","бедная смесь"],checks:["давление на запуске","давление на холостом ходу","поведение под нагрузкой","остаточное давление при необходимости"],tools:"Манометр или штатный диагностический параметр.",practice:"Сравнивать нужно с нормой конкретной системы, а не с универсальным числом."}
        ]
    },

    suspension: {
        title: "🛞 Подвеска",
        topics: [
            {id:"shock_absorber",title:"Амортизаторы",icon:"🛞",theory:"Амортизатор гасит колебания подвески и помогает колесу сохранять контакт с дорогой.",how:"Сопротивление движению штока преобразует энергию колебаний в тепло.",symptoms:["раскачка","клевки","плохая устойчивость","течь"],checks:["утечки","крепления","люфт","поведение автомобиля","стенд при наличии"],tools:"Подъёмник, монтажный инструмент, диагностический стенд.",practice:"Течь и слабая эффективность амортизатора оцениваются вместе с состоянием других элементов подвески."},
            {id:"ball_joint",title:"Шаровая опора",icon:"🔩",theory:"Шаровая опора обеспечивает подвижное соединение элементов подвески.",how:"Шаровой палец может перемещаться относительно корпуса, сохраняя связь деталей подвески.",symptoms:["стук","люфт","неравномерный износ шин","изменение поведения автомобиля"],checks:["люфт","пыльник","крепления","состояние посадочных мест"],tools:"Подъёмник, монтажка и специальный инструмент при необходимости.",practice:"Критический люфт в элементах подвески требует внимательной оценки из-за влияния на безопасность."},
            {id:"stabilizer",title:"Стойки и втулки стабилизатора",icon:"🔧",theory:"Стабилизатор поперечной устойчивости уменьшает крен кузова, а стойки и втулки соединяют его с подвеской.",how:"При работе подвески стабилизатор перераспределяет нагрузку между сторонами автомобиля.",symptoms:["стук на неровностях","люфт","скрип","износ втулок"],checks:["люфт стоек","состояние втулок","крепления","симметрия износа"],tools:"Подъёмник, монтажный инструмент.",practice:"При стуке важно проверять несколько элементов подвески, потому что похожий звук может иметь разные причины."}
        ]
    },

    brakes: {
        title: "🛑 Тормоза",
        topics: [
            {id:"brake_pads",title:"Тормозные колодки",icon:"🛑",theory:"Колодки создают трение о диск или барабан и преобразуют кинетическую энергию автомобиля в тепло.",how:"При нажатии на педаль тормозной механизм прижимает колодки к рабочей поверхности.",symptoms:["скрип","металлический шум","увеличенный путь торможения","неравномерный износ"],checks:["толщина","состояние поверхности","равномерность износа","свободный ход механизма"],tools:"Подъёмник, штангенциркуль, набор инструмента.",practice:"При замене колодок проверяют состояние дисков и механизмов, а не только сам комплект колодок."},
            {id:"brake_discs",title:"Тормозные диски",icon:"💿",theory:"Тормозной диск является рабочей поверхностью для колодок и отводит часть тепла.",how:"Колодки зажимают вращающийся диск, создавая тормозной момент.",symptoms:["вибрация при торможении","биение","глубокие борозды","перегрев"],checks:["толщина","биение","поверхность","трещины","равномерность износа"],tools:"Индикатор часового типа, микрометр/штангенциркуль, набор инструмента.",practice:"Решение о замене диска принимается по его состоянию и допустимым параметрам конкретного автомобиля."},
            {id:"abs",title:"ABS",icon:"🚨",theory:"ABS предотвращает длительную блокировку колёс при интенсивном торможении.",how:"Датчики скорости колёс передают данные блоку ABS, который управляет давлением в тормозных контурах.",symptoms:["лампа ABS","ошибки датчика","неправильная работа ABS"],checks:["коды ошибок","скорости колёс","датчики","проводка","разъёмы"],tools:"OBD-II/ABS-сканер, мультиметр.",practice:"Ошибка ABS может быть связана как с датчиком, так и с проводкой, кольцом или блоком управления."}
        ]
    },

    transmission: {
        title: "⚙️ Трансмиссия",
        topics: [
            {id:"manual_transmission",title:"МКПП",icon:"⚙️",theory:"Механическая коробка передач изменяет передаточное отношение между двигателем и колёсами, а передачи выбирает водитель.",how:"Шестерни разных передаточных отношений соединяются с валами через механизм переключения.",symptoms:["хруст","сложное включение передач","выбивание передачи","шум"],checks:["уровень/состояние масла по конструкции","механизм переключения","сцепление","утечки"],tools:"Подъёмник, набор инструмента, диагностический инструмент по задаче.",practice:"Проблема включения передачи не всегда означает неисправность самой коробки — проверяется и сцепление."},
            {id:"automatic_transmission",title:"АКПП",icon:"⚙️",theory:"Автоматическая коробка передач автоматически выбирает передаточное отношение и использует механическую, гидравлическую и электронную части.",how:"В зависимости от типа используются гидротрансформатор, фрикционы, планетарные механизмы и электронное управление.",symptoms:["удары","пробуксовка","задержка включения","неправильные переключения"],checks:["ошибки","уровень/состояние жидкости по регламенту","температура","параметры переключений"],tools:"OBD-II, диагностический сканер, подъёмник.",practice:"Уровень и процедура проверки жидкости зависят от конкретной коробки."},
            {id:"clutch",title:"Сцепление",icon:"🔧",theory:"Сцепление позволяет временно разъединять двигатель и трансмиссию и плавно передавать крутящий момент.",how:"При нажатии на педаль механизм размыкается, а при отпускании диски снова прижимаются.",symptoms:["пробуксовка","рывки","шум","сложное включение передач"],checks:["свободный ход","пробуксовка","работа привода","состояние диска и корзины при разборке"],tools:"Подъёмник, диагностический инструмент, набор для демонтажа коробки.",practice:"Замена сцепления — трудоёмкая работа, и в игре её цена будет зависеть от нормо-часов и типа автомобиля."}
        ]
    },

    cooling: {
        title: "💧 Охлаждение",
        topics: [
            {id:"coolant",title:"Охлаждающая жидкость",icon:"💧",theory:"Охлаждающая жидкость переносит тепло от двигателя к радиатору.",how:"Жидкость циркулирует по каналам двигателя и радиатора, а система поддерживает заданный температурный режим.",symptoms:["перегрев","утечки","низкий уровень","запах ОЖ"],checks:["уровень","утечки","давление системы","температура"],tools:"Тестер давления, OBD-II, ареометр/рефрактометр при необходимости.",practice:"Уровень ОЖ проверяют на холодном двигателе по процедуре автомобиля."},
            {id:"thermostat",title:"Термостат",icon:"🌡️",theory:"Термостат регулирует поток охлаждающей жидкости между малым и большим кругом циркуляции.",how:"При изменении температуры клапан термостата открывает или ограничивает путь к радиатору.",symptoms:["долгий прогрев","перегрев","температура нестабильна"],checks:["температура по OBD","динамика прогрева","патрубки","поведение системы"],tools:"OBD-II, термометр, набор инструмента.",practice:"Неисправный термостат может быть как причиной перегрева, так и слишком низкой рабочей температуры."},
            {id:"cooling_fan",title:"Вентилятор охлаждения",icon:"🌀",theory:"Вентилятор увеличивает поток воздуха через радиатор, особенно на малой скорости и при остановке.",how:"Вентилятор включается по команде системы управления через соответствующий модуль, реле или блок.",symptoms:["перегрев в пробке","вентилятор не включается","слишком частое включение"],checks:["команда включения","питание","масса","предохранители","мотор вентилятора"],tools:"Мультиметр, OBD-II, контрольная лампа.",practice:"Если вентилятор не работает, проверяется вся электрическая цепь, а не только мотор."}
        ]
    },

    engine_types: {
        title: "⚙️ Типы двигателей",
        topics: [
            {id:"r3",title:"Рядный R3",icon:"3️⃣",theory:"Три цилиндра расположены в одном ряду. Такая конструкция компактна и часто используется на небольших автомобилях.",how:"Один ряд цилиндров упрощает компоновку, но двигатель может быть более чувствителен к состоянию опор и систем управления из-за особенностей балансировки.",symptoms:["вибрации","пропуски","потеря мощности","проблемы наддува у турбоверсий"],checks:["зажигание","смесь","опоры","компрессия"],tools:"OBD-II, компрессометр, стандартный инструмент.",practice:"Количество цилиндров влияет на сложность, количество деталей и трудоёмкость работ."},
            {id:"r4",title:"Рядный R4",icon:"4️⃣",theory:"Четыре цилиндра расположены в одном ряду. Это одна из самых распространённых компоновок.",how:"Конструкция относительно компактна и хорошо подходит для обучения базовым операциям.",symptoms:["пропуски","проблемы ГРМ","перегрев","утечки"],checks:["OBD","зажигание","ГРМ","охлаждение"],tools:"Стандартный инструмент, OBD-II, компрессометр.",practice:"В игре R4 будет одной из первых платформ для обучения серьёзному ремонту."},
            {id:"r5",title:"Рядный R5",icon:"5️⃣",theory:"Пять цилиндров расположены в одном ряду.",how:"Компоновка длиннее R4 и имеет свои особенности балансировки и компоновки навесного оборудования.",symptoms:["пропуски","проблемы впрыска","ГРМ","утечки"],checks:["зажигание/впрыск","компрессия","ГРМ","охлаждение"],tools:"OBD-II, компрессометр, стандартный инструмент.",practice:"Больше цилиндров — больше потенциальных точек диагностики и выше трудоёмкость некоторых работ."},
            {id:"r6",title:"Рядный R6",icon:"6️⃣",theory:"Шесть цилиндров расположены в одном ряду. Такая компоновка отличается плавностью работы, но двигатель получается длинным.",how:"Все цилиндры находятся в одной ГБЦ, если конструкция стандартная, но доступ к задней/передней части двигателя может зависеть от автомобиля.",symptoms:["пропуски","ГРМ","охлаждение","утечки"],checks:["цилиндры по отдельности","ГРМ","система охлаждения","впрыск/зажигание"],tools:"OBD-II, компрессометр, специализированный инструмент.",practice:"Работа с R6 обычно требует больше времени, чем аналогичная базовая операция на R4."},
            {id:"v6",title:"V6",icon:"🔻",theory:"Шесть цилиндров расположены двумя рядами по три. Конструкция компактнее длинного R6 по длине двигателя.",how:"Две стороны двигателя могут иметь отдельные компоненты и более сложный доступ к некоторым деталям.",symptoms:["пропуски по банкам/цилиндрам","ГРМ","утечки","проблемы впуска и выпуска"],checks:["диагностика цилиндров","обе стороны двигателя","ГРМ","впуск/выпуск"],tools:"OBD-II, стандартный и специализированный инструмент.",practice:"Цена и нормо-часы в игре будут выше, чем на типовых R4, для части операций."},
            {id:"v8",title:"V8",icon:"8️⃣",theory:"Восемь цилиндров расположены двумя рядами по четыре.",how:"Две банки цилиндров увеличивают количество компонентов и операций при обслуживании.",symptoms:["пропуски","зажигание","ГРМ","утечки","проблемы выпуска"],checks:["каждая банка","цилиндры","синхронизация","впрыск/зажигание"],tools:"OBD-II и расширенный набор инструмента.",practice:"Некоторые работы на V8 получают повышающий коэффициент трудоёмкости."},
            {id:"v10",title:"V10",icon:"🔟",theory:"Десять цилиндров расположены двумя рядами по пять.",how:"Большое число цилиндров и компонентов увеличивает объём диагностики и ремонта.",symptoms:["пропуски","проблемы впрыска","зажигание","ГРМ","охлаждение"],checks:["цилиндры по группам","обе банки","ГРМ","температура"],tools:"Профессиональный инструмент и диагностика.",practice:"V10 относится к более поздним уровням карьеры мастера."},
            {id:"v12",title:"V12",icon:"🔱",theory:"Двенадцать цилиндров расположены двумя рядами по шесть. Такая силовая установка имеет большое количество компонентов и высокую стоимость обслуживания.",how:"Две банки и сложная компоновка увеличивают число операций, деталей и требования к доступу.",symptoms:["пропуски","проблемы ГРМ","впрыск","зажигание","охлаждение"],checks:["обе банки","все связанные системы","синхронизация","температура"],tools:"Профессиональный инструмент, диагностика и специальные приспособления.",practice:"В игре V12 будет одним из дорогих и трудоёмких вариантов ремонта."},
            {id:"boxer6",title:"Оппозитный Boxer-6",icon:"↔️",theory:"Шесть цилиндров расположены горизонтально противоположно, по три с каждой стороны.",how:"Низкий центр тяжести — одно из преимуществ компоновки, но доступ к некоторым деталям может быть специфичным.",symptoms:["утечки","пропуски","охлаждение","зажигание","сложный доступ"],checks:["обе стороны","свечи","утечки","ГРМ"],tools:"Специализированный инструмент в зависимости от модели.",practice:"Некоторые операции требуют работы с обеих сторон двигателя."},
            {id:"wankel",title:"Роторный Wankel",icon:"🔺",theory:"Вместо обычных поршней используется вращающийся ротор. Рабочие камеры формируются внутри корпуса специальной формы.",how:"Ротор совершает вращательное движение и выполняет функции, которые в поршневом двигателе разделены между поршнями и клапанным механизмом.",symptoms:["низкая компрессия","проблемы уплотнений","зажигание","перегрев"],checks:["компрессия","зажигание","состояние уплотнений","температура"],tools:"Специализированный диагностический инструмент.",practice:"Роторные двигатели будут отдельной веткой обучения с собственными допусками."},
            {id:"diesel",title:"Дизель",icon:"🛢️",theory:"Дизельный двигатель воспламеняет топливо за счёт высокой температуры воздуха после сильного сжатия.",how:"Важную роль играют топливная аппаратура высокого давления, форсунки, свечи накаливания и наддув у соответствующих версий.",symptoms:["трудный холодный запуск","дымность","неровная работа","проблемы форсунок","недостаток мощности"],checks:["свечи накаливания","давление топлива","форсунки","OBD","наддув"],tools:"OBD-II, мультиметр, диагностический инструмент дизельных систем.",practice:"Дизельные работы будут иметь отдельные задания и проверки в обучении."}
        ]
    }
};

function getAllKnowledgeTopics() {
    const result = [];
    Object.entries(knowledgeBase).forEach(([categoryId, category]) => {
        category.topics.forEach(topic => {
            result.push({ ...topic, categoryId, categoryTitle: category.title });
        });
    });
    return result;
}

function ensureKnowledgeState() {
    if (!state.knowledge) state.knowledge = { studied: {}, version: 2 };
    if (!state.knowledge.studied) state.knowledge.studied = {};
}

function isKnowledgeStudied(id) {
    ensureKnowledgeState();
    return !!state.knowledge.studied[id];
}

function studyKnowledgeTopic(id) {
    ensureKnowledgeState();
    state.knowledge.studied[id] = true;
    save();
    showToast("📖 Тема изучена");
    openKnowledgeTopic(id);
}

function openKnowledgeMenu() {
    ensureKnowledgeState();
    const all = getAllKnowledgeTopics();
    const studied = all.filter(t => isKnowledgeStudied(t.id)).length;

    openModal(`
        <div class="knowledge-header">
            <div>
                <h2>📚 База знаний</h2>
                <p>Теория автомеханика, диагностика, устройство узлов и подготовка к практическим работам.</p>
            </div>
            <div class="knowledge-progress"><b>${studied}/${all.length}</b><span>изучено</span></div>
        </div>
        <div class="knowledge-category-grid">
            ${Object.entries(knowledgeBase).map(([id, c]) => {
                const done = c.topics.filter(t => isKnowledgeStudied(t.id)).length;
                return `<button class="knowledge-category" onclick="openKnowledgeCategory('${id}')">
                    <b>${c.title}</b><small>${done}/${c.topics.length} тем изучено</small>
                </button>`;
            }).join("")}
        </div>
        <div class="knowledge-search">
            <input id="knowledgeSearchInput" placeholder="🔎 Найти тему или симптом">
            <button class="action-button knowledge-search-button" onclick="runKnowledgeSearch()">Найти</button>
        </div>
        <div class="knowledge-future">
            <b>🎓 Обучение и допуски</b>
            <p>${state.training?.timing ? "⛓️ Допуск к ГРМ получен." : "⛓️ Для работы с ГРМ потребуется тест без ошибок."}</p>
            <button class="action-button knowledge-study-button" onclick="openTrainingTests()">📝 Тесты и допуски</button>
        </div>
    `);
}

function openKnowledgeCategory(id) {
    const category = knowledgeBase[id];
    if (!category) return;
    const done = category.topics.filter(t => isKnowledgeStudied(t.id)).length;

    openModal(`
        <h2>${category.title}</h2>
        <p>Изучено: <b>${done}/${category.topics.length}</b></p>
        <div class="knowledge-topic-list">
            ${category.topics.map(t => `
                <button class="knowledge-topic ${isKnowledgeStudied(t.id) ? "studied" : ""}" onclick="openKnowledgeTopic('${t.id}')">
                    <span>${t.icon}</span>
                    <div><b>${t.title}</b><small>${isKnowledgeStudied(t.id) ? "✅ Изучено" : "📖 Изучить тему"}</small></div>
                </button>
            `).join("")}
        </div>
        <button class="action-button" onclick="openKnowledgeMenu()">← Все разделы</button>
    `);
}

function openKnowledgeTopic(id) {
    const topic = getAllKnowledgeTopics().find(t => t.id === id);
    if (!topic) return;

    const studied = isKnowledgeStudied(id);
    openModal(`
        <div class="knowledge-article">
            <div class="knowledge-article-title">
                <h2>${topic.icon} ${topic.title}</h2>
                ${studied ? `<span class="knowledge-badge">✅ Изучено</span>` : ""}
            </div>

            <div class="knowledge-block">
                <h3>📖 Теория</h3>
                <p>${topic.theory}</p>
            </div>
            <div class="knowledge-block">
                <h3>⚙️ Как работает</h3>
                <p>${topic.how}</p>
            </div>
            <div class="knowledge-block">
                <h3>⚠️ Признаки неисправности</h3>
                <ul>${topic.symptoms.map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
            <div class="knowledge-block">
                <h3>🔍 Что проверять</h3>
                <ol>${topic.checks.map(x => `<li>${x}</li>`).join("")}</ol>
            </div>
            <div class="knowledge-block">
                <h3>🧰 Инструменты</h3>
                <p>${topic.tools}</p>
            </div>
            <div class="knowledge-practice">
                <h3>🎓 Практика мастера</h3>
                <p>${topic.practice}</p>
            </div>

            <div class="knowledge-future">
                <b>🔒 Связь с обучением</b>
                <p>Эта тема будет использоваться в тестах и допусках. Для сложных работ недостаточно просто открыть статью — нужно будет подтвердить знания.</p>
            </div>
        </div>
        ${studied ? "" : `<button class="action-button knowledge-study-button" onclick="studyKnowledgeTopic('${id}')">📖 Изучить и отметить тему</button>`}
        <button class="action-button secondary-button" onclick="openKnowledgeCategory('${topic.categoryId}')">← Назад к разделу</button>
    `);
}

function runKnowledgeSearch() {
    const q = (document.getElementById("knowledgeSearchInput")?.value || "").toLowerCase().trim();
    if (!q) return openKnowledgeMenu();

    const result = getAllKnowledgeTopics().filter(t => {
        const haystack = [t.title, t.theory, t.how, t.tools, t.practice, ...t.symptoms, ...t.checks].join(" ").toLowerCase();
        return haystack.includes(q);
    });

    openModal(`
        <h2>🔎 Результаты поиска</h2>
        ${result.length ? `<div class="knowledge-topic-list">${result.map(t => `
            <button class="knowledge-topic" onclick="openKnowledgeTopic('${t.id}')">
                <span>${t.icon}</span><div><b>${t.title}</b><small>${t.categoryTitle}</small></div>
            </button>`).join("")}</div>` : `<div class="diagnosis-result">Ничего не найдено. Попробуй название узла или симптом.</div>`}
        <button class="action-button" onclick="openKnowledgeMenu()">← База знаний</button>
    `);
}

/* Старый интерфейс совместимости: другие части игры могут вызывать openKnowledge(category). */
function openKnowledge(category) {
    openKnowledgeCategory(category);
}


/* =========================================================
   СОСТОЯНИЕ ИГРЫ
========================================================= */

const defaultState = {
    money: 15000,
    reputation: 0,
    premium: 0,
    level: 1,
    xp: 0,

    day: 1,
    time: 480,

    equipment: 100,

    garage: {
        level: 1,
        posts: 1
    },

    currentOrder: null,

    history: [],

    lastProblemId: null,

    knowledge: {
        studied: {},
        version: 2
    },

    training: {
        timing: false
    },
    tools: {
        basic: true, obd: false, multimeter: false, tire_gauge: false,
        manometer: false, smoke: false, lift: false, alignment: false, balancer: false
    }
};


let state =
    JSON.parse(
        localStorage.getItem(SAVE_KEY) ||
        localStorage.getItem("auto_service_v03") ||
        "null"
    ) || structuredClone(defaultState);

state.premium = Number.isFinite(Number(state.premium)) ? Math.max(0, Number(state.premium)) : 0;
state.tools = Object.assign({}, defaultState.tools, state.tools || {});
state.tools.basic = true;

ensureKnowledgeState();


/* =========================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
========================================================= */

const $ = id =>
    document.getElementById(id);


function save() {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(state)
    );
}


function money(value) {

    return new Intl.NumberFormat(
        "ru-RU"
    ).format(Math.round(value)) + " ₽";
}


function random(arr) {

    return arr[
        Math.floor(
            Math.random() * arr.length
        )
    ];
}


function randomInt(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}


function timeText(minutes) {

    const h =
        Math.floor(minutes / 60);

    const m =
        minutes % 60;

    return (
        String(h).padStart(2, "0")
        + ":" +
        String(m).padStart(2, "0")
    );
}


function addTime(minutes) {

    state.time += minutes;

    if (
        state.time >= 600
    ) {

        state.time = 600;

        showToast(
            "⏰ Рабочий день закончился"
        );
    }
}


function useEquipment(amount) {

    state.equipment =
        Math.max(
            0,
            state.equipment - amount
        );
}


function addXP(amount) {

    state.xp += amount;

    let need =
        100 +
        (state.level - 1) * 50;

    while (
        state.xp >= need
    ) {

        state.xp -= need;

        state.level++;

        addReputation(3);

        showToast(
            `🎉 Новое мастерство: уровень ${state.level}`
        );

        need =
            100 +
            (state.level - 1) * 50;
    }
}


function addReputation(amount) {

    // Один игровой результат не может дать больше +5/-5 репутации.
    const delta = Math.max(-5, Math.min(5, Math.round(amount)));
    state.reputation += delta;

    state.reputation =
        Math.max(
            0,
            Math.min(100, state.reputation)
        );

    return delta;
}


/* =========================================================
   ГЕНЕРАТОР ЗАКАЗА
========================================================= */

function generateOrder() {

    let problem;
    let attempts = 0;
    const eligibleProblems = problems.filter(p => {
        if ((p.minLevel || 1) > state.level) return false;
        const req = qualificationForProblem(p);
        return !req || hasQualification(req);
    });
    const pool = eligibleProblems.length ? eligibleProblems : problems;

    do {
        problem = random(pool);
        attempts++;
    } while (problem.id === state.lastProblemId && attempts < 10);


    const car =
        random(cars);

    const client =
        random(clients);

    const year =
        random(car.years);

    const mileage =
        randomInt(70000, 260000);

    const complaint =
        random(problem.complaints);

    const correctCause =
        randomWeighted(problem.causes);


    const scenario = {

        id:
            Date.now()
            + Math.random(),

        car: {

            brand:
                car.brand,

            model:
                car.model,

            year:
                year,

            mileage:
                mileage,

            icon:
                car.icon,

            engine:
                random(["R4 бензин","R4 дизель","R5 бензин","R6 бензин","V6","V8","Boxer-6"])
        },

        difficulty: problem.difficulty || "🟢 Простая",
        requiredLevel: problem.minLevel || 1,
        requiredTraining: qualificationForProblem(problem),

        client: client,

        problem: problem,

        complaint: complaint,

        correctCause:
            correctCause.id,

        diagnosisPrice:
            randomInt(600, 1200),

        checks: {},

        history: [],

        diagnosisComplete: false,

        selectedCause: null,

        repair: null,

        agreed: false,

        completed: false,

        knowledgeUsed: false,

        diagnosisPaid: false,
        partOptions: [],
        selectedPartId: null
    };


    Object.keys(
        problem.checks
    ).forEach(key => {

        scenario.checks[key] =
            problem.checks[key];
    });


    state.lastProblemId =
        problem.id;

    state.currentOrder =
        scenario;


    save();

    return scenario;
}


function randomWeighted(items) {

    const total =
        items.reduce(
            (sum, item) =>
                sum + item.probability,
            0
        );

    let value =
        Math.random() * total;

    for (
        const item of items
    ) {

        value -= item.probability;

        if (
            value <= 0
        ) {

            return item;
        }
    }

    return items[0];
}


/* =========================================================
   МОДАЛЬНОЕ ОКНО
========================================================= */

function openModal(html) {

    $("modalContent").innerHTML =
        html;

    $("modal").classList.add("show");
}


function closeModal() {

    $("modal").classList.remove("show");
}


/* =========================================================
   УВЕДОМЛЕНИЯ
========================================================= */

function showToast(text) {

    const toast =
        $("toast");

    toast.textContent =
        text;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            2500
        );
}


/* =========================================================
   RENDER
========================================================= */

function renderBase() {

    $("money").textContent =
        money(state.money);

    $("reputation").textContent =
        state.reputation;

    $("level").textContent =
        state.level;


    const need =
        100 +
        (state.level - 1) * 50;

    $("xp").textContent =
        `${state.xp} / ${need}`;

    const xpBar = $("xpBar");
    if (xpBar) xpBar.style.width = `${Math.max(0, Math.min(100, (state.xp / need) * 100))}%`;


    const order =
        state.currentOrder;


    if (order) {

        $("carName").textContent =
            `${order.car.brand} ${order.car.model}`;

        $("carProblem").textContent =
            `«${order.complaint}»`;

    } else {

        $("carName").textContent =
            "Нет автомобиля";

        $("carProblem").textContent =
            "Ожидание нового клиента";
    }


    const garageLevel =
        document.querySelector(
            ".garage-level"
        );

    if (garageLevel) {

        garageLevel.textContent =
            `Уровень ${state.garage.level}`;
    }


    const goalMoney = $("goalMoney");
    if (goalMoney) goalMoney.textContent = `${money(state.money)} / 25 000 ₽`;

    const goalXp = $("goalXp");
    if (goalXp) goalXp.textContent = `${state.xp} / ${need}`;

    const garageStats =
        document.querySelectorAll(
            ".garage-stats b"
        );

    if (
        garageStats.length >= 3
    ) {

        garageStats[0].textContent =
            state.garage.posts;

        garageStats[1].textContent =
            `Ресурс ${state.equipment}%`;

        garageStats[2].textContent =
            "1";
    }
}


/* =========================================================
   НАЧАЛО ДИАГНОСТИКИ
========================================================= */

function startDiagnosis() {

    if (
        !state.currentOrder
    ) {

        generateOrder();

        render();
    }


    openDiagnosis();
}


function openDiagnosis() {

    const order =
        state.currentOrder;

    const problem =
        order.problem;


    let html = `

        <h2>🔍 Диагностика</h2>

        <p>
            <b>
                ${order.car.icon}
                ${order.car.brand}
                ${order.car.model}
            </b>
        </p>

        <p>
            ${order.car.year} год,
            пробег
            ${order.car.mileage.toLocaleString("ru-RU")}
            км<br>
            🔧 Двигатель: <b>${order.car.engine}</b>
        </p>

        <div class="diagnosis-result">
            ${order.difficulty} · требуется мастерство: <b>${order.requiredLevel}+</b>${qualificationRequirementText(order.problem) ? `<br>${qualificationRequirementText(order.problem)}` : ""}
        </div>

        <div class="diagnosis-result">

            👤 <b>Клиент:</b>
            ${order.client.name}<br>

            💬 <b>Тип:</b>
            ${order.client.type}<br><br>

            «${order.complaint}»

        </div>

        <div class="stat-row">
            <span>⏰ Время</span>
            <b>${timeText(state.time)}</b>
        </div>

        <div class="stat-row">
            <span>🧰 Оборудование</span>
            <b>${state.equipment}%</b>
        </div>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>${money(order.diagnosisPrice)}</b>
        </div>

        <h3>🔎 Проверки</h3>

        <div class="diagnosis-list">
    `;


    Object.keys(
        order.checks
    ).forEach(key => {

        const check =
            order.checks[key];

        const used =
            order.history.some(
                item =>
                    item.key === key
            );


        html += `

            <button
                class="diagnosis-button"
                ${used ? "disabled" : ""}
                onclick="performCheck('${key}')">

                ${check.name}

                <br>

                <small>
                    ⏱️ ${check.time} мин
                    · 🧰 −${check.equipment}
                </small>

            </button>

        `;
    });


    html += `
        </div>

        ${renderHistory(order)}

        <button
            class="action-button"
            onclick="openAnalysis()">

            🧠 Перейти к анализу

        </button>
    `;


    openModal(html);
}


/* =========================================================
   ПРОВЕРКА
========================================================= */

function performCheck(key) {

    const order =
        state.currentOrder;

    const check =
        order.checks[key];


    if (!check) {

        return;
    }


    if (
        order.history.some(
            item =>
                item.key === key
        )
    ) {

        showToast(
            "Эта проверка уже выполнена"
        );

        return;
    }


    if(check.toolId && !hasTool(check.toolId)) {
        const tool=toolById(check.toolId);
        if(tool && state.level < tool.level) showToast(`🔒 Нужен уровень мастерства ${tool.level} для инструмента «${tool.name}»`);
        else if(tool) showToast(`🧰 Сначала купи: ${tool.name}`);
        openDiagnosis(); return;
    }

    if (
        state.equipment <
        check.equipment
    ) {

        showToast(
            "🧰 Недостаточно ресурса оборудования"
        );

        return;
    }


    addTime(
        check.time
    );

    useEquipment(
        check.equipment
    );


    const result =
        check.results[
            order.correctCause
        ];


    order.history.push({

        key:
            key,

        name:
            check.name,

        result:
            result,

        time:
            check.time,

        equipment:
            check.equipment
    });


    save();

    openDiagnosis();
}


/* =========================================================
   ИСТОРИЯ
========================================================= */

function renderHistory(order) {

    if (
        order.history.length === 0
    ) {

        return `

            <div class="diagnosis-result">

                📋 Пока ни одной проверки
                не проведено.

            </div>

        `;
    }


    let html = `

        <div class="diagnosis-result">

            <b>📋 История диагностики</b>

    `;


    order.history.forEach(
        (item, index) => {

            html += `

                <div style="
                    margin-top:12px;
                    padding-top:12px;
                    border-top:1px solid #333;
                ">

                    <b>
                        ${index + 1}.
                        ${item.name}
                    </b>

                    <br>

                    <small>
                        ⏱️ −${item.time} мин
                        · 🧰 −${item.equipment}
                    </small>

                    <p>
                        ${item.result}
                    </p>

                </div>

            `;
        }
    );


    html += `
        </div>
    `;

    return html;
}


/* =========================================================
   АНАЛИЗ
========================================================= */

function openAnalysis() {

    const order =
        state.currentOrder;


    if (
        order.history.length === 0
    ) {

        showToast(
            "Сначала проведи диагностику"
        );

        return;
    }


    let html = `

        <h2>🧠 Анализ неисправности</h2>

        <p>
            Изучи результаты и выбери
            наиболее вероятную причину.
        </p>

        ${renderHistory(order)}

        <h3>Возможные причины:</h3>

        <div class="diagnosis-list">
    `;


    order.problem.causes
        .forEach(cause => {

            html += `

                <button
                    class="diagnosis-button"
                    onclick="chooseDiagnosis('${cause.id}')">

                    ${cause.name}

                </button>

            `;
        });


    html += `

        </div>

        <button
            class="action-button"
            onclick="openKnowledgeMenu()">

            📚 Открыть базу знаний

        </button>

    `;


    openModal(html);
}


/* =========================================================
   ДИАГНОЗ
========================================================= */

function chooseDiagnosis(causeId) {

    const order =
        state.currentOrder;


    if (
        causeId !==
        order.correctCause
    ) {

        addReputation(-2);

        addXP(5);

        save();


        openModal(`

            <h2>❌ Диагноз не подтверждён</h2>

            <p>
                Выбранная причина не соответствует
                результатам текущей диагностики.
            </p>

            <div class="diagnosis-result">

                ⭐ Репутация −2<br>
                📈 Опыт +5

            </div>

            <p>
                Можно продолжить диагностику
                и собрать дополнительные данные.
            </p>

            <button
                class="action-button"
                onclick="openDiagnosis()">

                🔍 Продолжить диагностику

            </button>

        `);

        return;
    }


    order.selectedCause =
        causeId;

    order.diagnosisComplete =
        true;


    addXP(20);

    save();

    openRepairAgreement();
}


/* =========================================================
   СОГЛАСОВАНИЕ РЕМОНТА
========================================================= */

function getPartOptions(repair) {
    if(repair.serviceOnly) return [{ id:"service", name:repair.name, supplier:"Услуга автосервиса", quality:"Регулировка / работа", cost:0, reliability:0.99, reputationRisk:0, icon:"📐" }];
    const base = repair.partCost;
    return [
        { id:"original", name:"Оригинальная деталь", supplier:"Официальный поставщик", quality:"Оригинал", cost:base, reliability:0.98, reputationRisk:0, icon:"🟢" },
        { id:"premium", name:"Качественный аналог", supplier:"Проверенный поставщик", quality:"Высокое качество", cost:Math.round(base*0.72), reliability:0.91, reputationRisk:1, icon:"🔵" },
        { id:"budget", name:"Бюджетный аналог", supplier:"Эконом-сегмент", quality:"Бюджет", cost:Math.round(base*0.48), reliability:0.78, reputationRisk:3, icon:"🟡" }
    ];
}

function openRepairAgreement() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=getPartOptions(repair);
    order.partOptions=options;
    save();

    openModal(`
        <h2>🤝 Согласование с клиентом</h2>
        <p>Диагноз подтверждён. Теперь ты показываешь клиенту варианты запчасти. <b>Выбирать будет клиент</b>, а после его выбора ты сможешь установить свою наценку.</p>
        <div class="diagnosis-result">
            👤 ${order.client.name} · ${order.client.type}<br>
            💰 Чувствительность к цене: ${order.client.priceSensitivity>0.75?'высокая':order.client.priceSensitivity>0.55?'средняя':'низкая'}<br>
            ⏱️ Норма времени: <b>${(repair.time/60).toFixed(1)} н/ч</b><br>
            🔧 Работа: <b>${money(repair.workCost)}</b>
        </div>
        <h3>🔩 Что можно предложить</h3>
        <div class="part-options readonly">
            ${options.map(part=>`
                <div class="part-option">
                    <div class="part-option-top">
                        <span class="part-icon">${part.icon}</span>
                        <div><b>${part.name}</b><small>${part.supplier}</small></div>
                        <strong>${money(part.cost)}</strong>
                    </div>
                    <div class="part-option-meta"><span>${part.quality}</span><span>Надёжность ${Math.round(part.reliability*100)}%</span></div>
                </div>`).join('')}
        </div>
        <button class="action-button" onclick="presentPartsToClient()">👤 Показать варианты клиенту</button>
        <button class="action-button secondary-button" onclick="openAnalysis()">← Вернуться к диагностике</button>
    `);
}

function presentPartsToClient() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    if(repair.serviceOnly){ order.selectedPartId=options[0].id; save(); openPartMarkup(); return; }
    const priceSensitivity=order.client.priceSensitivity;
    const weights=[
        Math.max(0.15,0.45-priceSensitivity*0.15),
        0.40,
        Math.max(0.15,0.15+priceSensitivity*0.70)
    ];
    const total=weights.reduce((a,b)=>a+b,0);
    let r=Math.random()*total, selected=options[0];
    for(let i=0;i<options.length;i++){r-=weights[i];if(r<=0){selected=options[i];break;}}
    order.selectedPartId=selected.id;
    save();

    openModal(`
        <h2>👤 Клиент сделал выбор</h2>
        <div class="customer-choice">
            <div class="customer-choice-icon">👤</div>
            <div><b>${order.client.name}</b><p>«${selected.id==='original'?'Хочу поставить оригинал, чтобы не возвращаться к этой проблеме.':selected.id==='premium'?'Давайте хороший аналог, но без переплаты за оригинал.':'Мне главное, чтобы ремонт был разумным по цене.'}»</p></div>
        </div>
        <div class="diagnosis-result">
            🔩 Выбрано: <b>${selected.name}</b><br>
            Закупочная цена: <b>${money(selected.cost)}</b><br>
            🔧 Работа: <b>${money(repair.workCost)}</b>
        </div>
        <p>Теперь установи свою наценку на выбранную деталь.</p>
        <button class="action-button" onclick="openPartMarkup()">💰 Установить наценку</button>
    `);
}

function openPartMarkup() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const selected=options.find(x=>x.id===order.selectedPartId)||options[0];

    openModal(`
        <h2>💰 Цена для клиента</h2>
        <div class="diagnosis-result">
            <b>${selected.name}</b><br>
            Закупка: ${money(selected.cost)}<br>
            Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>
            Работа: ${money(repair.workCost)}
        </div>
        <label class="field-label" for="markupPercent">${repair.serviceOnly?'Твоя наценка на услугу, %':'Твоя наценка на запчасть, %'}</label>
        <input id="markupPercent" class="price-input" type="number" min="0" max="150" step="1" value="20" oninput="updatePartOfferPreview()">
        <div id="partOfferPreview" class="offer-preview"></div>
        <button class="action-button" onclick="offerSelectedPart()">🤝 Озвучить цену клиенту</button>
        <button class="action-button secondary-button" onclick="openRepairAgreement()">← Вернуться к выбору</button>
    `);
    updatePartOfferPreview();
}

function updatePartOfferPreview() {
    const order=state.currentOrder;if(!order)return;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const part=options.find(x=>x.id===order.selectedPartId)||options[0];
    const markup=Math.max(0,Math.min(150,Number(document.getElementById('markupPercent')?.value||0)));
    const partPrice=repair.serviceOnly ? Math.round(repair.workCost*(1+markup/100)) : Math.round(part.cost*(1+markup/100));
    const total=repair.serviceOnly ? partPrice : partPrice+repair.workCost;
    const profit=repair.serviceOnly ? total : total-part.cost;
    const box=document.getElementById('partOfferPreview');if(!box)return;
    box.innerHTML=`
        <div class="stat-row"><span>Цена детали клиенту</span><b>${money(partPrice)}</b></div>
        <div class="stat-row"><span>Работа</span><b>${money(repair.workCost)}</b></div>
        <div class="stat-row"><span>Итого клиенту</span><b>${money(total)}</b></div>
        <div class="stat-row"><span>Прибыль с заказа</span><b>+${money(profit)}</b></div>`;
}

function offerSelectedPart() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const part=options.find(x=>x.id===order.selectedPartId)||options[0];
    const markup=Math.max(0,Math.min(150,Number(document.getElementById('markupPercent')?.value||0)));
    const partPrice=repair.serviceOnly ? Math.round(repair.workCost*(1+markup/100)) : Math.round(part.cost*(1+markup/100));
    const totalPrice=repair.serviceOnly ? partPrice : partPrice+repair.workCost;
    let chance=0.97-markup/180-order.client.priceSensitivity*0.18;
    if(part.id==='original')chance+=0.03;
    if(part.id==='budget')chance+=order.client.priceSensitivity*0.05;
    chance=Math.max(0.18,Math.min(0.97,chance));
    const accepted=Math.random()<chance;

    order.repair={name:repair.name,partName:part.name,partId:part.id,partCost:part.cost,partPrice,workCost:repair.workCost,time:repair.time,cost:repair.serviceOnly?0:part.cost+repair.workCost,price:totalPrice,profit:repair.serviceOnly?totalPrice:totalPrice-part.cost,markup,reliability:part.reliability,reputationRisk:part.reputationRisk,serviceOnly:!!repair.serviceOnly};

    if(!accepted){
        addReputation(-1);save();
        const suggested=Math.max(0, Math.round(markup*0.65));
        openModal(`<h2>🤔 Клиент сомневается</h2><div class="customer-choice"><div class="customer-choice-icon">👤</div><div><b>${order.client.name}</b><p>«Цена <b>${money(totalPrice)}</b> для меня высоковата. Если сможете сделать немного дешевле, я соглашусь.»</p></div></div><div class="diagnosis-result">Выбрана деталь: <b>${part.name}</b><br>Предложенная наценка: <b>${markup}%</b><br>💬 Клиент предлагает попробовать <b>${suggested}%</b>.</div><button class="action-button" onclick="acceptCounterOffer(${suggested})">🤝 Принять ${suggested}%</button><button class="action-button secondary-button" onclick="openPartMarkup()">💰 Изменить цену самому</button><button class="action-button secondary-button" onclick="finishDiagnosisOnly()">📋 Отложить ремонт</button>`);
        return;
    }
    order.agreed=true;save();
    openModal(`<h2>✅ Клиент согласовал цену</h2><div class="diagnosis-result"><b>${part.name}</b><br>Закупка: ${money(part.cost)}<br>Цена детали: ${money(partPrice)}<br>Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>Работа: ${money(repair.workCost)}<hr><b>Итого: ${money(totalPrice)}</b><br>Прибыль с заказа: <b>+${money(totalPrice-part.cost)}</b></div><button class="action-button" onclick="performRepair()">🔧 Выполнить ремонт</button>`);
}

function acceptCounterOffer(markup){
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const part=options.find(x=>x.id===order.selectedPartId)||options[0];
    const partPrice=repair.serviceOnly ? Math.round(repair.workCost*(1+markup/100)) : Math.round(part.cost*(1+markup/100));
    const totalPrice=repair.serviceOnly ? partPrice : partPrice+repair.workCost;
    const profit=repair.serviceOnly ? totalPrice : totalPrice-part.cost;
    order.repair={name:repair.name,partName:part.name,partId:part.id,partCost:part.cost,partPrice,workCost:repair.workCost,time:repair.time,cost:repair.serviceOnly?0:part.cost+repair.workCost,price:totalPrice,profit,markup,reliability:part.reliability,reputationRisk:part.reputationRisk,serviceOnly:!!repair.serviceOnly};
    order.agreed=true;
    save();
    openModal(`<h2>✅ Клиент согласовал</h2><div class="diagnosis-result"><b>${part.name}</b><br>Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>Цена детали: ${money(partPrice)}<br>Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>Работа: ${money(repair.workCost)}<hr><b>Итого: ${money(totalPrice)}</b><br>Прибыль: <b>+${money(profit)}</b></div><button class="action-button" onclick="performRepair()">🔧 Выполнить ремонт</button>`);
}

function performRepair() {

    const order =
        state.currentOrder;

    const repair =
        order.repair;


    if (
        state.equipment < 2
    ) {

        showToast(
            "🧰 Недостаточно ресурса оборудования"
        );

        return;
    }


    addTime(
        repair.time
    );

    useEquipment(2);


    state.money +=
        repair.profit;


    state.money +=
        order.diagnosisPrice;


    addXP(30);

    const reputationBefore = state.reputation;
    const reputationPlanned = 8 - (order.repair.reputationRisk || 0);
    addReputation(reputationPlanned);
    const reputationDelta = state.reputation - reputationBefore;


    order.completed =
        true;

    order.diagnosisPaid =
        true;


    state.history.push({

        car:
            `${order.car.brand} ${order.car.model}`,

        problem:
            order.problem.title,

        profit:
            repair.profit,

        day:
            state.day
    });


    save();

    render();


    openModal(`

        <h2>🔧 Ремонт выполнен</h2>

        <div class="stat-row">
            <span>Запчасть</span>
            <b>${order.repair?.partName || repair.name}</b>
        </div>

        <div class="stat-row">
            <span>⏱️ Время</span>
            <b>${repair.time} мин</b>
        </div>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>+${money(order.diagnosisPrice)}</b>
        </div>

        <div class="stat-row">
            <span>💵 Прибыль</span>
            <b>+${money(repair.profit)}</b>
        </div>

        <div class="stat-row">
            <span>⭐ Репутация</span>
            <b>${reputationDelta >= 0 ? '+' : ''}${reputationDelta}</b>
        </div>

        <button
            class="action-button"
            onclick="finishRepairCheck()">

            🧪 Проверить результат

        </button>

    `);
}


/* =========================================================
   ПРОВЕРКА ПОСЛЕ РЕМОНТА
========================================================= */

function finishRepairCheck() {

    const order =
        state.currentOrder;


    openModal(`

        <h2>🧪 Контрольная проверка</h2>

        <p>
            Автомобиль проверен после ремонта.
        </p>

        <div class="diagnosis-result">

            ✅ Жалоба клиента устранена.<br><br>

            Хорошая диагностика позволяет
            не менять детали наугад и снижает
            вероятность повторного ремонта.

        </div>

        <button
            class="action-button"
            onclick="newOrder()">

            🚗 Следующий клиент

        </button>

    `);
}


/* =========================================================
   ОПЛАТА ТОЛЬКО ДИАГНОСТИКИ
========================================================= */

function finishDiagnosisOnly() {

    const order =
        state.currentOrder;


    if (
        !order.diagnosisPaid
    ) {

        state.money +=
            order.diagnosisPrice;

        order.diagnosisPaid =
            true;
    }


    addXP(15);


    order.completed =
        true;


    state.history.push({

        car:
            `${order.car.brand} ${order.car.model}`,

        problem:
            order.problem.title,

        profit:
            order.diagnosisPrice,

        day:
            state.day
    });


    save();

    render();


    openModal(`

        <h2>📋 Заказ завершён</h2>

        <p>
            Клиент отказался от ремонта,
            но диагностику оплатил.
        </p>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>+${money(order.diagnosisPrice)}</b>
        </div>

        <div class="stat-row">
            <span>📈 Опыт</span>
            <b>+15 XP</b>
        </div>

        <button
            class="action-button"
            onclick="newOrder()">

            🚗 Следующий клиент

        </button>

    `);
}


/* =========================================================
   НОВЫЙ ЗАКАЗ
========================================================= */

function newOrder() {

    state.day++;

    state.time = 480;


    /*
       Немного восстанавливаем ресурс
       оборудования между рабочими днями.
    */

    state.equipment =
        Math.min(
            100,
            state.equipment + 5
        );


    generateOrder();

    render();

    closeModal();

    showToast(
        "🚗 Новый клиент приехал!"
    );
}


/* =========================================================
   ИНСТРУМЕНТЫ
========================================================= */

const toolCatalog = [
    { id:"basic", icon:"🔧", name:"Базовый набор", level:1, cost:0, desc:"Простые механические проверки и осмотр." },
    { id:"obd", icon:"💻", name:"OBD-II сканер", level:2, cost:5000, desc:"Коды ошибок, Live Data и Freeze Frame." },
    { id:"multimeter", icon:"📟", name:"Мультиметр", level:3, cost:7000, desc:"Электрические проверки и поиск проблем в цепях." },
    { id:"tire_gauge", icon:"🛞", name:"Манометр для шин", level:2, cost:1800, desc:"Точная проверка давления в шинах." },
    { id:"manometer", icon:"📈", name:"Диагностический манометр", level:3, cost:9000, desc:"Измерение давления топлива и других систем." },
    { id:"smoke", icon:"💨", name:"Дымогенератор", level:5, cost:18000, desc:"Поиск подсоса воздуха и утечек." },
    { id:"lift", icon:"🏗️", name:"Подъёмник", level:6, cost:45000, desc:"Доступ к ходовой части и нижней части автомобиля." },
    { id:"alignment", icon:"📐", name:"Стенд развал-схождения", level:4, cost:35000, desc:"Измерение и регулировка углов установки колёс." },
    { id:"balancer", icon:"⚖️", name:"Балансировочный станок", level:5, cost:55000, desc:"Диагностика и балансировка колёс при вибрации на скорости." }
];
function toolById(id){ return toolCatalog.find(t=>t.id===id); }
function hasTool(id){ return !!state.tools?.[id]; }
function buyTool(id){ const tool=toolById(id); if(!tool||tool.id==='basic')return; if(state.level<tool.level){showToast(`🔒 Нужен уровень мастерства ${tool.level}`);return;} if(hasTool(id)){showToast('Инструмент уже куплен');return;} if(state.money<tool.cost){showToast('💰 Недостаточно денег');return;} state.money-=tool.cost; state.tools[id]=true; save(); render(); showToast(`🧰 ${tool.name} куплен`); openTools(); }
function toolRequirementHtml(id){ const t=toolById(id); if(!t||t.id==='basic')return ''; if(hasTool(id))return `<small>🧰 ${t.name} — доступен</small>`; if(state.level<t.level)return `<small>🔒 ${t.name} — откроется на уровне ${t.level}</small>`; return `<small>🔒 ${t.name} — можно купить за ${money(t.cost)}</small>`; }
function openTools() {
    const cards=toolCatalog.map(t=>{const owned=hasTool(t.id), unlocked=state.level>=t.level; return `<div class="tool-card ${owned?'owned':''}"><div class="tool-card-top"><div><h3>${t.icon} ${t.name}</h3><p>${t.desc}</p></div><span class="tool-level">Ур. ${t.level}</span></div><div class="stat-row"><span>${owned?'✅ Куплен':unlocked?'🔓 Доступен к покупке':'🔒 Заблокирован'}</span><b>${t.cost?money(t.cost):'Бесплатно'}</b></div>${owned?'<div class="tool-owned">Используется в диагностике</div>':unlocked?`<button class="action-button" onclick="buyTool('${t.id}')">🛒 Купить</button>`:`<div class="tool-locked">Требуется уровень мастерства ${t.level}</div>`}</div>`;}).join('');
    openModal(`<h2>🧰 Инструменты</h2><div class="diagnosis-result">Инструменты открываются постепенно: сначала нужен уровень мастерства, затем покупка за игровые деньги.</div><div class="stat-row"><span>🔧 Уровень мастерства</span><b>${state.level}</b></div><div class="stat-row"><span>💰 Деньги</span><b>${money(state.money)}</b></div><div class="tool-grid">${cards}</div><button class="modal-back-button" onclick="closeModal()">← Назад</button>`);
}

/* =========================================================
   АВТОМОБИЛИ
========================================================= */

function openCars() {

    openModal(`

        <h2>🚘 Автомобили</h2>

        <p>
            Сейчас автомобили принадлежат клиентам.
        </p>

        <p>
            В будущем здесь появится твой собственный
            автомобиль и его обслуживание:
        </p>

        <p>
            🔧 ремонт<br>
            🛞 обслуживание<br>
            🎨 внешний тюнинг<br>
            ⚙️ технический тюнинг<br>
            🏎️ улучшение характеристик
        </p>

    `);
}


/* =========================================================
   СТО
========================================================= */

function openService() {
    const lvl=state.garage.level;
    const upgrades=[
        {level:2,name:"Второй пост",cost:25000,rep:15,desc:"Больше клиентов и +1 пост."},
        {level:3,name:"Подъёмник и большой гараж",cost:60000,rep:30,desc:"Сложные работы, больше вариантов диагностики."},
        {level:4,name:"Диагностический пост",cost:120000,rep:50,desc:"Лучший ресурс оборудования и доступ к продвинутым заказам."},
        {level:5,name:"Небольшая СТО",cost:250000,rep:75,desc:"Подготовка к найму механиков и нескольким заказам."}
    ];
    const next=upgrades.find(x=>x.level===lvl+1);
    const canRep = !next || state.reputation >= next.rep;
    const canMoney = !next || state.money >= next.cost;
    openModal(`
        <h2>🏢 Развитие сервиса</h2>
        <div class="stat-row"><span>Уровень</span><b>${lvl}</b></div>
        <div class="stat-row"><span>⭐ Репутация</span><b>${state.reputation}/100</b></div>
        <div class="stat-row"><span>Посты</span><b>${state.garage.posts}</b></div>
        <div class="stat-row"><span>День</span><b>${state.day}</b></div>
        <div class="stat-row"><span>Время</span><b>${timeText(state.time)}</b></div>
        ${next?`<div class="upgrade-card"><h3>Следующий этап: ${next.name}</h3><p>${next.desc}</p><div class="stat-row"><span>Стоимость</span><b>${money(next.cost)}</b></div><div class="stat-row"><span>Требуется репутация</span><b>${state.reputation}/${next.rep}</b></div>${!canRep?`<div class="upgrade-warning">⭐ Нужно ещё ${next.rep-state.reputation} репутации. За один заказ можно получить максимум +5.</div>`:''}<button class="action-button" ${(!canMoney||!canRep)?'disabled':''} onclick="buyServiceUpgrade(${next.level},${next.cost},${next.rep})">🏗️ Улучшить сервис</button></div>`:`<div class="knowledge-practice"><h3>🏆 Максимальный доступ текущей версии</h3><p>Дальше можно расширять СТО, нанимать механиков, открывать вакансии и сеть сервисов.</p></div>`}
        <div class="diagnosis-result">💡 Для развития теперь нужны <b>и деньги, и репутация</b>. Это не позволит мгновенно прокачать СТО только за счёт накоплений.</div>
    `);
}

function buyServiceUpgrade(level,cost,requiredRep){
    if(state.garage.level+1!==level){showToast("Нельзя пропустить уровень сервиса");return;}
    if(state.reputation<requiredRep){showToast(`⭐ Нужно ${requiredRep} репутации`);return;}
    if(state.money<cost){showToast("💰 Недостаточно денег для улучшения");return;}
    state.money-=cost;
    state.garage.level=level;
    if(level===2)state.garage.posts=2;
    if(level===3)state.garage.posts=2;
    if(level>=4)state.garage.posts=3;
    state.equipment=Math.min(100,state.equipment+25);
    addXP(40);
    save();render();
    showToast(`🏢 Сервис улучшен до уровня ${level}`);
    openService();
}

/* =========================================================
   ПРЕМИУМ-МАГАЗИН / ДОНАТ
========================================================= */

const premiumPacks = [
    {id:'p100', gems:100, price:'99 ₽'},
    {id:'p550', gems:550, price:'399 ₽', bonus:'+' + 50 + ' 💎 бонус'},
    {id:'p1200', gems:1200, price:'799 ₽', bonus:'+' + 200 + ' 💎 бонус'},
    {id:'p2500', gems:2500, price:'1 499 ₽', bonus:'+' + 500 + ' 💎 бонус'}
];

function openPremiumShop(){
    openModal(`
        <h2>💎 Премиум-магазин</h2>
        <div class="diagnosis-result"><b>💎 ${state.premium}</b> премиум-валюты<br><small>Премиум-покупки не заменяют обычную экономику: оборудование и развитие сервиса по-прежнему требуют игровые деньги и репутацию.</small></div>
        <div class="premium-grid">${premiumPacks.map(p=>`<div class="premium-card"><div class="premium-gems">💎 ${p.gems}</div><b>${p.price}</b>${p.bonus?`<small>${p.bonus}</small>`:''}<button class="action-button" onclick="requestPremiumPurchase('${p.id}')">💳 Купить</button></div>`).join('')}</div>
        <div class="knowledge-practice"><h3>🛒 Что можно будет покупать за 💎</h3><p>Ускорители, косметику гаража, дополнительные слоты и другие необязательные бонусы. Ключевой прогресс игры не должен требовать доната.</p></div>
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}

function requestPremiumPurchase(packId){
    const pack=premiumPacks.find(x=>x.id===packId);
    if(!pack)return;
    openModal(`
        <h2>💳 Покупка ${pack.gems} 💎</h2>
        <div class="customer-choice"><div class="customer-choice-icon">💎</div><div><b>${pack.price}</b><p>Веб-версия на GitHub сейчас показывает витрину покупки. Реальное списание денег нужно подключить через платёжную систему площадки при переносе игры в VK.</p></div></div>
        <div class="diagnosis-result">После подключения VK-платежей эта кнопка будет создавать настоящий платёж, а начисление 💎 — происходить только после подтверждения оплаты.</div>
        <button class="action-button" onclick="openPremiumShop()">← Вернуться в магазин</button>
    `);
}

/* =========================================================
   ОБУЧЕНИЕ
========================================================= */


function openTraining() {

    openKnowledgeMenu();
}


/* =========================================================
   ТЕСТЫ И ДОПУСКИ
========================================================= */

const trainingTests = {
    timing: {
        title: "⛓️ Допуск к работам с ГРМ",
        category: "engine",
        description: "Перед серьёзной работой с ГРМ мастер должен подтвердить знания. Одна ошибка — допуск не получен.",
        questions: [
            { q: "Какова основная задача ГРМ?", a: ["Синхронизировать движение коленчатого и распределительных валов", "Охлаждать масло", "Заряжать аккумулятор", "Создавать давление топлива"], correct: 0 },
            { q: "Что необходимо проверить после установки ремня ГРМ?", a: ["Только уровень масла", "Совпадение меток и правильное натяжение", "Только давление в шинах", "Только заряд аккумулятора"], correct: 1 },
            { q: "Что входит в проверку ремня ГРМ?", a: ["Только цвет ремня", "Трещины, зубья, натяжение, ролики и совпадение меток", "Только уровень топлива", "Только состояние аккумулятора"], correct: 1 },
            { q: "Что может произойти при серьёзном нарушении фаз ГРМ?", a: ["Только разрядится аккумулятор", "Двигатель может не запуститься", "Увеличится давление в шинах", "Перестанет работать кондиционер"], correct: 1 },
            { q: "Какой подход правильнее при работе с ГРМ?", a: ["Работать без фиксаторов", "Соблюдать последовательность, использовать нужный инструмент и проверить метки после установки", "Менять только ремень независимо от роликов", "Сразу запускать двигатель после снятия старого ремня"], correct: 1 }
        ]
    },

    engine: {
        title: "🔥 Двигатель — базовый допуск",
        category: "engine",
        description: "Проверь понимание устройства двигателя, четырёхтактного цикла, смазки, охлаждения и основных систем.",
        questions: [
            { q: "Что преобразует возвратно-поступательное движение поршня во вращение?", a: ["Коленчатый вал", "Радиатор", "Генератор", "Термостат"], correct: 0 },
            { q: "Какие четыре такта входят в рабочий цикл четырёхтактного двигателя?", a: ["Впуск, сжатие, рабочий ход, выпуск", "Запуск, прогрев, торможение, остановка", "Впрыск, зарядка, охлаждение, слив", "Нагрев, выпуск, смазка, зарядка"], correct: 0 },
            { q: "Что нужно проверить при подозрении на подсос воздуха во впуске?", a: ["Только аккумулятор", "Герметичность впуска и состояние MAF/MAP и дросселя", "Только тормозные диски", "Только уровень топлива"], correct: 1 },
            { q: "Что делать при появлении лампы давления масла?", a: ["Продолжать движение до дома", "Остановить диагностику и проверить причину снижения давления", "Сразу заменить аккумулятор", "Отключить вентилятор"], correct: 1 },
            { q: "Для чего нужна система охлаждения?", a: ["Для повышения давления топлива", "Для поддержания рабочего температурного режима двигателя", "Для зарядки аккумулятора", "Для управления тормозами"], correct: 1 }
        ]
    },

    electrical: {
        title: "⚡ Электрика — базовый допуск",
        category: "electrical",
        description: "Проверь знания по аккумулятору, генератору, стартеру, мультиметру, предохранителям и реле.",
        questions: [
            { q: "Что важно проверить у аккумулятора кроме напряжения покоя?", a: ["Только цвет корпуса", "Просадку при запуске и способность отдавать ток под нагрузкой", "Только уровень топлива", "Только давление в шинах"], correct: 1 },
            { q: "Что делает генератор при работающем двигателе?", a: ["Создаёт давление масла", "Вырабатывает электроэнергию и поддерживает заряд аккумулятора", "Охлаждает тормоза", "Управляет ГРМ"], correct: 1 },
            { q: "Если стартер медленно крутит двигатель, что проверяют в первую очередь?", a: ["Только свечи", "Аккумулятор и качество силовых соединений", "Только термостат", "Только шины"], correct: 1 },
            { q: "Что позволяет измерять мультиметр?", a: ["Только температуру масла", "Напряжение, сопротивление и в подходящем режиме ток", "Только давление топлива", "Только компрессию"], correct: 1 },
            { q: "Что делать, если новый предохранитель снова сразу перегорает?", a: ["Поставить предохранитель большего номинала", "Искать причину перегрузки или короткого замыкания", "Удалить предохранитель", "Заменить аккумулятор"], correct: 1 }
        ]
    },

    diagnostics: {
        title: "💻 Диагностика — базовый допуск",
        category: "diagnostics",
        description: "Проверь понимание OBD-II, Live Data, Freeze Frame, кодов пропусков и алгоритма диагностики.",
        questions: [
            { q: "Что означает код неисправности OBD-II?", a: ["Готовый приговор конкретной детали", "Направление для поиска неисправности", "Обязательную замену двигателя", "Только информацию о пробеге"], correct: 1 },
            { q: "Что показывает Live Data?", a: ["Только историю ремонта", "Текущие параметры электронных систем", "Только давление в шинах", "Только температуру воздуха на улице"], correct: 1 },
            { q: "Для чего полезен Freeze Frame?", a: ["Для настройки радио", "Для просмотра условий, при которых была зарегистрирована ошибка", "Для измерения компрессии", "Для проверки толщины диска"], correct: 1 },
            { q: "Что обычно означают коды P0300–P030x?", a: ["Проблемы с кондиционером", "Обнаруженные пропуски воспламенения", "Неисправность ABS только", "Низкий уровень топлива"], correct: 1 },
            { q: "Какой принцип правильнее при диагностике?", a: ["Сразу менять первую подозрительную деталь", "Сначала подтвердить симптом, собрать данные, проверить причины и только потом ремонтировать", "Менять все датчики сразу", "Ориентироваться только на один код"], correct: 1 }
        ]
    },

    fuel: {
        title: "⛽ Топливная система — базовый допуск",
        category: "fuel",
        description: "Проверь знания о подаче топлива, форсунках и измерении давления.",
        questions: [
            { q: "Что должна обеспечивать топливная система?", a: ["Подачу нужного количества топлива с необходимыми параметрами", "Только охлаждение двигателя", "Только заряд аккумулятора", "Только работу ABS"], correct: 0 },
            { q: "Что может вызвать проблемы с работой форсунки?", a: ["Только износ тормозных дисков", "Засорение, проблемы с электропитанием или самой форсункой", "Только низкое давление в шинах", "Только неисправность радиатора"], correct: 1 },
            { q: "Зачем измеряют давление топлива?", a: ["Чтобы проверить тормоза", "Чтобы подтвердить работу системы подачи топлива и сравнить результат с нормой", "Чтобы определить заряд аккумулятора", "Чтобы проверить геометрию кузова"], correct: 1 },
            { q: "Можно ли по одному симптому сразу объявлять неисправной форсунку?", a: ["Да, всегда", "Нет, причину нужно подтвердить проверками", "Только на дизеле", "Только на холодном двигателе"], correct: 1 },
            { q: "Что важно учитывать при диагностике топливной системы?", a: ["Только цвет топлива", "Давление, подачу, состояние форсунок и электрическую часть системы", "Только пробег автомобиля", "Только состояние шин"], correct: 1 }
        ]
    },

    suspension: {
        title: "🛞 Подвеска — базовый допуск",
        category: "suspension",
        description: "Проверь знания об амортизаторах, шаровых опорах и стабилизаторе.",
        questions: [
            { q: "Какова одна из основных задач амортизатора?", a: ["Гасить колебания подвески", "Заряжать аккумулятор", "Создавать давление топлива", "Управлять форсунками"], correct: 0 },
            { q: "Что может указывать на проблему с шаровой опорой?", a: ["Люфт, стук и нарушение кинематики", "Только низкий уровень масла", "Только медленный запуск", "Только ошибка P0300"], correct: 0 },
            { q: "Что обычно вызывает стук в стойках или втулках стабилизатора?", a: ["Износ элементов крепления стабилизатора", "Только слабый аккумулятор", "Только грязный воздушный фильтр", "Только низкое давление топлива"], correct: 0 },
            { q: "Как правильно проверять подвеску?", a: ["Только по внешнему виду шин", "Осмотром, проверкой люфтов и состояния деталей", "Только по звуку двигателя", "Только через OBD-II"], correct: 1 },
            { q: "Почему нельзя игнорировать выраженный люфт шаровой опоры?", a: ["Потому что это влияет на безопасность и управляемость", "Потому что разрядится аккумулятор", "Потому что перестанет работать кондиционер", "Потому что увеличится давление масла"], correct: 0 }
        ]
    },

    brakes: {
        title: "🛑 Тормоза — базовый допуск",
        category: "brakes",
        description: "Проверь знания о колодках, дисках и ABS.",
        questions: [
            { q: "Что является основным рабочим элементом дисковой тормозной системы?", a: ["Колодки, которые прижимаются к диску", "Только радиатор", "Только генератор", "Только форсунка"], correct: 0 },
            { q: "Что проверяют у тормозного диска?", a: ["Состояние поверхности и соответствие толщины допустимой", "Только цвет", "Только уровень топлива", "Только заряд аккумулятора"], correct: 0 },
            { q: "Для чего нужна ABS?", a: ["Помогать предотвращать блокировку колёс при торможении", "Повышать давление масла", "Охлаждать двигатель", "Управлять ГРМ"], correct: 0 },
            { q: "Что может указывать на износ тормозных колодок?", a: ["Уменьшение толщины фрикционного материала и характерный шум", "Только ошибка по двигателю", "Только падение напряжения", "Только перегрев ОЖ"], correct: 0 },
            { q: "Что делать при обнаружении серьёзной неисправности тормозов?", a: ["Продолжать эксплуатацию", "Устранить неисправность до нормальной эксплуатации автомобиля", "Отключить ABS", "Поставить более слабые колодки"], correct: 1 }
        ]
    },

    transmission: {
        title: "⚙️ Трансмиссия — базовый допуск",
        category: "transmission",
        description: "Проверь знания о МКПП, АКПП и сцеплении.",
        questions: [
            { q: "Для чего нужна трансмиссия?", a: ["Передавать и изменять крутящий момент от двигателя к ведущим колёсам", "Только охлаждать двигатель", "Только заряжать аккумулятор", "Только управлять фарами"], correct: 0 },
            { q: "Что делает сцепление в автомобиле с МКПП?", a: ["Позволяет плавно соединять и разъединять двигатель и трансмиссию", "Охлаждает тормозные диски", "Измеряет давление топлива", "Управляет ABS"], correct: 0 },
            { q: "Что важно учитывать при диагностике АКПП?", a: ["Уровень и состояние жидкости, ошибки, поведение при переключениях и другие параметры по конструкции", "Только цвет кузова", "Только состояние свечей", "Только давление в шинах"], correct: 0 },
            { q: "Что может указывать на пробуксовку сцепления?", a: ["Обороты растут, а ускорение автомобиля заметно отстаёт", "Только трудный холодный запуск", "Только лампа ABS", "Только низкий уровень ОЖ"], correct: 0 },
            { q: "Можно ли диагностировать трансмиссию только по одному звуку?", a: ["Да, всегда", "Нет, нужны дополнительные проверки и подтверждение причины", "Только на МКПП", "Только на АКПП"], correct: 1 }
        ]
    },

    cooling: {
        title: "💧 Охлаждение — базовый допуск",
        category: "cooling",
        description: "Проверь знания об охлаждающей жидкости, термостате и вентиляторе.",
        questions: [
            { q: "Для чего нужна охлаждающая жидкость?", a: ["Для отвода тепла и поддержания рабочего температурного режима", "Для смазки тормозных колодок", "Для зарядки аккумулятора", "Для работы стартера"], correct: 0 },
            { q: "Что делает термостат?", a: ["Регулирует направление потока ОЖ в зависимости от температуры", "Измеряет давление топлива", "Заряжает аккумулятор", "Управляет тормозными колодками"], correct: 0 },
            { q: "Что помогает отводить тепло от радиатора при необходимости?", a: ["Вентилятор охлаждения", "Стартер", "Форсунка", "Катушка зажигания"], correct: 0 },
            { q: "Какую последовательность проверки системы охлаждения можно использовать?", a: ["Уровень → утечки → температура → циркуляция → вентилятор", "Только замена термостата", "Сразу разборка двигателя", "Только проверка аккумулятора"], correct: 0 },
            { q: "Что делать при явном перегреве двигателя?", a: ["Игнорировать температуру", "Прекратить обычную эксплуатацию и выяснить причину перегрева", "Отключить вентилятор", "Добавить масло в бензобак"], correct: 1 }
        ]
    },

    engine_types: {
        title: "⚙️ Типы двигателей — базовый допуск",
        category: "engine_types",
        description: "Проверь знания о рядных, V-образных, оппозитных, роторных и дизельных двигателях.",
        questions: [
            { q: "Как расположены цилиндры у рядного двигателя R4?", a: ["В один ряд", "Два ряда по два цилиндра", "По кругу", "В виде ротора"], correct: 0 },
            { q: "Что означает V8?", a: ["Восемь цилиндров, расположенных в двух рядах под углом", "Восемь цилиндров в одном ряду", "Восемь турбин", "Восемь передач"], correct: 0 },
            { q: "Чем характерен оппозитный двигатель?", a: ["Противоположно расположенными цилиндрами", "Цилиндрами только в одном ряду", "Отсутствием коленвала", "Работой только на дизеле"], correct: 0 },
            { q: "Что отличает роторный Wankel от обычного поршневого двигателя?", a: ["Вместо возвратно-поступательных поршней используется вращающийся ротор", "У него всегда V-образные цилиндры", "У него нет системы смазки", "Он работает только на бензине с карбюратором"], correct: 0 },
            { q: "Зачем дизельному двигателю нужны свечи накаливания?", a: ["Они помогают холодному запуску", "Они создают искру как в бензиновом двигателе", "Они охлаждают масло", "Они управляют АКПП"], correct: 0 }
        ]
    }
};


/* =========================================================
   КВАЛИФИКАЦИЯ И ДОПУСКИ
========================================================= */

const qualificationInfo = {
    timing:       {name:"ГРМ", icon:"⛓️", minLevel:6, label:"Ремонт и обслуживание ГРМ"},
    engine:       {name:"Двигатель", icon:"🔥", minLevel:2, label:"Базовые работы по двигателю"},
    electrics:    {name:"Электрика", icon:"⚡", minLevel:2, label:"Автомобильная электрика"},
    diagnostics:  {name:"Диагностика", icon:"💻", minLevel:3, label:"OBD-II и углублённая диагностика"},
    fuel:         {name:"Топливная система", icon:"⛽", minLevel:3, label:"Диагностика и обслуживание топливной системы"},
    suspension:   {name:"Подвеска", icon:"🛞", minLevel:2, label:"Ходовая часть и рулевое управление"},
    brakes:       {name:"Тормоза", icon:"🛑", minLevel:2, label:"Тормозная система"},
    transmission: {name:"Трансмиссия", icon:"⚙️", minLevel:5, label:"МКПП, сцепление и АКПП"},
    cooling:      {name:"Охлаждение", icon:"💧", minLevel:2, label:"Система охлаждения"},
    engine_types:{name:"Типы двигателей", icon:"🔧", minLevel:4, label:"Рядные, V-образные, оппозитные и дизельные двигатели"}
};

function hasQualification(id){ return !!state.training?.[id]; }
function qualificationCount(){ return Object.keys(qualificationInfo).filter(hasQualification).length; }
function qualificationForProblem(problem){ return problem.requiredTraining || null; }

const problemQualificationMap = {
    timing_belt_wear:"timing",
    check_engine_misfire:"diagnostics",
    turbo_loss:"diagnostics",
    automatic_transmission_kick:"transmission",
    diesel_glow:"engine_types",
    wheel_bearing:"suspension",
    battery_drain:"electrics",
    steering_play:"suspension",
    exhaust_smoke:"engine",
    clutch_slip:"transmission",
    car_pulls:"suspension",
    wheel_vibration:"suspension"
};

function applyProblemQualifications(){
    problems.forEach(p=>{
        if(problemQualificationMap[p.id]) p.requiredTraining=problemQualificationMap[p.id];
    });
}
applyProblemQualifications();

function qualificationRequirementText(problem){
    const id=qualificationForProblem(problem);
    if(!id) return "";
    const q=qualificationInfo[id];
    if(!q) return "";
    return ` · 🎓 ${q.name}`;
}

function openTrainingTests() {
    const entries = Object.entries(trainingTests);
    const passed = entries.filter(([id]) => !!state.training?.[id]).length;

    openModal(`
        <div class="knowledge-header">
            <div>
                <h2>🎓 Квалификация и допуски</h2>
                <p>Мастерство растёт от практики, а допуск подтверждается тестом без ошибок. Сложные работы требуют и нужного уровня, и соответствующего допуска.</p>
            </div>
            <div class="knowledge-progress"><b>${passed}/${entries.length}</b><span>допусков</span></div>
        </div>
        <div class="diagnosis-result">
            🔧 <b>Мастерство ${state.level}</b> · ${state.xp}/${100+(state.level-1)*50} XP<br>
            🎓 Подтверждено допусков: <b>${passed}</b> из ${entries.length}
        </div>

        <div class="training-test-list">
            ${entries.map(([id, test]) => {
                const ok = !!state.training?.[id];
                const q = qualificationInfo[id] || {name:id, icon:"🎓", minLevel:1, label:""};
                const levelOk = state.level >= q.minLevel;
                return `
                    <div class="training-test-card ${ok ? "passed" : ""}">
                        <div class="training-test-head">
                            <h3>${q.icon} ${q.name}</h3>
                            <span>${ok ? "✅ Допуск" : levelOk ? "🔒 Не пройден" : `🔒 Нужен уровень ${q.minLevel}`}</span>
                        </div>
                        <p>${q.label}. ${test.description}</p>
                        <div class="stat-row"><span>Требование</span><b>Мастерство ${q.minLevel}+</b></div>
                        <button class="action-button ${ok ? "secondary-button" : "knowledge-study-button"}" ${levelOk ? "" : "disabled"} onclick="startTrainingTest('${id}')">
                            ${ok ? "🔁 Перепройти тест" : levelOk ? "📝 Пройти тест" : "🔒 Сначала повысить мастерство"}
                        </button>
                    </div>
                `;
            }).join("")}
        </div>

        <button class="action-button secondary-button" onclick="openKnowledgeMenu()">📚 Перейти в базу знаний</button>
    `);
}

function startTrainingTest(testId) {
    const test = trainingTests[testId];
    if (!test) return;
    const q = qualificationInfo[testId];
    if (q && state.level < q.minLevel) {
        showToast(`🔒 Нужен уровень мастерства ${q.minLevel}`);
        return;
    }

    let current = 0;
    let mistakes = [];

    function showQuestion() {
        const item = test.questions[current];
        openModal(`
            <div class="knowledge-header">
                <div>
                    <h2>${test.title}</h2>
                    <p>${test.description}</p>
                </div>
                <div class="knowledge-progress"><b>${current + 1}/${test.questions.length}</b><span>вопрос</span></div>
            </div>
            <div class="knowledge-block">
                <h3>❓ ${item.q}</h3>
            </div>
            <div class="knowledge-topic-list">
                ${item.a.map((answer, i) => `
                    <button class="knowledge-topic" onclick="window.__answerTraining(${i})">
                        <span>${String.fromCharCode(65 + i)}</span>
                        <div><b>${answer}</b></div>
                    </button>
                `).join("")}
            </div>
        `);
    }

    window.__answerTraining = function(index) {
        if (index !== test.questions[current].correct) {
            mistakes.push({question: current + 1, text: test.questions[current].q});
        }
        current++;

        if (current < test.questions.length) {
            showQuestion();
            return;
        }

        delete window.__answerTraining;

        if (mistakes.length === 0) {
            if (!state.training) state.training = {};
            state.training[testId] = true;
            save();
            showToast(`🎓 Допуск «${(qualificationInfo[testId]||{}).name || test.title}» получен`);
            openModal(`
                <h2>🏆 Допуск получен!</h2>
                <div class="knowledge-practice">
                    <h3>🎓 ${test.title}</h3>
                    <p>Тест пройден без ошибок. Допуск сохранён. В дальнейшем он будет открывать соответствующие практические задания.</p>
                </div>
                <button class="action-button knowledge-study-button" onclick="openTrainingTests()">🎓 К тестам и допускам</button>
            `);
        } else {
            openModal(`
                <h2>❌ Допуск пока не получен</h2>
                <div class="diagnosis-result">
                    Ошибок: <b>${mistakes.length}</b>. Для допуска тест нужно пройти без единой ошибки.
                </div>
                <div class="knowledge-block">
                    <h3>Что повторить</h3>
                    <ul>${mistakes.map(x => `<li>Вопрос ${x.question}: ${x.text}</li>`).join("")}</ul>
                </div>
                <button class="action-button" onclick="startTrainingTest('${testId}')">🔁 Пройти тест заново</button>
                <button class="action-button secondary-button" onclick="openKnowledgeMenu()">📚 Изучить базу знаний</button>
            `);
        }
    };

    showQuestion();
}

/* =========================================================
   КНОПКИ
========================================================= */

$("startDiagnosis").onclick =
    startDiagnosis;

$("serviceButton").onclick =
    openService;

$("closeModal").onclick =
    closeModal;


$("modal").onclick =
    event => {

        if (
            event.target.id === "modal"
        ) {

            closeModal();
        }
    };



/* =========================================================
   ВИЗУАЛЬНЫЙ ГАРАЖ — ПЕРВЫЙ ИНТЕРАКТИВНЫЙ ЭТАП
========================================================= */

let garageSceneMode = "overview";

function garageSceneHtml() {
    const order=state.currentOrder;
    const carName=order?`${order.car.brand} ${order.car.model}`:"Машина клиента";
    return `
        <div class="garage-scene" id="garageScene">
            <div class="garage-ceiling-light"></div>
            <div class="garage-sign">🔧 АВТОСЕРВИС</div>
            <div class="garage-shelf"><span>🧰</span><span>🔩</span><span>🛢️</span><span>🧴</span><span>🔧</span></div>
            <div class="garage-workbench"><span>🧰</span><span>🔧</span><span>📋</span></div>
            <div class="garage-car visual-car interactive" id="visualCar" onclick="inspectCar()" title="Нажми для осмотра">
                <div class="car-shadow"></div><div class="car-body">
                    <div class="car-roof"></div><div class="car-window front-window"></div><div class="car-window rear-window"></div>
                    <div class="car-hood"></div><div class="car-headlight left-headlight"></div><div class="car-headlight right-headlight"></div>
                    <div class="car-grille"></div><div class="car-wheel left-wheel"></div><div class="car-wheel right-wheel"></div>
                </div><div class="car-nameplate">${carName}</div>
            </div>
            <div class="garage-hint">👆 Нажми на автомобиль — начни осмотр клиента</div>
        </div>`;
}

function renderGarageScene() {
    const container = document.querySelector(".garage-image");

    if (!container) return;

    container.classList.add("garage-visual-container");
    container.innerHTML = garageSceneHtml();
}

function render() {
    renderBase();
    renderGarageScene();
}

/* Осмотр автомобиля */

function inspectCar() {
    const order = state.currentOrder;

    if (!order) {
        showToast("🚗 Сейчас в гараже нет автомобиля клиента");
        return;
    }

    garageSceneMode = "inspection";

    openModal(`
        <h2>🔍 Осмотр автомобиля</h2>

        <div class="car-inspection-card">
            <div class="inspection-car-icon">
                🚗
            </div>

            <div>
                <h3>${order.car.brand} ${order.car.model}</h3>
                <p>
                    ${order.car.year} год ·
                    ${order.car.mileage.toLocaleString("ru-RU")} км
                </p>
            </div>
        </div>

        <p>
            Осмотри автомобиль перед началом диагностики.
            Некоторые проверки можно выполнить без специального оборудования.
        </p>

        <div class="inspection-grid">

            <button class="inspection-button" onclick="inspectArea('engine')">
                <span>⚙️</span>
                <b>Двигатель</b>
                <small>Подкапотное пространство</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('battery')">
                <span>🔋</span>
                <b>Аккумулятор</b>
                <small>Электрика и запуск</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('brakes')">
                <span>🛑</span>
                <b>Тормоза</b>
                <small>Диски и колодки</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('suspension')">
                <span>🛞</span>
                <b>Подвеска</b>
                <small>Люфты и состояние</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('body')">
                <span>🚘</span>
                <b>Кузов</b>
                <small>Внешний осмотр</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('interior')">
                <span>🪑</span>
                <b>Салон</b>
                <small>Органы управления</small>
            </button>

        </div>

        <button class="action-button" onclick="startDiagnosis()">
            🔍 Перейти к диагностике
        </button>
    `);
}

function inspectArea(area) {
    const messages = {
        engine: {
            title: "⚙️ Подкапотное пространство",
            text: "Проверяешь состояние двигателя, шлангов, разъёмов и видимых элементов. Пока серьёзных выводов делать нельзя — нужны дополнительные проверки."
        },
        battery: {
            title: "🔋 Аккумулятор",
            text: "Корпус без явных повреждений. Визуальный осмотр не заменяет измерение напряжения и проверку под нагрузкой."
        },
        brakes: {
            title: "🛑 Тормоза",
            text: "Внешне тормозной механизм выглядит без очевидных повреждений. Для оценки износа нужны дополнительные проверки."
        },
        suspension: {
            title: "🛞 Подвеска",
            text: "Визуально осматриваешь стойки, рычаги и пыльники. Часть неисправностей можно обнаружить только после проверки на подъёмнике."
        },
        body: {
            title: "🚘 Кузов",
            text: "Проверяешь панели, фары, стёкла и следы ремонта. Явных повреждений в рамках этой проверки не обнаружено."
        },
        interior: {
            title: "🪑 Салон",
            text: "Проверяешь приборную панель и органы управления. Информация о симптоме клиента подтверждается его жалобой."
        }
    };

    const item = messages[area];

    if (!item) return;

    openModal(`
        <h2>${item.title}</h2>
        <div class="diagnosis-result inspection-result">
            ${item.text}
        </div>

        <button class="action-button" onclick="inspectCar()">
            ← Вернуться к осмотру
        </button>
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}

/* Быстрые объекты гаража */

function openGarageTools() {
    openModal(`<h2>🧰 Инструменты</h2><div class="diagnosis-result">Инструменты используются прямо внутри диагностических проверок. Выбирай проверку — игра покажет нужный инструмент, время и расход ресурса.</div><button class="action-button" onclick="startDiagnosis()">🔍 Перейти к диагностике</button><button class="modal-back-button" onclick="closeModal()">← Назад</button>`);
}

function openGarageOBD() {
    const order = state.currentOrder;

    if (!order) {
        showToast("Сначала дождись автомобиля клиента");
        return;
    }

    openModal(`
        <h2>💻 Диагностический пост</h2>

        <div class="stat-row">
            <span>Сканер OBD-II</span>
            <b>Готов</b>
        </div>

        <div class="stat-row">
            <span>Ресурс оборудования</span>
            <b>${state.equipment}%</b>
        </div>

        <p>
            Подключение к автомобилю позволит получить коды неисправностей
            и Live Data. Но код ошибки сам по себе не всегда означает,
            что нужно сразу менять деталь.
        </p>

        <button class="action-button" onclick="startDiagnosis()">
            🔍 Открыть диагностику
        </button>
    `);
}

function openGarageParts() {
    openModal(`
        <h2>📦 Склад запчастей</h2>

        <div class="diagnosis-result">
            Пока склад почти пуст.
            Здесь в будущем появятся новые и бывшие в употреблении
            запчасти, восстановленные детали и расходники.
        </div>

        <div class="stat-row">
            <span>Запчасти</span>
            <b>0</b>
        </div>

        <div class="stat-row">
            <span>Восстановленные детали</span>
            <b>0</b>
        </div>

        <p>
            🔜 В будущем старые детали можно будет восстановить,
            продать или установить клиенту. Но клиент иногда сможет
            обнаружить такую деталь и предъявить претензию.
        </p>
    `);
}

/* =========================================================
   ПЕРВЫЙ ЗАПУСК
========================================================= */


if (
    !state.currentOrder
) {

    generateOrder();
}


render();

save();
