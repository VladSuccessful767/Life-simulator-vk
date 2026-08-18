const KEY="vk_life_sim_v1";
const shop=[
 {id:"vip",name:"VIP-статус",price:149,desc:"x1.25 к заработку и +10% XP"},
 {id:"car",name:"Премиум-автомобиль",price:299,desc:"−10 энергии на работу и +5 репутации"},
 {id:"flat",name:"Квартира мечты",price:499,desc:"Восстановление энергии +10 после отдыха"},
 {id:"business",name:"Свой бизнес",price:799,desc:"Дополнительный доход каждые 3 действия"}
];
let s=JSON.parse(localStorage.getItem(KEY)||"null")||{
 name:"Новичок",level:1,xp:0,money:1000,energy:100,health:80,rep:0,day:1,actions:0,owned:[],history:["День 1: ты сделал первый шаг."]
};
const $=id=>document.getElementById(id);
const fmt=n=>new Intl.NumberFormat("ru-RU").format(Math.round(n))+" ₽";
function save(){localStorage.setItem(KEY,JSON.stringify(s))}
function xpNeed(){return 100+(s.level-1)*60}
function render(){
 $("playerName").textContent=s.name;$("level").textContent=s.level;$("xp").textContent=s.xp;$("xpNeed").textContent=xpNeed();
 $("xpBar").style.width=Math.min(100,s.xp/xpNeed()*100)+"%";
 $("money").textContent=fmt(s.money);$("energy").textContent=s.energy;$("health").textContent=s.health;$("rep").textContent=s.rep;
 $("history").innerHTML=s.history.slice(-8).reverse().map(x=>`<div>${x}</div>`).join("");
 $("shopList").innerHTML=shop.map(x=>{
   const owned=s.owned.includes(x.id);
   return `<div class="shopItem"><div><h3>${x.name}</h3><p>${x.desc}</p></div><button class="buy ${owned?"owned":""}" data-buy="${x.id}">${owned?"Куплено":x.price+" VK Coins"}</button></div>`;
 }).join("");
 document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buy(b.dataset.buy));
}
function toast(t){$("toast").textContent=t;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1800)}
function addXP(n){
 s.xp+=n;
 while(s.xp>=xpNeed()){s.xp-=xpNeed();s.level++;s.money+=500;s.rep+=2;toast("Новый уровень! +500 ₽")}
}
function event(){
 const e=[
  ["📦","Нашёл подработку","Кто-то предложил небольшую халтуру. +120 ₽.","money",120],
  ["🍀","Удачный день","Случайно получил бонус. +80 ₽.","money",80],
  ["🤝","Полезное знакомство","+3 репутации.","rep",3],
  ["😴","Тяжёлый день","Потратил лишние силы. −8 энергии.","energy",-8]
 ][Math.floor(Math.random()*4)];
 $("eventTitle").textContent=e[1];$("eventText").textContent=e[2];$("eventBox").querySelector(".eventEmoji").textContent=e[0];
 if(e[3]==="money")s.money+=e[4];else if(e[3]==="rep")s.rep+=e[4];else s.energy=Math.max(0,s.energy+e[4]);
}
function act(type){
 if(type!=="rest" && s.energy<=0)return toast("Нет энергии. Отдохни.");
 let msg="";
 if(type==="work"){let gain=250*(s.owned.includes("vip")?1.25:1);if(s.owned.includes("car"))s.energy-=10;else s.energy-=20;s.money+=gain;addXP(15);msg=`День ${s.day}: работа +${Math.round(gain)} ₽.`}
 if(type==="study"){s.energy-=15;addXP(25);if(Math.random()<.2){s.money+=300;s.rep+=2;msg=`День ${s.day}: учёба окупилась — +300 ₽.`}else msg=`День ${s.day}: учёба +25 XP.`}
 if(type==="rest"){s.energy=Math.min(100,s.energy+(s.owned.includes("flat")?45:35));s.health=Math.min(100,s.health+5);msg=`День ${s.day}: хороший отдых.`}
 if(type==="health"){s.energy-=10;s.health=Math.min(100,s.health+12);addXP(10);msg=`День ${s.day}: занялся собой.`}
 s.actions++;s.history.push(msg);if(s.actions%3===0){s.day++;event();}save();render();
}
function buy(id){
 if(s.owned.includes(id))return toast("Уже куплено");
 const item=shop.find(x=>x.id===id);
 // Demo purchase. Replace this function with VK's server-validated payment flow before release.
 s.owned.push(id);s.rep+=item.id==="vip"?5:2;s.history.push(`Куплена привилегия: ${item.name}.`);
 save();render();toast(`Демо-покупка: ${item.name}`);
}
document.querySelectorAll(".action").forEach(b=>b.onclick=()=>act(b.dataset.action));
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");$(b.dataset.tab).classList.add("active")});
$("resetBtn").onclick=()=>{if(confirm("Начать новую игру?")){localStorage.removeItem(KEY);location.reload()}};
$("nameBtn").onclick=()=>{const n=prompt("Как тебя зовут?",s.name);if(n&&n.trim()){s.name=n.trim().slice(0,20);save();render()}};
render();
