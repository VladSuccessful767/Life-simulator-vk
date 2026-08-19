const SAVE_KEY = "auto_service_v02";

/* =========================================================
   БАЗА ЗНАНИЙ
========================================================= */

const knowledgeBase = {
    engine: [
        {
            title: "🔥 Двигатель не запускается",
            text: "При проблемах с запуском необходимо последовательно проверить питание, запуск двигателя, зажигание и подачу топлива. Не стоит сразу менять дорогие детали."
        },
        {
            title: "🔥 Пропуски зажигания",
            text: "Пропуски могут быть связаны со свечами, катушкой, форсункой, подсосом воздуха, компрессией и другими причинами. Один код ошибки не всегда означает, что виновата конкретная деталь."
        },
        {
            title: "🔧 Почему важна последовательная диагностика",
            text: "Хороший механик сначала собирает факты, затем формирует гипотезу и только после подтверждения предлагает ремонт."
        }
    ],

    electrical: [
        {
            title: "🔋 Аккумулятор",
            text: "Напряжение аккумулятора помогает оценить его состояние, но одного измерения напряжения недостаточно для полной оценки аккумулятора."
        },
        {
            title: "⚡ Стартер",
            text: "Если стартер вращает двигатель медленно или с перебоями, необходимо проверить питание стартера, соединения и сам стартер."
        }
    ],

    obd: [
        {
            title: "💻 OBD-II",
            text: "Сканер позволяет получать диагностические коды и параметры электронных систем автомобиля. Код ошибки является подсказкой для диагностики, а не автоматическим приговором детали."
        },
        {
            title: "📟 P0301",
            text: "P0301 означает обнаруженные пропуски воспламенения в цилиндре №1. Возможных причин несколько, поэтому требуется дальнейшая проверка."
        }
    ],

    suspension: [
        {
            title: "🛞 Подвеска",
            text: "Стук в подвеске может быть связан со стойками стабилизатора, втулками, шаровыми опорами, амортизаторами и другими элементами."
        }
    ],

    brakes: [
        {
            title: "🛑 Тормозная система",
            text: "При проблемах с тормозами безопасность имеет приоритет над стоимостью ремонта. Нельзя рекомендовать ремонт, не проверив состояние системы."
        }
    ]
};


/* =========================================================
   СЦЕНАРИИ ЗАКАЗОВ
   Позже сюда можно добавлять тысячи комбинаций.
========================================================= */

const scenarios = [

    {
        id: 1,

        car: {
            brand: "Kia",
            model: "Rio",
            year: 2015,
            mileage: 142000
        },

        client: {
            name: "Алексей",
            type: "Обычный клиент",
            budget: 7000,
            priceSensitivity: 0.55
        },

        complaint:
            "Машина утром заводится очень тяжело. Иногда приходится долго крутить стартер.",

        diagnosisPrice: 800,

        possibleCauses: [
            "battery",
            "spark",
            "starter",
            "fuel"
        ],

        correctCause: "spark",

        checks: {

            visual: {
                name: "👀 Визуальный осмотр",
                time: 5,
                equipment: 0,
                result:
                    "Явных внешних повреждений не обнаружено."
            },

            battery: {
                name: "🔋 Проверить аккумулятор",
                time: 5,
                equipment: 1,
                result:
                    "Напряжение после простоя — 12.6 В. Значение находится в нормальном диапазоне."
            },

            starter: {
                name: "⚡ Проверить стартер",
                time: 15,
                equipment: 2,
                result:
                    "Стартер вращает двигатель с нормальной скоростью. Явных признаков неисправности не обнаружено."
            },

            spark: {
                name: "🔥 Проверить свечи",
                time: 10,
                equipment: 1,
                result:
                    "Одна свеча имеет заметный износ. Результат требует дальнейшего анализа."
            },

            fuel: {
                name: "⛽ Проверить топливную систему",
                time: 20,
                equipment: 3,
                result:
                    "Давление топлива находится в допустимом диапазоне."
            },

            obd: {
                name: "💻 Сканирование OBD",
                time: 10,
                equipment: 2,
                result:
                    "Критических кодов неисправностей двигателя не обнаружено."
            }
        },

        repairs: {
            spark: {
                name: "Комплект свечей зажигания",
                partCost: 2500,
                workCost: 1000,
                quality: "Стандарт"
            }
        }
    }

];


/* =========================================================
   СОСТОЯНИЕ ИГРЫ
========================================================= */

const defaultState = {

    money: 15000,

    reputation: 0,

    level: 1,

    xp: 0,

    day: 1,

    time: 480,

    workDayMinutes: 600,

    equipment: 100,

    garage: {
        level: 1,
        posts: 1
    },

    currentScenario: 0,

    order: {
        stage: "new",

        diagnosisPaid: false,

        diagnosisStarted: false,

        diagnosisComplete: false,

        selectedCause: null,

        repair: null,

        agreed: false,

        completed: false,

        checks: [],

        knowledgeUsed: false
    }
};


let state =
    JSON.parse(localStorage.getItem(SAVE_KEY) || "null")
    || structuredClone(defaultState);


let currentScenario =
    scenarios[state.currentScenario] || scenarios[0];


/* =========================================================
   DOM
========================================================= */

const $ = id => document.getElementById(id);


function save() {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(state)
    );
}


/* =========================================================
   ФОРМАТИРОВАНИЕ
========================================================= */

function money(value) {

    return new Intl.NumberFormat(
        "ru-RU"
    ).format(value) + " ₽";
}


function timeText(minutes) {

    const hours =
        Math.floor(minutes / 60);

    const mins =
        minutes % 60;

    return (
        String(hours).padStart(2, "0")
        + ":"
        + String(mins).padStart(2, "0")
    );
}


function addTime(minutes) {

    state.time += minutes;

    if (state.time >= state.workDayMinutes) {

        state.time =
            state.workDayMinutes;

        showToast(
            "⏰ Рабочий день почти закончился"
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

    while (
        state.xp >=
        (100 + (state.level - 1) * 50)
    ) {

        state.xp -=
            100 + (state.level - 1) * 50;

        state.level++;

        state.reputation += 3;

        showToast(
            `🎉 Новый уровень: ${state.level}`
        );
    }
}


function addReputation(amount) {

    state.reputation =
        Math.max(
            -100,
            state.reputation + amount
        );
}


/* =========================================================
   ОТОБРАЖЕНИЕ
========================================================= */

function render() {

    $("money").textContent =
        money(state.money);

    $("reputation").textContent =
        state.reputation;

    $("level").textContent =
        state.level;

    $("xp").textContent =
        `${state.xp} / ${100 + (state.level - 1) * 50}`;

    $("carName").textContent =
        `${currentScenario.car.brand} ${currentScenario.car.model}`;

    $("carProblem").textContent =
        `«${currentScenario.complaint}»`;

    updateGarageInfo();
}


function updateGarageInfo() {

    const garageLevel =
        document.querySelector(".garage-level");

    if (garageLevel) {

        garageLevel.textContent =
            `Уровень ${state.garage.level}`;
    }

    const garageStats =
        document.querySelectorAll(".garage-stats b");

    if (garageStats.length >= 3) {

        garageStats[0].textContent =
            state.garage.posts;

        garageStats[1].textContent =
            `Ресурс ${state.equipment}%`;

        garageStats[2].textContent =
            "1";
    }
}


/* =========================================================
   МОДАЛЬНОЕ ОКНО
========================================================= */

function openModal(content) {

    $("modalContent").innerHTML =
        content;

    $("modal").classList.add("show");
}


function closeModal() {

    $("modal").classList.remove("show");
}


/* =========================================================
   УВЕДОМЛЕНИЕ
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
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);
}


/* =========================================================
   НАЧАЛО ЗАКАЗА
========================================================= */

function startDiagnosis() {

    if (state.order.completed) {

        showToast(
            "Этот заказ уже завершён"
        );

        return;
    }


    if (state.order.diagnosisStarted) {

        openDiagnosis();

        return;
    }


    state.order.diagnosisStarted =
        true;

    state.order.stage =
        "diagnosis";


    openDiagnosis();
}


function openDiagnosis() {

    const checks =
        currentScenario.checks;


    let html = `

        <h2>🔍 Диагностика</h2>

        <p>
            <b>${currentScenario.car.brand}
            ${currentScenario.car.model}</b>,
            ${currentScenario.car.year} г.,
            пробег ${currentScenario.car.mileage.toLocaleString("ru-RU")} км.
        </p>

        <div class="stat-row">
            <span>⏰ Время</span>
            <b>${timeText(state.time)}</b>
        </div>

        <div class="stat-row">
            <span>🧰 Ресурс оборудования</span>
            <b>${state.equipment}%</b>
        </div>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>${money(currentScenario.diagnosisPrice)}</b>
        </div>

        <p>
            Каждая проверка занимает время и может
            расходовать ресурс оборудования.
            Даже если она ничего не обнаружит.
        </p>

        <div class="diagnosis-list">
    `;


    for (const key in checks) {

        const check =
            checks[key];

        const already =
            state.order.checks.some(
                item => item.key === key
            );


        html += `

            <button
                class="diagnosis-button"
                ${already ? "disabled" : ""}
                onclick="performCheck('${key}')">

                ${check.name}

                <br>

                <small>
                    ⏱️ ${check.time} мин
                    · 🧰 −${check.equipment}
                </small>

            </button>
        `;
    }


    html += `
        </div>

        <div id="diagnosisHistory">

            ${renderDiagnosisHistory()}

        </div>

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

    const check =
        currentScenario.checks[key];


    if (!check) {

        showToast(
            "Проверка недоступна"
        );

        return;
    }


    if (
        state.order.checks.some(
            item => item.key === key
        )
    ) {

        showToast(
            "Эта проверка уже выполнена"
        );

        return;
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


    addTime(check.time);

    useEquipment(
        check.equipment
    );


    state.order.checks.push({

        key: key,

        name: check.name,

        result: check.result,

        time: check.time,

        equipment: check.equipment
    });


    save();

    openDiagnosis();
}


/* =========================================================
   ИСТОРИЯ
========================================================= */

function renderDiagnosisHistory() {

    if (
        state.order.checks.length === 0
    ) {

        return `
            <div class="diagnosis-result">
                📋 Проверки пока не проводились.
            </div>
        `;
    }


    let html = `

        <div class="diagnosis-result">

            <b>📋 История диагностики</b>

    `;


    state.order.checks.forEach(
        (check, index) => {

            html += `

                <div style="
                    margin-top:10px;
                    padding-top:10px;
                    border-top:1px solid #303640;
                ">

                    <b>
                        ${index + 1}.
                        ${check.name}
                    </b>

                    <br>

                    <small>
                        ⏱️ −${check.time} мин
                        · 🧰 −${check.equipment}
                    </small>

                    <br><br>

                    ${check.result}

                </div>
            `;
        }
    );


    html += `</div>`;

    return html;
}


/* =========================================================
   АНАЛИЗ
========================================================= */

function openAnalysis() {

    if (
        state.order.checks.length === 0
    ) {

        showToast(
            "Сначала проведи хотя бы одну проверку"
        );

        return;
    }


    let html = `

        <h2>🧠 Анализ</h2>

        <p>
            Теперь используй полученные данные.
            Выбери наиболее вероятную причину.
        </p>

        <div class="diagnosis-result">

            ${renderAnalysisData()}

        </div>

        <div class="diagnosis-list">
    `;


    currentScenario.possibleCauses
        .forEach(cause => {

            const labels = {

                battery:
                    "🔋 Аккумулятор",

                spark:
                    "🔥 Свечи зажигания",

                starter:
                    "⚡ Стартер",

                fuel:
                    "⛽ Топливная система"
            };


            html += `

                <button
                    class="diagnosis-button"
                    onclick="chooseDiagnosis('${cause}')">

                    ${labels[cause]}

                </button>
            `;
        });


    html += `

        </div>

        <button
            class="action-button"
            onclick="openKnowledge('engine')">

            📚 Открыть базу знаний

        </button>
    `;


    openModal(html);
}


function renderAnalysisData() {

    if (
        state.order.checks.length === 0
    ) {

        return "Нет данных.";
    }


    return state.order.checks
        .map(
            check =>
                `<b>${check.name}</b><br>${check.result}`
        )
        .join("<hr>");
}


/* =========================================================
   ВЫБОР ДИАГНОЗА
========================================================= */

function chooseDiagnosis(cause) {

    const correct =
        currentScenario.correctCause;


    if (cause !== correct) {

        addReputation(-2);

        addXP(5);

        save();

        openModal(`

            <h2>❌ Диагноз не подтверждён</h2>

            <p>
                Полученные данные не подтверждают
                выбранную неисправность.
            </p>

            <div class="diagnosis-result">

                ⭐ Репутация −2<br>
                📈 Опыт +5

            </div>

            <p>
                Можно вернуться к диагностике,
                изучить базу знаний и провести
                дополнительные проверки.
            </p>

            <button
                class="action-button"
                onclick="openDiagnosis()">

                🔍 Продолжить диагностику

            </button>

        `);

        return;
    }


    state.order.selectedCause =
        cause;

    state.order.diagnosisComplete =
        true;

    state.order.stage =
        "agreement";


    addXP(20);

    save();

    openRepairAgreement();
}


/* =========================================================
   СОГЛАСОВАНИЕ
========================================================= */

function openRepairAgreement() {

    const repair =
        currentScenario.repairs[
            state.order.selectedCause
        ];


    if (!repair) {

        openModal(`

            <h2>⚠️ Нужен дополнительный ремонт</h2>

            <p>
                Для этой неисправности пока
                не подготовлен ремонтный сценарий.
            </p>

        `);

        return;
    }


    const cost =
        repair.partCost +
        repair.workCost;


    openModal(`

        <h2>📋 Заказ-наряд</h2>

        <div class="stat-row">
            <span>Автомобиль</span>
            <b>
                ${currentScenario.car.brand}
                ${currentScenario.car.model}
            </b>
        </div>

        <div class="stat-row">
            <span>Неисправность</span>
            <b>${repair.name}</b>
        </div>

        <div class="stat-row">
            <span>🔩 Запчасть</span>
            <b>${money(repair.partCost)}</b>
        </div>

        <div class="stat-row">
            <span>🔧 Работа</span>
            <b>${money(repair.workCost)}</b>
        </div>

        <div class="stat-row">
            <span>💰 Себестоимость</span>
            <b>${money(cost)}</b>
        </div>

        <p>
            Сам установи цену для клиента.
            Клиент не видит твою себестоимость.
        </p>

        <input
            id="repairPrice"
            type="number"
            value="${cost + 1000}"
            min="${cost}"
            step="100"
            style="
                width:100%;
                padding:12px;
                margin-top:8px;
                border-radius:10px;
                border:1px solid #3a424e;
                background:#181c22;
                color:white;
                font-size:16px;
            "
        >

        <div class="diagnosis-result">

            💡 Высокая цена увеличивает прибыль,
            но может повысить вероятность отказа.

        </div>

        <button
            class="action-button"
            onclick="offerRepair()">

            🤝 Предложить клиенту

        </button>
    `);
}


/* =========================================================
   ПРЕДЛОЖЕНИЕ ЦЕНЫ
========================================================= */

function offerRepair() {

    const repair =
        currentScenario.repairs[
            state.order.selectedCause
        ];


    const cost =
        repair.partCost +
        repair.workCost;


    const input =
        $("repairPrice");


    const price =
        Number(input.value);


    if (
        !price ||
        price < cost
    ) {

        showToast(
            "Цена не может быть ниже себестоимости"
        );

        return;
    }


    const markup =
        (price - cost) /
        cost;


    let chance =
        0.95 -
        markup *
        currentScenario.client.priceSensitivity;


    chance =
        Math.max(
            0.15,
            Math.min(
                0.95,
                chance
            )
        );


    const accepted =
        Math.random() <
        chance;


    state.order.repair = {

        name: repair.name,

        partCost:
            repair.partCost,

        workCost:
            repair.workCost,

        cost: cost,

        price: price,

        profit:
            price - cost
    };


    if (!accepted) {

        save();

        openModal(`

            <h2>❌ Клиент отказался</h2>

            <p>
                Клиент считает предложенную цену
                слишком высокой.
            </p>

            <div class="diagnosis-result">

                💰 Диагностика оплачена:
                <b>${money(currentScenario.diagnosisPrice)}</b>

            </div>

            <button
                class="action-button"
                onclick="finishDiagnosisOnly()">

                📋 Завершить заказ

            </button>

        `);

        return;
    }


    state.order.agreed =
        true;


    save();

    openRepairConfirmation();
}


/* =========================================================
   ПОДТВЕРЖДЕНИЕ РЕМОНТА
========================================================= */

function openRepairConfirmation() {

    const repair =
        state.order.repair;


    openModal(`

        <h2>✅ Клиент согласен</h2>

        <div class="stat-row">
            <span>Стоимость</span>
            <b>${money(repair.price)}</b>
        </div>

        <div class="stat-row">
            <span>Себестоимость</span>
            <b>${money(repair.cost)}</b>
        </div>

        <div class="stat-row">
            <span>Прибыль</span>
            <b>${money(repair.profit)}</b>
        </div>

        <p>
            Клиент оставляет автомобиль
            на ремонт.
        </p>

        <button
            class="action-button"
            onclick="performRepair()">

            🔧 Выполнить ремонт

        </button>

    `);
}


/* =========================================================
   РЕМОНТ
========================================================= */

function performRepair() {

    const repair =
        state.order.repair;


    const repairTime =
        35;


    if (
        state.equipment < 2
    ) {

        showToast(
            "🧰 Недостаточно ресурса оборудования"
        );

        return;
    }


    addTime(repairTime);

    useEquipment(2);


    state.money +=
        repair.profit;

    state.money +=
        currentScenario.diagnosisPrice;


    addXP(30);

    addReputation(8);


    state.order.completed =
        true;

    state.order.stage =
        "completed";


    save();

    render();


    openModal(`

        <h2>🧪 Ремонт завершён</h2>

        <p>
            Ремонт выполнен.
            Теперь автомобиль необходимо проверить.
        </p>

        <div class="stat-row">
            <span>⏱️ Время ремонта</span>
            <b>35 мин</b>
        </div>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>+${money(currentScenario.diagnosisPrice)}</b>
        </div>

        <div class="stat-row">
            <span>💵 Прибыль ремонта</span>
            <b>+${money(repair.profit)}</b>
        </div>

        <div class="stat-row">
            <span>⭐ Репутация</span>
            <b>+8</b>
        </div>

        <div class="stat-row">
            <span>📈 Опыт</span>
            <b>+30 XP</b>
        </div>

        <button
            class="action-button"
            onclick="finishOrder()">

            🧪 Проверить автомобиль

        </button>

    `);
}


/* =========================================================
   ЗАВЕРШЕНИЕ
========================================================= */

function finishOrder() {

    openModal(`

        <h2>✅ Проверка после ремонта</h2>

        <p>
            Двигатель запускается нормально.
            Жалоба клиента устранена.
        </p>

        <div class="diagnosis-result">

            🧠 <b>Что ты узнал:</b><br><br>

            Неисправность нельзя определять
            только по одному симптому.
            Сначала собирай данные,
            исключай исправные системы,
            затем подтверждай диагноз.

        </div>

        <button
            class="action-button"
            onclick="newOrder()">

            🚗 Получить новый заказ

        </button>

    `);
}


/* =========================================================
   ЕСЛИ КЛИЕНТ ОТКАЗАЛСЯ
========================================================= */

function finishDiagnosisOnly() {

    state.money +=
        currentScenario.diagnosisPrice;


    addXP(15);


    state.order.diagnosisPaid =
        true;

    state.order.completed =
        true;

    state.order.stage =
        "completed";


    save();

    render();


    openModal(`

        <h2>📋 Заказ завершён</h2>

        <p>
            Клиент отказался от ремонта,
            но оплатил диагностику.
        </p>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>+${money(currentScenario.diagnosisPrice)}</b>
        </div>

        <div class="stat-row">
            <span>📈 Опыт</span>
            <b>+15 XP</b>
        </div>

        <button
            class="action-button"
            onclick="newOrder()">

            🚗 Получить новый заказ

        </button>

    `);
}


/* =========================================================
   НОВЫЙ ЗАКАЗ
========================================================= */

function newOrder() {

    state.currentScenario++;

    if (
        state.currentScenario >=
        scenarios.length
    ) {

        state.currentScenario =
            0;
    }


    currentScenario =
        scenarios[
            state.currentScenario
        ];


    state.order = {

        stage: "new",

        diagnosisPaid: false,

        diagnosisStarted: false,

        diagnosisComplete: false,

        selectedCause: null,

        repair: null,

        agreed: false,

        completed: false,

        checks: [],

        knowledgeUsed: false
    };


    state.day++;

    state.time = 480;


    save();

    render();

    closeModal();

    showToast(
        "🚗 Новый клиент приехал!"
    );
}


/* =========================================================
   БАЗА ЗНАНИЙ
========================================================= */

function openKnowledge(category) {

    const articles =
        knowledgeBase[category]
        || knowledgeBase.engine;


    let html = `

        <h2>📚 База знаний</h2>

        <p>
            Используй знания, чтобы лучше понимать
            результаты диагностики.
        </p>
    `;


    articles.forEach(
        article => {

            html += `

                <div class="diagnosis-result">

                    <b>
                        ${article.title}
                    </b>

                    <p>
                        ${article.text}
                    </p>

                </div>

            `;
        }
    );


    html += `

        <button
            class="action-button"
            onclick="openKnowledgeMenu()">

            📚 Все разделы

        </button>

    `;


    openModal(html);
}


function openKnowledgeMenu() {

    openModal(`

        <h2>📚 База знаний</h2>

        <div class="diagnosis-list">

            <button
                class="diagnosis-button"
                onclick="openKnowledge('engine')">

                🔥 Двигатель

            </button>

            <button
                class="diagnosis-button"
                onclick="openKnowledge('electrical')">

                ⚡ Электрика

            </button>

            <button
                class="diagnosis-button"
                onclick="openKnowledge('obd')">

                💻 OBD-II

            </button>

            <button
                class="diagnosis-button"
                onclick="openKnowledge('suspension')">

                🛞 Подвеска

            </button>

            <button
                class="diagnosis-button"
                onclick="openKnowledge('brakes')">

                🛑 Тормоза

            </button>

        </div>

    `);
}


/* =========================================================
   ИНСТРУМЕНТЫ
========================================================= */

function openTools() {

    openModal(`

        <h2>🧰 Инструменты</h2>

        <div class="stat-row">
            <span>🔧 Базовый набор</span>
            <b>Есть</b>
        </div>

        <div class="stat-row">
            <span>🧰 Ресурс</span>
            <b>${state.equipment}%</b>
        </div>

        <div class="stat-row">
            <span>💻 OBD-сканер</span>
            <b>Базовый</b>
        </div>

        <p>
            Позже можно будет покупать более
            точное оборудование и обслуживать его.
        </p>

    `);
}


/* =========================================================
   АВТОМОБИЛИ
========================================================= */

function openCars() {

    openModal(`

        <h2>🚘 Автомобили</h2>

        <p>
            Собственного автомобиля пока нет.
        </p>

        <p>
            В будущем здесь появятся покупка,
            обслуживание, ремонт и тюнинг
            собственных автомобилей.
        </p>

    `);
}


/* =========================================================
   СТО
========================================================= */

function openService() {

    openModal(`

        <h2>🏢 СТО</h2>

        <div class="stat-row">
            <span>Уровень</span>
            <b>${state.garage.level}</b>
        </div>

        <div class="stat-row">
            <span>Посты</span>
            <b>${state.garage.posts}</b>
        </div>

        <div class="stat-row">
            <span>День</span>
            <b>${state.day}</b>
        </div>

        <div class="stat-row">
            <span>Время</span>
            <b>${timeText(state.time)}</b>
        </div>

        <p>
            В дальнейшем здесь появятся расширение
            гаража, новые посты, сотрудники,
            склад, подъёмники и полноценная СТО.
        </p>

    `);
}


/* =========================================================
   ОБУЧЕНИЕ
========================================================= */

function openTraining() {

    openKnowledgeMenu();
}


/* =========================================================
   КНОПКИ
========================================================= */

$("startDiagnosis").onclick =
    startDiagnosis;

$("trainingButton").onclick =
    openTraining;

$("toolsButton").onclick =
    openTools;

$("carsButton").onclick =
    openCars;

$("serviceButton").onclick =
    openService;

$("closeModal").onclick =
    closeModal;


$("modal").onclick = event => {

    if (
        event.target.id === "modal"
    ) {

        closeModal();
    }
};


/* =========================================================
   ЗАПУСК
========================================================= */

render();

save();
