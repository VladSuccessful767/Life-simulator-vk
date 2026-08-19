/* =========================================================
   АВТОСЕРВИС: С НУЛЯ
   ВИЗУАЛЬНЫЙ ГАРАЖ + ДИАГНОСТИКА
========================================================= */

/* =========================================================
   ВИЗУАЛЬНЫЙ ГАРАЖ — ПЕРВЫЙ ЭТАП
========================================================= */

let garageSceneMode = "overview";

function garageSceneHtml() {
    const order = state.currentOrder;

    const carName = order
        ? `${order.car.brand} ${order.car.model}`
        : "Автомобиль клиента";

    return `
        <div class="garage-scene" id="garageScene">

            <!-- Свет -->
            <div class="garage-ceiling-light pulse"></div>

            <!-- Вывеска -->
            <div class="garage-sign">
                🔧 АВТОСЕРВИС
            </div>

            <!-- Полка -->
            <div class="garage-shelf">
                <span>🧰</span>
                <span>🔩</span>
                <span>🛢️</span>
                <span>🔧</span>
            </div>

            <!-- Подъёмник -->
            <div class="garage-lift lift-left"></div>
            <div class="garage-lift lift-right"></div>

            <!-- АВТОМОБИЛЬ -->
            <div
                class="garage-car visual-car interactive"
                id="visualCar"
                onclick="inspectCar()"
                title="Нажми для осмотра"
            >

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

                <div class="car-nameplate">
                    ${carName}
                </div>

            </div>

            <!-- Инструменты -->
            <button
                class="garage-hotspot hotspot-tools"
                onclick="openGarageTools()"
            >
                🧰
                <span>Инструменты</span>
            </button>

            <!-- OBD -->
            <button
                class="garage-hotspot hotspot-obd"
                onclick="openGarageOBD()"
            >
                💻
                <span>OBD</span>
            </button>

            <!-- Склад -->
            <button
                class="garage-hotspot hotspot-parts"
                onclick="openGarageParts()"
            >
                📦
                <span>Склад</span>
            </button>

            <!-- База знаний -->
            <button
                class="garage-hotspot hotspot-knowledge"
                onclick="openKnowledgeMenu()"
            >
                📚
                <span>База знаний</span>
            </button>

            <!-- Подсказка -->
            <div class="garage-hint">
                👆 Нажми на автомобиль, чтобы начать осмотр
            </div>

        </div>
    `;
}


/* =========================================================
   ОТОБРАЖЕНИЕ ГАРАЖА
========================================================= */

function renderGarageScene() {

    const container = document.querySelector(".garage-image");

    if (!container) {
        return;
    }

    container.classList.add("garage-visual-container");

    container.innerHTML = garageSceneHtml();
}


/* =========================================================
   ОСНОВНОЙ RENDER
========================================================= */

/*
   Старый render переименован в renderBase().
   Он продолжает отвечать за существующую игру.

   Новый render() сначала запускает старый интерфейс,
   затем поверх него устанавливает визуальный гараж.
*/

function render() {

    renderBase();

    renderGarageScene();
}


/* =========================================================
   ОСМОТР АВТОМОБИЛЯ
========================================================= */

function inspectCar() {

    const order = state.currentOrder;

    if (!order) {

        showToast(
            "🚗 Сейчас в гараже нет автомобиля клиента"
        );

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

                <h3>
                    ${order.car.brand}
                    ${order.car.model}
                </h3>

                <p>
                    ${order.car.year} год ·
                    ${order.car.mileage.toLocaleString("ru-RU")} км
                </p>

            </div>

        </div>

        <p>
            Осмотри автомобиль перед началом диагностики.
            Некоторые неисправности можно обнаружить
            без специального оборудования.
        </p>

        <div class="inspection-grid">

            <button
                class="inspection-button"
                onclick="inspectArea('engine')"
            >
                <span>⚙️</span>
                <b>Двигатель</b>
                <small>
                    Подкапотное пространство
                </small>
            </button>


            <button
                class="inspection-button"
                onclick="inspectArea('battery')"
            >
                <span>🔋</span>
                <b>Аккумулятор</b>
                <small>
                    Электрика и запуск
                </small>
            </button>


            <button
                class="inspection-button"
                onclick="inspectArea('brakes')"
            >
                <span>🛑</span>
                <b>Тормоза</b>
                <small>
                    Диски и колодки
                </small>
            </button>


            <button
                class="inspection-button"
                onclick="inspectArea('suspension')"
            >
                <span>🛞</span>
                <b>Подвеска</b>
                <small>
                    Люфты и состояние
                </small>
            </button>


            <button
                class="inspection-button"
                onclick="inspectArea('body')"
            >
                <span>🚘</span>
                <b>Кузов</b>
                <small>
                    Внешний осмотр
                </small>
            </button>


            <button
                class="inspection-button"
                onclick="inspectArea('interior')"
            >
                <span>🪑</span>
                <b>Салон</b>
                <small>
                    Органы управления
                </small>
            </button>

        </div>


        <button
            class="action-button"
            onclick="startDiagnosis()"
        >
            🔍 Перейти к диагностике
        </button>

    `);
}


/* =========================================================
   ПРОВЕРКА ОТДЕЛЬНЫХ ЗОН
========================================================= */

function inspectArea(area) {

    const messages = {

        engine: {

            title: "⚙️ Подкапотное пространство",

            text:
                "Проверяешь состояние двигателя, " +
                "шлангов, разъёмов и видимых элементов. " +
                "Пока серьёзных выводов делать нельзя — " +
                "нужны дополнительные проверки."
        },


        battery: {

            title: "🔋 Аккумулятор",

            text:
                "Корпус без явных повреждений. " +
                "Визуальный осмотр не заменяет " +
                "измерение напряжения и проверку под нагрузкой."
        },


        brakes: {

            title: "🛑 Тормоза",

            text:
                "Внешне тормозной механизм выглядит " +
                "без очевидных повреждений. " +
                "Для оценки износа нужны дополнительные проверки."
        },


        suspension: {

            title: "🛞 Подвеска",

            text:
                "Визуально осматриваешь стойки, " +
                "рычаги и пыльники. " +
                "Часть неисправностей можно обнаружить " +
                "только после проверки на подъёмнике."
        },


        body: {

            title: "🚘 Кузов",

            text:
                "Проверяешь панели, фары, стёкла " +
                "и следы ремонта. " +
                "Явных повреждений в рамках этой проверки " +
                "не обнаружено."
        },


        interior: {

            title: "🪑 Салон",

            text:
                "Проверяешь приборную панель " +
                "и органы управления. " +
                "Информация о симптоме клиента " +
                "подтверждается его жалобой."
        }

    };


    const item = messages[area];

    if (!item) {
        return;
    }


    openModal(`

        <h2>
            ${item.title}
        </h2>

        <div class="diagnosis-result inspection-result">

            ${item.text}

        </div>


        <button
            class="action-button"
            onclick="inspectCar()"
        >
            ← Вернуться к осмотру
        </button>

    `);
}
/* =========================================================
   БЫСТРЫЕ ОБЪЕКТЫ ГАРАЖА
========================================================= */


/* =========================================================
   ИНСТРУМЕНТЫ
========================================================= */

function openGarageTools() {

    openTools();

}


/* =========================================================
   OBD-II
========================================================= */

function openGarageOBD() {

    const order = state.currentOrder;


    if (!order) {

        showToast(
            "🚗 Сначала дождись автомобиля клиента"
        );

        return;
    }


    openModal(`

        <h2>💻 Диагностический пост</h2>


        <div class="stat-row">

            <span>
                Сканер OBD-II
            </span>

            <b>
                Готов
            </b>

        </div>


        <div class="stat-row">

            <span>
                Ресурс оборудования
            </span>

            <b>
                ${state.equipment}%
            </b>

        </div>


        <div class="diagnosis-result">

            Подключение к автомобилю позволит
            получить коды неисправностей и Live Data.

        </div>


        <p>

            ⚠️ Важно: код ошибки сам по себе
            не означает, что необходимо сразу
            менять деталь.

            Сначала нужно понять причину появления
            ошибки и подтвердить неисправность
            дополнительными проверками.

        </p>


        <button
            class="action-button"
            onclick="startDiagnosis()"
        >

            🔍 Открыть диагностику

        </button>

    `);

}


/* =========================================================
   СКЛАД ЗАПЧАСТЕЙ
========================================================= */

function openGarageParts() {

    openModal(`

        <h2>
            📦 Склад запчастей
        </h2>


        <div class="diagnosis-result">

            Пока склад почти пуст.

            Здесь в будущем появятся:

            <br><br>

            🔩 Новые запчасти
            <br>
            ♻️ Бывшие в употреблении детали
            <br>
            🔧 Восстановленные запчасти
            <br>
            🛢️ Расходные материалы

        </div>


        <div class="stat-row">

            <span>
                Запчасти
            </span>

            <b>
                0
            </b>

        </div>


        <div class="stat-row">

            <span>
                Восстановленные детали
            </span>

            <b>
                0
            </b>

        </div>


        <div class="stat-row">

            <span>
                Старые детали
            </span>

            <b>
                0
            </b>

        </div>


        <p>

            🔜 В будущем старые детали можно будет:

            <br><br>

            • восстановить;
            <br>
            • продать;
            <br>
            • установить клиенту;
            <br>
            • использовать как временное решение.

        </p>


        <div class="diagnosis-result">

            ⚠️ Но есть риск.

            Клиент может обнаружить,
            что ему установили восстановленную
            или старую деталь.

            Это может привести к:

            <br><br>

            ⭐ снижению репутации;
            <br>
            💰 возврату денег;
            <br>
            😡 жалобе клиента;
            <br>
            📢 плохому отзыву.

        </div>

    `);

}


/* =========================================================
   ПЕРЕХОД В БАЗУ ЗНАНИЙ
========================================================= */

function openGarageKnowledge() {

    if (typeof openKnowledgeMenu === "function") {

        openKnowledgeMenu();

        return;
    }


    openModal(`

        <h2>
            📚 База знаний
        </h2>


        <p>

            Здесь будет твоя большая база знаний
            по ремонту автомобилей.

        </p>


        <div class="knowledge-preview">

            🔧 Диагностика двигателя
            <br><br>

            💻 OBD-II и коды ошибок
            <br><br>

            ⚡ Автоэлектрика
            <br><br>

            🛞 Подвеска
            <br><br>

            🛑 Тормозная система
            <br><br>

            🛢️ Масла и жидкости

        </div>

    `);

}


/* =========================================================
   ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ
========================================================= */

function showGarageHint(text) {

    const hint =
        document.querySelector(".garage-hint");


    if (!hint) {
        return;
    }


    hint.textContent = text;


    setTimeout(() => {

        if (hint) {

            hint.textContent =
                "👆 Нажми на автомобиль, чтобы начать осмотр";

        }

    }, 2500);

}/* =========================================================
   ДЕТАЛЬНЫЙ ОСМОТР АВТОМОБИЛЯ
========================================================= */

function openDetailedCarInspection() {

    const order = state.currentOrder;

    if (!order) {

        showToast(
            "🚗 Нет автомобиля для осмотра"
        );

        return;
    }

    openModal(`

        <h2>
            🚗 Осмотр автомобиля
        </h2>

        <div class="car-inspection-card">

            <div class="inspection-car-icon">
                🚘
            </div>

            <div>

                <h3>
                    ${order.car.brand}
                    ${order.car.model}
                </h3>

                <p>
                    ${order.car.year} год
                    ·
                    ${order.car.mileage.toLocaleString("ru-RU")} км
                </p>

            </div>

        </div>


        <p>
            Выбери область автомобиля,
            которую хочешь проверить.
        </p>


        <div class="inspection-grid">


            <!-- КАПОТ -->

            <button
                class="inspection-button"
                onclick="openHood()"
            >

                <span>
                    🔧
                </span>

                <b>
                    Открыть капот
                </b>

                <small>
                    Осмотр моторного отсека
                </small>

            </button>


            <!-- КОЛЁСА -->

            <button
                class="inspection-button"
                onclick="inspectWheels()"
            >

                <span>
                    🛞
                </span>

                <b>
                    Колёса
                </b>

                <small>
                    Шины и состояние колёс
                </small>

            </button>


            <!-- ТОРМОЗА -->

            <button
                class="inspection-button"
                onclick="inspectBrakes()"
            >

                <span>
                    🛑
                </span>

                <b>
                    Тормоза
                </b>

                <small>
                    Диски и колодки
                </small>

            </button>


            <!-- ПОДВЕСКА -->

            <button
                class="inspection-button"
                onclick="inspectSuspension()"
            >

                <span>
                    🔩
                </span>

                <b>
                    Подвеска
                </b>

                <small>
                    Люфты и повреждения
                </small>

            </button>


            <!-- КУЗОВ -->

            <button
                class="inspection-button"
                onclick="inspectBody()"
            >

                <span>
                    🚘
                </span>

                <b>
                    Кузов
                </b>

                <small>
                    Внешний осмотр
                </small>

            </button>


            <!-- САЛОН -->

            <button
                class="inspection-button"
                onclick="inspectInterior()"
            >

                <span>
                    🪑
                </span>

                <b>
                    Салон
                </b>

                <small>
                    Приборы и органы управления
                </small>

            </button>

        </div>


        <button
            class="action-button"
            onclick="startDiagnosis()"
        >

            🔍 Перейти к диагностике

        </button>

    `);
}


/* =========================================================
   ОТКРЫТИЕ КАПОТА
========================================================= */

function openHood() {

    const order = state.currentOrder;

    if (!order) {
        return;
    }


    openModal(`

        <h2>
            🔧 Моторный отсек
        </h2>


        <div class="engine-bay">

            <div class="engine-bay-car">

                🚗

            </div>


            <div class="engine-part-grid">


                <button
                    class="engine-part"
                    onclick="inspectEngine()"
                >

                    <span>
                        ⚙️
                    </span>

                    <b>
                        Двигатель
                    </b>

                    <small>
                        Работа двигателя
                    </small>

                </button>


                <button
                    class="engine-part"
                    onclick="inspectBattery()"
                >

                    <span>
                        🔋
                    </span>

                    <b>
                        Аккумулятор
                    </b>

                    <small>
                        Напряжение и запуск
                    </small>

                </button>


                <button
                    class="engine-part"
                    onclick="inspectCooling()"
                >

                    <span>
                        💧
                    </span>

                    <b>
                        Охлаждение
                    </b>

                    <small>
                        Жидкость и система охлаждения
                    </small>

                </button>


                <button
                    class="engine-part"
                    onclick="inspectBelts()"
                >

                    <span>
                        🔄
                    </span>

                    <b>
                        Ремни
                    </b>

                    <small>
                        Состояние приводов
                    </small>

                </button>


                <button
                    class="engine-part"
                    onclick="inspectElectrical()"
                >

                    <span>
                        ⚡
                    </span>

                    <b>
                        Электрика
                    </b>

                    <small>
                        Разъёмы и проводка
                    </small>

                </button>


                <button
                    class="engine-part"
                    onclick="inspectFluids()"
                >

                    <span>
                        🛢️
                    </span>

                    <b>
                        Жидкости
                    </b>

                    <small>
                        Масло и технические жидкости
                    </small>

                </button>

            </div>

        </div>


        <button
            class="action-button"
            onclick="openDetailedCarInspection()"
        >

            ← Вернуться к автомобилю

        </button>

    `);
}


/* =========================================================
   ДВИГАТЕЛЬ
========================================================= */

function inspectEngine() {

    openModal(`

        <h2>
            ⚙️ Двигатель
        </h2>


        <div class="diagnosis-result">

            Визуальный осмотр двигателя
            не выявил очевидных повреждений.

            <br><br>

            Но визуально невозможно определить
            состояние многих внутренних компонентов.

        </div>


        <div class="stat-row">

            <span>
                Внешние повреждения
            </span>

            <b>
                Не обнаружены
            </b>

        </div>


        <div class="stat-row">

            <span>
                Посторонние звуки
            </span>

            <b>
                Требуется проверка
            </b>

        </div>


        <p>

            Для дальнейшей диагностики можно
            использовать:

            <br><br>

            🔊 прослушивание двигателя
            <br>
            💻 OBD-II
            <br>
            📊 Live Data
            <br>
            🧪 дополнительные измерения

        </p>


        <button
            class="action-button"
            onclick="openHood()"
        >

            ← Назад

        </button>

    `);
}


/* =========================================================
   АККУМУЛЯТОР
========================================================= */

function inspectBattery() {

    openModal(`

        <h2>
            🔋 Аккумулятор
        </h2>


        <div class="diagnosis-result">

            Визуально аккумулятор выглядит
            исправным.

            Однако состояние аккумулятора
            нельзя надёжно определить только
            по внешнему виду.

        </div>


        <p>

            Можно выполнить:

            <br><br>

            🔋 измерение напряжения;
            <br>
            ⚡ проверку при запуске;
            <br>
            🔧 проверку генератора;
            <br>
            📊 анализ параметров зарядки.

        </p>


        <button
            class="action-button"
            onclick="openHood()"
        >

            ← Назад

        </button>

    `);
}


/* =========================================================
   ОХЛАЖДЕНИЕ
========================================================= */

function inspectCooling() {

    openModal(`

        <h2>
            💧 Система охлаждения
        </h2>


        <div class="diagnosis-result">

            Проверяешь уровень охлаждающей жидкости,
            расширительный бачок и видимые соединения.

        </div>


        <div class="stat-row">

            <span>
                Уровень жидкости
            </span>

            <b>
                Норма
            </b>

        </div>


        <div class="stat-row">

            <span>
                Видимые утечки
            </span>

            <b>
                Не обнаружены
            </b>

        </div>


        <p>

            Для полноценной проверки потребуются
            дополнительные диагностические процедуры.

        </p>


        <button
            class="action-button"
            onclick="openHood()"
        >

            ← Назад

        </button>

    `);
}


/* =========================================================
   РЕМНИ
========================================================= */

function inspectBelts() {

    openModal(`

        <h2>
            🔄 Приводные ремни
        </h2>


        <div class="diagnosis-result">

            Проверяешь ремни на наличие трещин,
            следов износа и повреждений.

        </div>


        <p>

            Визуальная проверка полезна,
            но не позволяет определить
            все возможные проблемы.

        </p>


        <button
            class="action-button"
            onclick="openHood()"
        >

            ← Назад

        </button>

    `);
}


/* =========================================================
   ЭЛЕКТРИКА
========================================================= */

function inspectElectrical() {

    openModal(`

        <h2>
            ⚡ Электрика
        </h2>


        <div class="diagnosis-result">

            Осматриваешь видимые разъёмы,
            проводку и предохранители.

        </div>


        <p>

            Некоторые электрические неисправности
            невозможно обнаружить без измерений
            и диагностического оборудования.

        </p>


        <button
            class="action-button"
            onclick="openHood()"
        >

            ← Назад

        </button>

    `);
}


/* =========================================================
   ЖИДКОСТИ
========================================================= */

function inspectFluids() {

    openModal(`

        <h2>
            🛢️ Технические жидкости
        </h2>


        <div class="diagnosis-result">

            Проверяешь масло и другие доступные
            для визуального контроля жидкости.

        </div>


        <div class="stat-row">

            <span>
                Визуальное состояние
            </span>

            <b>
                Без явных отклонений
            </b>

        </div>


        <p>

            Для некоторых проверок потребуются
            дополнительные инструменты.

        </p>


        <button
            class="action-button"
            onclick="openHood()"
        >

            ← Назад

        </button>

    `);
}/* =========================================================
   КОЛЁСА
========================================================= */

function inspectWheels() {

    openModal(`

        <h2>
            🛞 Колёса и шины
        </h2>

        <div class="diagnosis-result">

            Проверяешь состояние шин,
            равномерность износа и видимые повреждения.

        </div>

        <div class="stat-row">
            <span>Протектор</span>
            <b>Проверить</b>
        </div>

        <div class="stat-row">
            <span>Давление</span>
            <b>Требует измерения</b>
        </div>

        <div class="stat-row">
            <span>Видимые повреждения</span>
            <b>Не обнаружены</b>
        </div>

        <p>
            Для полноценной проверки можно измерить
            давление, проверить балансировку и
            состояние дисков.
        </p>

        <button
            class="action-button"
            onclick="openDetailedCarInspection()"
        >
            ← Назад
        </button>

    `);
}


/* =========================================================
   ТОРМОЗА
========================================================= */

function inspectBrakes() {

    openModal(`

        <h2>
            🛑 Тормозная система
        </h2>

        <div class="diagnosis-result">

            Визуально проверяешь тормозные диски,
            колодки и видимые элементы системы.

        </div>

        <div class="stat-row">
            <span>Колодки</span>
            <b>Нужна проверка</b>
        </div>

        <div class="stat-row">
            <span>Диски</span>
            <b>Нужна проверка</b>
        </div>

        <div class="stat-row">
            <span>Утечки</span>
            <b>Не обнаружены</b>
        </div>

        <p>
            Для более точной диагностики потребуется
            измерение толщины дисков и колодок,
            а также проверка тормозной жидкости.
        </p>

        <button
            class="action-button"
            onclick="openDetailedCarInspection()"
        >
            ← Назад
        </button>

    `);
}


/* =========================================================
   ПОДВЕСКА
========================================================= */

function inspectSuspension() {

    openModal(`

        <h2>
            🔩 Подвеска
        </h2>

        <div class="diagnosis-result">

            Проверяешь стойки, рычаги,
            сайлентблоки и пыльники.

        </div>

        <div class="stat-row">
            <span>Амортизаторы</span>
            <b>Требуют проверки</b>
        </div>

        <div class="stat-row">
            <span>Пыльники</span>
            <b>Визуально без повреждений</b>
        </div>

        <div class="stat-row">
            <span>Люфты</span>
            <b>Нужна проверка</b>
        </div>

        <p>
            Некоторые неисправности подвески можно
            обнаружить только на подъёмнике.
        </p>

        <button
            class="action-button"
            onclick="openDetailedCarInspection()"
        >
            ← Назад
        </button>

    `);
}


/* =========================================================
   КУЗОВ
========================================================= */

function inspectBody() {

    openModal(`

        <h2>
            🚘 Кузов
        </h2>

        <div class="diagnosis-result">

            Проводишь внешний осмотр автомобиля.

        </div>

        <div class="stat-row">
            <span>Стёкла</span>
            <b>Без явных повреждений</b>
        </div>

        <div class="stat-row">
            <span>Фары</span>
            <b>Проверить</b>
        </div>

        <div class="stat-row">
            <span>Следы ремонта</span>
            <b>Не обнаружены</b>
        </div>

        <p>
            В будущем здесь появится более подробный
            осмотр кузова: толщина краски, коррозия,
            геометрия кузова и следы ДТП.
        </p>

        <button
            class="action-button"
            onclick="openDetailedCarInspection()"
        >
            ← Назад
        </button>

    `);
}


/* =========================================================
   САЛОН
========================================================= */

function inspectInterior() {

    openModal(`

        <h2>
            🪑 Салон автомобиля
        </h2>

        <div class="diagnosis-result">

            Проверяешь приборную панель,
            органы управления и состояние салона.

        </div>

        <div class="stat-row">
            <span>Панель приборов</span>
            <b>Работает</b>
        </div>

        <div class="stat-row">
            <span>Контрольные лампы</span>
            <b>Проверить</b>
        </div>

        <div class="stat-row">
            <span>Электрооборудование</span>
            <b>Требует проверки</b>
        </div>

        <p>
            В будущем можно будет отдельно проверять
            кондиционер, мультимедиа, стеклоподъёмники,
            центральный замок и другое оборудование.
        </p>

        <button
            class="action-button"
            onclick="openDetailedCarInspection()"
        >
            ← Назад
        </button>

    `);
}


/* =========================================================
   ДОПОЛНИТЕЛЬНАЯ АНИМАЦИЯ
========================================================= */

function animateGarageCar() {

    const car =
        document.getElementById("visualCar");

    if (!car) {
        return;
    }

    car.classList.remove("car-inspection-animation");

    void car.offsetWidth;

    car.classList.add("car-inspection-animation");

}


/* =========================================================
   ИНИЦИАЛИЗАЦИЯ ВИЗУАЛЬНОГО ГАРАЖА
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setTimeout(() => {

            renderGarageScene();

        }, 100);

    }
);
