const KEY="put_master_v05";
const BASE={
 money:15000, gems:25, energy:100, rep:0, level:1, xp:0,
 garage:{level:1,posts:1,equipment:100},
 order:null, accepted:false, diagnosis:{}, diagnosisDone:false,
 agreed:false, selectedRepair:null, selectedPart:null, history:[]
};
let s=JSON.parse(localStorage.getItem(KEY)||"null")||structuredClone(BASE);
const $=id=>document.getElementById(id);
const fmt=n=>new Intl.NumberFormat("ru-RU").format(Math.round(n))+" ₽";
const energyCost={visual:5,obd:8,test:10,spark:8,coil:8,compression:15,smoke:12};
const parts={
 spark:{name:"Свечи зажигания",base:900,norm:.5,options:[
  ["oem","Оригинал",1.35,"Надёжный вариант, рекомендованный производителем."],
  ["after","Аналог",.82,"Дешевле оригинала, качество зависит от бренда."],
  ["refurb","Восстановленные",.58,"Дешевле, но с повышенным риском."],
  ["used","Б/у",.35,"Самый бюджетный вариант, состояние неизвестно."]
 ]},
 coil:{name:"Катушка зажигания",base:4200,norm:.8,options:[
  ["oem","Оригинал",1.35,"Максимальная уверенность в ресурсе."],
  ["after","Аналог",.78,"Хороший компромисс по цене."],
  ["refurb","Восстановленная",.55,"Дешевле новой, возможен меньший ресурс."],
  ["used","Б/у",.32,"Рискованно, но дёшево."]
 ]},
 injector:{name:"Форсунка",base:6200,norm:1.2,options:[
  ["oem","Оригинал",1.4,"Новая оригинальная форсунка."],
  ["after","Аналог",.82,"Совместимая новая деталь."],
  ["refurb","Восстановленная",.6,"После стенда и восстановления."],
  ["used","Б/у",.4,"С разборки, состояние требует проверки."]
 ]},
 gasket:{name:"Прокладка ГБЦ",base:8500,norm:7.5,options:[
  ["oem","Оригинал",1.3,"Оригинальная прокладка."],
  ["after","Аналог",.8,"Качественный aftermarket."],
  ["refurb","Восстановленная",.5,"Для этой детали практически не применяется."],
  ["used","Б/у",.1,"Не рекомендуется для ремонта."]
 ]}
};
const repairs={
 spark:{title:"Замена свечей",part:"spark",baseNorm:.5,skill:1},
 coil:{title:"Замена катушки",part:"coil",baseNorm:.8,skill:1},
 injector:{title:"Замена форсунки",part:"injector",baseNorm:1.2,skill:2},
 gasket:{title:"Замена прокладки ГБЦ",part:"gasket",baseNorm:7.5,skill:5}
};
const engineMult={R3:.9,R4:1,R5:1.12,R6:1.25,V6:1.45,V8:1.8,V10:2.05,V12:2.45,BOXER:.1};
const engineNames={R4:"R4 • 1.6 л • 123 л.с.",V6:"V6 • 3.0 л • 250 л.с.",V8:"V8 • 4.4 л • 450 л.с.",V12:"V12 • 6.0 л • 600 л.с."};
function save(){localStorage.setItem(KEY,JSON.stringify(s))}
function toast(t){$("toast").textContent=t;$("toast").classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>$("toast").classList.remove("show"),1800)}
function openModal(h){$("modalContent").innerHTML=h;$("modal").classList.add("show")}
function closeModal(){$("modal").classList.remove("show")}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}
function xpNeed(){return 100+(s.level-1)*65}
function addXP(n){s.xp+=n;while(s.xp>=xpNeed()){s.xp-=xpNeed();s.level++;s.money+=800;s.rep+=2;toast("Новый уровень! +800 ₽")}}
function spendEnergy(n){if(s.energy<n){toast("⚡ Не хватает энергии");return false}s.energy-=n;return true}
function newOrder(){
 const pool=[
  {car:"Kia Ceed",year:2012,engine:"R4",mileage:"196 000 км",complaint:"Цокот при разгоне, после прогрева пропадает.",cause:"spark",hidden:"Свечи имеют большой износ."},
  {car:"BMW 320i",year:2010,engine:"R4",mileage:"184 000 км",complaint:"Дёргается при ускорении, горит Check Engine.",cause:"coil",hidden:"Одна катушка даёт пропуски."},
  {car:"VW Touareg",year:2015,engine:"V6",mileage:"142 000 км",complaint:"Неровный холостой ход и запах топлива.",cause:"injector",hidden:"Одна форсунка льёт."},
  {car:"Mercedes S500",year:2013,engine:"V8",mileage:"128 000 км",complaint:"Белый дым, уходит охлаждающая жидкость.",cause:"gasket",hidden:"Проблема с прокладкой ГБЦ."},
  {car:"Mercedes S600",year:2012,engine:"V12",mileage:"156 000 км",complaint:"Перегрев и падение уровня ОЖ.",cause:"gasket",hidden:"Прокладка ГБЦ требует замены."}
 ];
 const x=pool[Math.floor(Math.random()*pool.length)];
 s.order={...x};s.accepted=false;s.diagnosis={};s.diagnosisDone=false;s.agreed=false;s.selectedRepair=null;s.selectedPart=null;
 save();render()
}
if(!s.order)newOrder();
function render(){
 $("money").textContent=fmt(s.money);$("gems").textContent=s.gems;$("energy").textContent=s.energy;$("reputation").textContent=s.rep;$("level").textContent=s.level;
 $("xpText").textContent=`${s.xp} / ${xpNeed()}`;$("xpBar").style.width=Math.min(100,s.xp/xpNeed()*100)+"%";
 $("garageText").textContent=`Уровень ${s.garage.level}`;$("posts").textContent=s.garage.posts;$("equipment").textContent=s.garage.equipment>=90?"Профессиональные":s.garage.equipment>=60?"Улучшенные":"Базовые";
 const o=s.order;$("carName").textContent=o.car;$("carYear").textContent=`${o.year} • ${engineNames[o.engine]||o.engine}`;$("carMileage").textContent=o.mileage;$("complaint").textContent=o.complaint;
 $("orderStatus").textContent=!s.accepted?"Новый":s.diagnosisDone&&!s.agreed?"Ждёт согласования":s.agreed?"Ремонт согласован":"Диагностика";
 $("stageText").textContent=!s.accepted?"Ожидает принятия":!s.diagnosisDone?"Диагностика":!s.agreed?"Цена на согласовании":"Готов к ремонту";
 $("speech").textContent=!s.accepted?"Привет! Заезжай, посмотрим машину.":!s.diagnosisDone?"Выберите методы диагностики. Не обязательно проверять всё.":!s.agreed?"Я нашёл причину. Теперь нужно обсудить стоимость ремонта.":"Отлично, начинайте ремонт!";
}
function acceptOrder(){
 if(s.accepted){toast("Заказ уже принят");return}
 s.accepted=true;spendEnergy(3);s.history.push("Принят заказ клиента.");save();render();toast("Заказ принят")
}
function openClient(){
 const o=s.order;
 openModal(`<h2>🤝 Клиент</h2><div class="knowledge-block"><h3>${o.car}, ${o.year}</h3><p>«${o.complaint}»</p><p>Клиент хочет получить понятную смету и должен <b>согласовать цену</b> до ремонта.</p></div>
 <div class="choice-grid">
 <button class="choice" onclick="acceptOrder();openClient()"><b>📋 Принять автомобиль</b><small>Начать работу с заказом</small></button>
 <button class="choice" onclick="openDiagnosis()"><b>🔍 Обсудить диагностику</b><small>Стоимость диагностики зависит от набора проверок</small></button>
 </div>`)
}
function openDiagnosis(){
 if(!s.accepted){openClient();return}
 const checks=[
  ["visual","👁️ Визуальный осмотр","5 ⚡","Быстро ищет явные утечки, повреждения и следы износа."],
  ["obd","💻 OBD-II","8 ⚡","Ошибки ЭБУ, параметры и Live Data."],
  ["test","🚗 Пробная поездка","10 ⚡","Симптом проявляется в движении."],
  ["spark","🔧 Проверка свечей","8 ⚡","Состояние электродов и зазор."],
  ["coil","⚡ Проверка катушек","8 ⚡","Исключение проблем зажигания."],
  ["compression","📏 Компрессия","15 ⚡","Проверка механического состояния цилиндров."],
  ["smoke","💨 Дымогенератор","12 ⚡","Поиск подсоса воздуха и утечек."],
 ];
 openModal(`<h2>🔍 Диагностика</h2><p>Выбирай проверки сам. Каждая тратит энергию. Некоторые методы дадут подсказку, но не обязательно сразу покажут причину.</p>
 <div class="diag-grid">${checks.map(c=>`<button class="diag" onclick="doCheck('${c[0]}')"><b>${c[1]}</b><small>${c[2]}</small><small>${c[3]}</small>${s.diagnosis[c[0]]?`<em class="good">✓ Выполнено</em>`:""}</button>`).join("")}</div>
 <div class="price-box"><b>Диагностика</b><div class="price">${fmt(diagnosisPrice())}</div><small>Цена рассчитывается по нормо-часам и выбранным операциям.</small></div>
 <button class="modal-btn" onclick="finishDiagnosis()">Завершить диагностику →</button>`)
}
function doCheck(type){
 if(s.diagnosis[type]){toast("Эта проверка уже выполнена");return}
 if(!spendEnergy(energyCost[type]))return;
 s.diagnosis[type]=true;addXP(5);save();render();openDiagnosis()
}
function diagnosisPrice(){
 return 600+Object.keys(s.diagnosis).length*450
}
function finishDiagnosis(){
 if(Object.keys(s.diagnosis).length===0){toast("Сделай хотя бы одну проверку");return}
 s.diagnosisDone=true;addXP(15);save();render();openRepairEstimate()
}
function openRepairEstimate(){
 const r=repairs[s.order.cause], mult=engineMult[s.order.engine]||1;
 const norm=(r.baseNorm*mult).toFixed(1);
 const labor=Math.round(norm*2200);
 const part=parts[r.part].base;
 const base=labor+part;
 const markup=Math.round(base*0.15);
 const total=base+markup;
 openModal(`<h2>📋 Смета ремонта</h2><div class="knowledge-block"><h3>Найденная причина</h3><p>${s.order.hidden}</p><p>Рекомендуемый ремонт: <b>${r.title}</b></p></div>
 <div class="price-box"><div>Норма времени: <b>${norm} н/ч</b></div><div>Работа: <b>${fmt(labor)}</b></div><div>Запчасть: <b>${fmt(part)}</b></div><div>Наценка сервиса: <b>${fmt(markup)}</b></div><hr><div class="price">${fmt(total)}</div></div>
 <p>Клиент может согласиться, попросить снизить цену или отказаться. Цена ещё не окончательная — сначала выбери деталь.</p>
 <button class="modal-btn" onclick="openPartsForRepair('${r.part}')">🔩 Выбрать деталь и подготовить предложение</button>`)
}
function openParts(){openPartsForRepair(repairs[s.order.cause]?.part||"spark")}
function openPartsForRepair(pid){
 const p=parts[pid],mult=engineMult[s.order.engine]||1;
 openModal(`<h2>🔩 ${p.name}</h2><p>Двигатель: <b>${s.order.engine}</b>. Норма времени умножается на сложность двигателя.</p><div class="parts-grid">${p.options.map(o=>`<button class="part" onclick="selectPart('${pid}','${o[0]}')"><b>${o[1]}</b><span>${fmt(p.base*o[2])}</span><small>${o[3]}</small></button>`).join("")}</div>`)
}
function selectPart(pid,optId){
 const p=parts[pid],o=p.options.find(x=>x[0]===optId),mult=engineMult[s.order.engine]||1;
 const norm=(repairs[s.order.cause].baseNorm*mult).toFixed(1);
 const labor=Math.round(norm*2200), partPrice=Math.round(p.base*o[2]);
 const total=labor+partPrice+Math.round((labor+partPrice)*.15);
 s.selectedPart={pid,optId,price:partPrice};save();
 openModal(`<h2>🤝 Согласование с клиентом</h2><div class="knowledge-block"><h3>${p.name} • ${o[1]}</h3><p>Норма: <b>${norm} н/ч</b></p><p>Работа: ${fmt(labor)}<br>Деталь: ${fmt(partPrice)}<br>Наценка сервиса: ${fmt(Math.round((labor+partPrice)*.15))}</p><div class="price">Итого: ${fmt(total)}</div></div>
 <div class="choice-grid">
 <button class="choice" onclick="clientAgree(${total},'agree')"><b>🤝 Предложить клиенту</b><small>Клиент может согласиться</small></button>
 <button class="choice" onclick="clientAgree(${Math.round(total*.92)},'discount')"><b>💬 Дать скидку 8%</b><small>Вы заработаете меньше, но шанс согласия выше</small></button>
 <button class="choice" onclick="clientAgree(${Math.round(total*1.15)},'markup')"><b>💰 Увеличить смету на 15%</b><small>Больше прибыли, но клиент может отказаться</small></button>
 </div>`)
}
function clientAgree(total,mode){
 const chance=mode==="markup"?0.62:mode==="discount"?0.95:0.84;
 if(Math.random()>chance){s.rep=Math.max(0,s.rep-2);save();openModal(`<h2>😕 Клиент отказался</h2><p>«Слишком дорого. Я подумаю и обращусь позже.»</p><button class="modal-btn" onclick="closeModal()">Закрыть</button>`);return}
 s.agreed=true;s.selectedRepair={total,mode};save();render();
 openModal(`<h2>🤝 Цена согласована!</h2><div class="price-box"><div class="price">${fmt(total)}</div><p>Клиент согласился на ремонт.</p></div><button class="modal-btn" onclick="performRepair()">🔧 Начать ремонт</button>`)
}
function performRepair(){
 const r=repairs[s.order.cause],mult=engineMult[s.order.engine]||1,norm=r.baseNorm*mult;
 const energy=Math.max(5,Math.ceil(norm*3));
 if(!spendEnergy(energy)){closeModal();return}
 s.money+=s.selectedRepair.total;s.rep+=s.selectedRepair.mode==="markup"?1:3;addXP(Math.ceil(norm*10));s.history.push(`Ремонт ${s.order.car}: ${r.title}, ${norm.toFixed(1)} н/ч.`);
 s.accepted=false;s.diagnosisDone=false;s.agreed=false;s.selectedPart=null;s.selectedRepair=null;
 save();render();
 openModal(`<h2>🔧 Ремонт завершён!</h2><p>${r.title} выполнен.</p><p>Клиент оплатил <b>${fmt(s.history.length?0:0)}</b>.</p><p class="good">+опыт • +репутация • +деньги</p><button class="modal-btn" onclick="newOrder();closeModal()">🚗 Следующий клиент</button>`)
}
function restoreEnergy(){
 if(s.gems<5){toast("Нужно 5 💎");return}
 s.gems-=5;s.energy=Math.min(100,s.energy+35);save();render();toast("+35 энергии")
}
function openGarage(){
 const costs=[0,12000,45000,140000,400000];
 const next=s.garage.level+1;
 openModal(`<h2>🏢 Развитие СТО</h2><div class="knowledge-block"><h3>Уровень ${s.garage.level}</h3><p>Постов: ${s.garage.posts} • Инструменты: ${s.equipment}</p><p>Следующее улучшение: ${next<=4?fmt(costs[next]):"МАКСИМУМ"}</p></div>
 <div class="choice-grid">
 <button class="choice" onclick="upgradeGarage()"><b>⬆️ Улучшить СТО</b><small>Открывает новые возможности и более дорогие заказы.</small></button>
 <button class="choice" onclick="hireMechanic()"><b>👨‍🔧 Нанять механика</b><small>Помогает обслуживать очередь.</small></button>
 </div>`)
}
function upgradeGarage(){
 const costs=[0,12000,45000,140000,400000],cost=costs[s.garage.level+1]||999999999;
 if(s.money<cost){toast("Недостаточно денег");return}
 s.money-=cost;s.garage.level++;s.garage.posts=Math.min(4,s.garage.posts+1);s.garage.equipment=Math.min(100,s.garage.equipment+15);addXP(30);save();render();openGarage()
}
function hireMechanic(){
 const cost=8000+s.garage.level*4000;
 if(s.money<cost){toast("Недостаточно денег");return}
 s.money-=cost;s.rep+=3;save();render();toast("Новый механик нанят")
}
function openShop(){
 openModal(`<h2>💎 Магазин</h2><p>Здесь будут реальные покупки через VK Pay/внутреннюю платёжную систему. Пока это безопасный игровой прототип.</p>
 <div class="choice-grid">
 <button class="choice" onclick="buyGems(20)"><b>💎 20 кристаллов</b><small>За игровую валюту — 5000 ₽</small></button>
 <button class="choice" onclick="buyGems(100)"><b>💎 100 кристаллов</b><small>Премиум-пакет — 20 000 ₽</small></button>
 <button class="choice" onclick="buyEnergyPack()"><b>⚡ Энергия</b><small>+100 энергии за 10 💎</small></button>
 </div>
 <div class="knowledge-warning">Реальная оплата пока не подключена. На этапе VK-релиза подключим серверную проверку платежей, чтобы покупки нельзя было подделать в браузере.</div>`)
}
function buyGems(n){s.money=Math.max(0,s.money-n*250);s.gems+=n;save();render();toast(`+${n} 💎`)}
function buyEnergyPack(){if(s.gems<10){toast("Нужно 10 💎");return}s.gems-=10;s.energy=100;save();render();toast("Энергия восстановлена")}
function resetGame(){localStorage.removeItem(KEY);location.reload()}
render();
