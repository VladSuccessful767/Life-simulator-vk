const K = "life_v02";

let s = JSON.parse(localStorage.getItem(K) || "null") || {
    name: "Влад",
    level: 1,
    xp: 0,
    money: 1000,
    energy: 100,
    health: 80,
    rep: 0,
    age: 18,
    car: "Нет",
    home: "Комната",
    career: 0,
    intelligence: 20,
    form: 50,
    job: "Безработный"
};

s.career = s.career ?? 0;
s.intelligence = s.intelligence ?? 20;
s.form = s.form ?? 50;
s.job = s.job ?? "Безработный";

const $ = x => document.getElementById(x);

const need = () => 100 + (s.level - 1) * 60;

function save() {
    localStorage.setItem(K, JSON.stringify(s));
}

function render() {
    $("name").textContent = s.name;
    $("level").textContent = s.level;
    $("money").textContent =
        new Intl.NumberFormat("ru-RU").format(s.money) + " ₽";

    $("energy").textContent = s.energy;
    $("health").textContent = s.health;
    $("rep").textContent = s.rep;

    $("xp").style.width =
        Math.min(100, s.xp / need() * 100) + "%";

    $("goals").innerHTML = `
        <div class="goal">
            <span>💰 Накопить 10 000 ₽</span>
            <b>${Math.min(100, Math.floor(s.money / 100))}%</b>
        </div>

        <div class="goal">
            <span>💼 Найти первую работу</span>
            <b>${s.job !== "Безработный" ? "✓" : "○"}</b>
        </div>

        <div class="goal">
            <span>🚗 Купить автомобиль</span>
            <b>${s.car === "Нет" ? "○" : "✓"}</b>
        </div>

        <div class="goal">
            <span>🏠 Улучшить жильё</span>
            <b>${s.home === "Комната" ? "○" : "✓"}</b>
        </div>
    `;
}

function xp(n) {
    s.xp += n;

    while (s.xp >= need()) {
        s.xp -= need();
        s.level++;

        s.money += 500;
        s.rep += 2;

        toast("🎉 Новый уровень! +500 ₽");
    }
}

function open(place) {

    let title = "";
    let body = "";

    if (place === "work") {

        title = "💼 Работа";

        body = `
            <p>
                Твоя текущая работа:
                <b>${s.job}</b>
            </p>

            <div class="statrow">
                <span>💼 Карьера</span>
                <b>${s.career}/100</b>
            </div>

            <div class="statrow">
                <span>🧠 Интеллект</span>
                <b>${s.intelligence}/100</b>
            </div>

            <hr>

            <h3>Доступные вакансии</h3>

            <button class="actionBtn"
                onclick="work('courier')">
                🛵 Курьер · 250 ₽
                <br>
                <small>−20 энергии</small>
            </button>

            <button class="actionBtn"
                onclick="work('seller')">
                🛍️ Продавец · 450 ₽
                <br>
                <small>Интеллект 25 · −20 энергии</small>
            </button>

            <button class="actionBtn"
                onclick="work('manager')">
                💼 Менеджер · 750 ₽
                <br>
                <small>Интеллект 40 · −25 энергии</small>
            </button>

            <button class="actionBtn"
                onclick="work('programmer')">
                👨‍💻 Программист · 1 200 ₽
                <br>
                <small>Интеллект 60 · −30 энергии</small>
            </button>
        `;
    }

    if (place === "study") {

        title = "🎓 Университет";

        body = `
            <p>
                Обучение повышает интеллект и опыт.
            </p>

            <div class="statrow">
                <span>🧠 Интеллект</span>
                <b>${s.intelligence}/100</b>
            </div>

            <button class="actionBtn"
                onclick="study()">
                Учиться · −15 энергии
            </button>
        `;
    }

    if (place === "gym") {

        title = "🏋️ Фитнес";

        body = `
            <p>
                Тренировки повышают форму и здоровье.
            </p>

            <div class="statrow">
                <span>💪 Форма</span>
                <b>${s.form}/100</b>
            </div>

            <button class="actionBtn"
                onclick="gym()">
                Тренироваться · −10 энергии
            </button>
        `;
    }

    if (place === "home") {

        title = "🏠 Квартира";

        body = `
            <p>
                Сейчас у тебя:
                <b>${s.home}</b>
            </p>

            <button class="actionBtn"
                onclick="rest()">
                Отдохнуть · +35 энергии
            </button>
        `;
    }

    if (place === "auto") {

        title = "🚗 Автосалон";

        body = `
            <p>
                Твоя машина:
                <b>${s.car}</b>
            </p>

            <button class="actionBtn"
                onclick="buyCar()">
                Купить первую машину · 5 000 ₽
            </button>
        `;
    }

    if (place === "shop") {

        title = "🛒 Магазин";

        body = `
            <p>
                Здесь позже появятся одежда,
                предметы и премиальные привилегии.
            </p>

            <button class="actionBtn"
                onclick="toast('Скоро здесь будет магазин')">
                Открыть магазин
            </button>
        `;
    }

    $("modalContent").innerHTML =
        `<h2>${title}</h2>${body}`;

    $("modal").classList.add("show");
}

function spend(n) {

    if (s.energy < n) {
        toast("⚡ Не хватает энергии");
        return false;
    }

    s.energy -= n;

    return true;
}

function work(type) {

    const jobs = {

        courier: {
            name: "Курьер",
            money: 250,
            energy: 20,
            career: 3,
            xp: 15
        },

        seller: {
            name: "Продавец",
            money: 450,
            energy: 20,
            career: 5,
            xp: 20,
            intelligence: 25
        },

        manager: {
            name: "Менеджер",
            money: 750,
            energy: 25,
            career: 8,
            xp: 30,
            intelligence: 40
        },

        programmer: {
            name: "Программист",
            money: 1200,
            energy: 30,
            career: 12,
            xp: 45,
            intelligence: 60
        }
    };

    const job = jobs[type];

    if (!job) return;

    if (
        job.intelligence &&
        s.intelligence < job.intelligence
    ) {
        toast(
            `🧠 Нужно ${job.intelligence} интеллекта`
        );
        return;
    }

    if (!spend(job.energy)) return;

    s.job = job.name;

    s.money += job.money;

    s.career = Math.min(
        100,
        s.career + job.career
    );

    xp(job.xp);

    close();
    render();
    save();

    toast(
        `💼 ${job.name}: +${job.money} ₽`
    );
}

function study() {

    if (!spend(15)) return;

    s.intelligence = Math.min(
        100,
        s.intelligence + 5
    );

    xp(25);

    close();
    render();
    save();

    toast("🎓 +5 интеллекта · +25 XP");
}

function gym() {

    if (!spend(10)) return;

    s.health = Math.min(
        100,
        s.health + 12
    );

    s.form = Math.min(
        100,
        s.form + 5
    );

    xp(10);

    close();
    render();
    save();

    toast("💪 +5 формы · +12 здоровья");
}

function rest() {

    s.energy = Math.min(
        100,
        s.energy + 35
    );

    s.health = Math.min(
        100,
        s.health + 5
    );

    close();
    render();
    save();

    toast("😴 Отдых помог");
}

function buyCar() {

    if (s.car !== "Нет") {
        toast("🚗 Машина уже есть");
        return;
    }

    if (s.money < 5000) {
        toast("💰 Нужно 5 000 ₽");
        return;
    }

    s.money -= 5000;
    s.car = "Первая машина";

    close();
    render();
    save();

    toast("🚗 Машина куплена!");
}

function close() {
    $("modal").classList.remove("show");
}

function toast(t) {
    alert(t);
}

document
    .querySelectorAll(".building")
    .forEach(b => {
        b.onclick = () =>
            open(b.dataset.place);
    });

$("close").onclick = close;

$("reset").onclick = () => {

    if (confirm("Начать заново?")) {
        localStorage.removeItem(K);
        location.reload();
    }
};

$("hero").onclick = () => {

    $("modalContent").innerHTML = `

        <h2>👤 Герой</h2>

        <div class="statrow">
            <span>Возраст</span>
            <b>${s.age} лет</b>
        </div>

        <div class="statrow">
            <span>Уровень</span>
            <b>${s.level}</b>
        </div>

        <div class="statrow">
            <span>💼 Работа</span>
            <b>${s.job}</b>
        </div>

        <div class="statrow">
            <span>💼 Карьера</span>
            <b>${s.career}/100</b>
        </div>

        <div class="statrow">
            <span>🧠 Интеллект</span>
            <b>${s.intelligence}/100</b>
        </div>

        <div class="statrow">
            <span>💪 Форма</span>
            <b>${s.form}/100</b>
        </div>

        <div class="statrow">
            <span>⭐ Репутация</span>
            <b>${s.rep}</b>
        </div>
    `;

    $("modal").classList.add("show");
};

$("items").onclick = () => {

    $("modalContent").innerHTML = `

        <h2>🎒 Имущество</h2>

        <div class="statrow">
            <span>🏠 Жильё</span>
            <b>${s.home}</b>
        </div>

        <div class="statrow">
            <span>🚗 Автомобиль</span>
            <b>${s.car}</b>
        </div>
    `;

    $("modal").classList.add("show");
};

$("shop").onclick = () =>
    open("shop");

$("rating").onclick = () => {

    $("modalContent").innerHTML = `
        <h2>🏆 Рейтинг</h2>
        <p>
            Скоро здесь появится рейтинг игроков VK.
        </p>
    `;

    $("modal").classList.add("show");
};

$("modal").onclick = e => {

    if (e.target.id === "modal") {
        close();
    }
};

render();
