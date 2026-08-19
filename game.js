const SAVE_KEY = "auto_service_v01";

const state = JSON.parse(localStorage.getItem(SAVE_KEY) || "null") || {
    money: 15000,
    reputation: 0,
    level: 1,
    xp: 0,

    garage: {
        level: 1,
        posts: 1
    },

    currentOrder: {
        car: "Kia Rio",
        complaint: "Машина плохо заводится утром",
        diagnosis: null,
        repair: null,
        agreed: false,
        completed: false
    }
};

const $ = id => document.getElementById(id);

function save() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function xpNeeded() {
    return 100 + (state.level - 1) * 50;
}

function addXP(amount) {
    state.xp += amount;

    while (state.xp >= xpNeeded()) {
        state.xp -= xpNeeded();
        state.level++;

        state.reputation += 5;

        showToast(
            `🎉 Новый уровень механика: ${state.level}`
        );
    }
}

function addMoney(amount) {
    state.money += amount;
}

function addReputation(amount) {
    state.reputation = Math.max(
        0,
        state.reputation + amount
    );
}

function render() {
    $("money").textContent =
        new Intl.NumberFormat("ru-RU").format(state.money) + " ₽";

    $("reputation").textContent =
        state.reputation;

    $("xp").textContent =
        `${state.xp} / ${xpNeeded()}`;

    $("level").textContent =
        state.level;

    updateOrder();
}

function updateOrder() {
    if (!state.currentOrder.completed) {
        $("carName").textContent =
            state.currentOrder.car;

        $("carProblem").textContent =
            `«${state.currentOrder.complaint}»`;
    }
}

function openModal(html) {
    $("modalContent").innerHTML = html;
    $("modal").classList.add("show");
}

function closeModal() {
    $("modal").classList.remove("show");
}

function showToast(text) {
    const toast = $("toast");

    toast.textContent = text;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

/* =========================
   ДИАГНОСТИКА
========================= */

function startDiagnosis() {

    if (state.currentOrder.completed) {
        showToast("Этот заказ уже завершён");
        return;
    }

    openModal(`
        <h2>🔍 Диагностика</h2>

        <p>
            Клиент сообщает, что автомобиль утром
            заводится тяжело и стартер приходится
            долго крутить.
        </p>

        <p>
            Проведи несколько проверок.
            Собирай информацию перед тем,
            как принимать решение о ремонте.
        </p>

        <div class="diagnosis-list">

            <button class="diagnosis-button"
                onclick="checkBattery()">
                🔋 Проверить аккумулятор
            </button>

            <button class="diagnosis-button"
                onclick="checkSpark()">
                🔥 Проверить свечи
            </button>

            <button class="diagnosis-button"
                onclick="checkStarter()">
                ⚡ Проверить стартер
            </button>

            <button class="diagnosis-button"
                onclick="checkFuel()">
                ⛽ Проверить топливную систему
            </button>

        </div>

        <div id="diagnosisResult"></div>

        <button
            class="action-button"
            onclick="openAnalysis()">
            🧠 Перейти к анализу
        </button>
    `);
}

let diagnosisData = {
    battery: false,
    spark: false,
    starter: false,
    fuel: false
};

function setDiagnosisResult(text) {

    $("diagnosisResult").innerHTML = `
        <div class="diagnosis-result">
            ${text}
        </div>
    `;
}

function checkBattery() {

    diagnosisData.battery = true;

    setDiagnosisResult(`
        🔋 <b>Аккумулятор:</b><br>
        Напряжение после простоя — 12.6 В.<br><br>

        Это нормальное значение.
        Аккумулятор пока не выглядит основной причиной
        проблемы.
    `);
}

function checkSpark() {

    diagnosisData.spark = true;

    setDiagnosisResult(`
        🔥 <b>Свечи зажигания:</b><br>
        Одна из свечей имеет заметный износ.<br><br>

        Это уже подозрительный результат.
        Но одной проверки недостаточно,
        чтобы окончательно определить причину.
    `);
}

function checkStarter() {

    diagnosisData.starter = true;

    setDiagnosisResult(`
        ⚡ <b>Стартер:</b><br>
        Стартер вращает двигатель нормально.<br><br>

        Признаков серьёзной неисправности
        стартера не обнаружено.
    `);
}

function checkFuel() {

    diagnosisData.fuel = true;

    setDiagnosisResult(`
        ⛽ <b>Топливная система:</b><br>
        Давление топлива находится
        в допустимом диапазоне.<br><br>

        Явных признаков неисправности
        топливной системы нет.
    `);
}

/* =========================
   АНАЛИЗ
========================= */

function openAnalysis() {

    if (
        !diagnosisData.battery &&
        !diagnosisData.spark &&
        !diagnosisData.starter &&
        !diagnosisData.fuel
    ) {
        showToast("Сначала проведи хотя бы одну проверку");
        return;
    }

    openModal(`
        <h2>🧠 Анализ</h2>

        <p>
            Теперь сопоставь жалобу клиента
            с результатами диагностики.
        </p>

        <p>
            Машина плохо заводится.
            Стартер вращает двигатель нормально,
            аккумулятор исправен,
            топливное давление в норме,
            но свечи имеют признаки износа.
        </p>

        <p>
            Что считаешь наиболее вероятной причиной?
        </p>

        <div class="diagnosis-list">

            <button class="diagnosis-button"
                onclick="chooseDiagnosis('spark')">
                🔥 Износ свечей зажигания
            </button>

            <button class="diagnosis-button"
                onclick="chooseDiagnosis('battery')">
                🔋 Неисправность аккумулятора
            </button>

            <button class="diagnosis-button"
                onclick="chooseDiagnosis('starter')">
                ⚡ Неисправность стартера
            </button>

            <button class="diagnosis-button"
                onclick="chooseDiagnosis('fuel')">
                ⛽ Неисправность топливной системы
            </button>

        </div>
    `);
}

function chooseDiagnosis(type) {

    if (type !== "spark") {

        addReputation(-3);

        openModal(`
            <h2>❌ Диагноз оказался неверным</h2>

            <p>
                Ты выбрал неисправность, которая
                не подтверждается результатами проверки.
            </p>

            <p>
                Хороший механик не должен менять детали
                наугад — сначала нужно подтвердить причину.
            </p>

            <div class="diagnosis-result">
                ⭐ Репутация: −3
            </div>

            <button class="action-button"
                onclick="startDiagnosis()">
                🔍 Вернуться к диагностике
            </button>
        `);

        save();
        render();

        return;
    }

    state.currentOrder.diagnosis =
        "Износ свечей зажигания";

    addXP(20);

    openRepairAgreement();
}

/* =========================
   СОГЛАСОВАНИЕ РЕМОНТА
========================= */

function openRepairAgreement() {

    const partCost = 2500;
    const workCost = 1000;
    const costPrice = partCost + workCost;

    openModal(`
        <h2>📋 Предложение клиенту</h2>

        <div class="stat-row">
            <span>🔩 Свечи зажигания</span>
            <b>2 500 ₽</b>
        </div>

        <div class="stat-row">
            <span>🔧 Работа</span>
            <b>1 000 ₽</b>
        </div>

        <div class="stat-row">
            <span>💰 Себестоимость</span>
            <b>${costPrice.toLocaleString("ru-RU")} ₽</b>
        </div>

        <p>
            Теперь сам установи цену ремонта.
            Клиент не видит твою себестоимость.
        </p>

        <label>
            <b>Цена для клиента:</b>
        </label>

        <input
            id="repairPrice"
            type="number"
            value="4500"
            min="2500"
            step="100"
            style="
                width:100%;
                margin-top:8px;
                padding:12px;
                border-radius:10px;
                border:1px solid #3a424e;
                background:#181c22;
                color:white;
                font-size:16px;
            "
        >

        <div class="diagnosis-result">
            💡 Чем выше цена, тем больше потенциальная
            прибыль, но тем выше вероятность отказа клиента.
        </div>

        <button class="action-button"
            onclick="offerRepair()">
            🤝 Предложить клиенту
        </button>
    `);
}

function offerRepair() {

    const input = $("repairPrice");

    const price =
        Number(input.value);

    const costPrice = 3500;

    if (!price || price < costPrice) {

        showToast(
            "Цена не может быть ниже себестоимости"
        );

        return;
    }

    state.currentOrder.repair = {
        price: price,
        cost: costPrice
    };

    /*
        Простая вероятность согласия.

        Чем выше наценка,
        тем меньше вероятность.
    */

    const markup =
        (price - costPrice) / costPrice;

    let chance = 0.92 - markup * 0.8;

    chance = Math.max(
        0.20,
        Math.min(0.95, chance)
    );

    const accepted =
        Math.random() < chance;

    if (!accepted) {

        openModal(`
            <h2>❌ Клиент отказался</h2>

            <p>
                Клиент считает ремонт слишком дорогим.
            </p>

            <div class="diagnosis-result">
                💰 Диагностика оплачена: <b>800 ₽</b>
            </div>

            <p>
                Ты всё равно получил оплату
                за проделанную диагностическую работу.
            </p>

            <button class="action-button"
                onclick="finishDiagnosisOnly()">
                Завершить заказ
            </button>
        `);

        return;
    }

    state.currentOrder.agreed = true;

    openRepairConfirmation(price);
}

/* =========================
   РЕМОНТ
========================= */

function openRepairConfirmation(price) {

    const profit =
        price - state.currentOrder.repair.cost;

    openModal(`
        <h2>✅ Клиент согласен</h2>

        <div class="stat-row">
            <span>Стоимость ремонта</span>
            <b>${price.toLocaleString("ru-RU")} ₽</b>
        </div>

        <div class="stat-row">
            <span>Твоя прибыль</span>
            <b>${profit.toLocaleString("ru-RU")} ₽</b>
        </div>

        <p>
            Клиент оставляет автомобиль
            в гараже. Можно начинать ремонт.
        </p>

        <button class="action-button"
            onclick="performRepair()">
            🔧 Выполнить ремонт
        </button>
    `);
}

function performRepair() {

    const price =
        state.currentOrder.repair.price;

    const cost =
        state.currentOrder.repair.cost;

    const profit =
        price - cost;

    addMoney(profit);

    addMoney(800);

    addXP(30);

    addReputation(8);

    state.currentOrder.completed = true;

    save();
    render();

    openModal(`
        <h2>🧪 Ремонт завершён</h2>

        <p>
            Свечи зажигания заменены.
            Двигатель запускается нормально.
        </p>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>+800 ₽</b>
        </div>

        <div class="stat-row">
            <span>💵 Прибыль с ремонта</span>
            <b>+${profit.toLocaleString("ru-RU")} ₽</b>
        </div>

        <div class="stat-row">
            <span>⭐ Репутация</span>
            <b>+8</b>
        </div>

        <div class="stat-row">
            <span>📈 Опыт</span>
            <b>+30 XP</b>
        </div>

        <div class="diagnosis-result">
            🧠 <b>Что ты узнал:</b><br><br>

            Если автомобиль плохо заводится,
            не стоит сразу менять аккумулятор.
            Нужно последовательно проверить
            основные системы запуска двигателя
            и сопоставить результаты диагностики
            с симптомами.
        </div>

        <button class="action-button"
            onclick="closeModal()">
            🔧 Вернуться в гараж
        </button>
    `);
}

function finishDiagnosisOnly() {

    addMoney(800);
    addXP(15);

    state.currentOrder.completed = true;

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
            <b>+800 ₽</b>
        </div>

        <div class="stat-row">
            <span>📈 Опыт</span>
            <b>+15 XP</b>
        </div>

        <button class="action-button"
            onclick="closeModal()">
            🔧 Вернуться в гараж
        </button>
    `);
}

/* =========================
   ОБУЧЕНИЕ
========================= */

function openTraining() {

    openModal(`
        <h2>📚 Обучение</h2>

        <p>
            Здесь постепенно появится полноценная
            школа автомеханика.
        </p>

        <div class="stat-row">
            <span>🔋 Электрика</span>
            <b>Скоро</b>
        </div>

        <div class="stat-row">
            <span>🔥 Двигатель</span>
            <b>Скоро</b>
        </div>

        <div class="stat-row">
            <span>⚙️ Трансмиссия</span>
            <b>Скоро</b>
        </div>

        <div class="stat-row">
            <span>🚗 Подвеска</span>
            <b>Скоро</b>
        </div>
    `);
}

/* =========================
   ИНСТРУМЕНТЫ
========================= */

function openTools() {

    openModal(`
        <h2>🧰 Инструменты</h2>

        <div class="stat-row">
            <span>🔧 Набор ключей</span>
            <b>Есть</b>
        </div>

        <div class="stat-row">
            <span>🔋 Мультиметр</span>
            <b>Не куплен</b>
        </div>

        <div class="stat-row">
            <span>💻 OBD-сканер</span>
            <b>Не куплен</b>
        </div>

        <p>
            Новое оборудование будет открываться
            по мере развития гаража.
        </p>
    `);
}

/* =========================
   АВТОМОБИЛИ
========================= */

function openCars() {

    openModal(`
        <h2>🚘 Автомобили</h2>

        <p>
            Позже здесь появится собственный автопарк.
        </p>

        <div class="stat-row">
            <span>🚗 Собственные автомобили</span>
            <b>0</b>
        </div>
    `);
}

/* =========================
   СТО
========================= */

function openService() {

    openModal(`
        <h2>🏢 СТО</h2>

        <div class="stat-row">
            <span>Уровень мастерской</span>
            <b>1</b>
        </div>

        <div class="stat-row">
            <span>Рабочие посты</span>
            <b>1</b>
        </div>

        <p>
            В будущем здесь можно будет расширять
            помещение, покупать подъёмники,
            нанимать механиков и превращать
            гараж в полноценный автотехцентр.
        </p>
    `);
}

/* =========================
   СОБЫТИЯ
========================= */

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

    if (event.target.id === "modal") {
        closeModal();
    }
};

render();
save();
