function start(){
document.getElementById("music").play();

document.getElementById("text").innerHTML =
"Beni seviyor musun? 💖";

document.getElementById("buttons").innerHTML =
`<button onclick="yes()">Evet ❤️</button>
<button id="noBtn">Hayır 😶</button>`;

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"vw";
noBtn.style.top=Math.random()*80+"vh";
});
}

function yes(){
startHearts();
showCounter();

document.getElementById("final").style.display="flex";
}

function startHearts(){
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},120);
}

function showCounter(){
const startDate=new Date("2026-02-14");
const now=new Date();
const diff=now-startDate;
const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("counter").innerHTML=
"14 Şubat 2026'dan beri ❤️<br>"+days+" gün.";
}
