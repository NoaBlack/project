let color1 = document.getElementById("color1").style.backgroundColor = "yellow"
let color2 = document.getElementById("color2").style.backgroundColor = "red"
let color3 = document.getElementById("color3").style.backgroundColor = "pink"
let color4 = document.getElementById("color4").style.backgroundColor = "green"
let color5 = document.getElementById("color5").style.backgroundColor = "blue"
let color6 = document.getElementById("color6").style.backgroundColor = "purple"
let color7 = document.getElementById("color7").style.backgroundColor = "teal"
let color8 = document.getElementById("color8").style.backgroundColor = "white"
let colorN1 = document.getElementById("colorN1").style.backgroundColor = "grey"
let colorN2 = document.getElementById("colorN2").style.backgroundColor = "grey"
let colorN3 = document.getElementById("colorN3").style.backgroundColor = "grey"
let colorN4 = document.getElementById("colorN4").style.backgroundColor = "grey"
let modal = document.getElementById("myModal");
let Instructions = document.getElementById("Instructions").innerHTML="הוראות: המחשב בוחר 4 דסקיות בצבעים שונים, עלייך לנסות לנחש את סדר הצבעים על ידי הנחת דסקיות צבעוניות בשורת העיגולים. המחשב יסמן את ניחושך על ידי הנחת ריבועים אדומים וצהובים בשורה המקבילה. ריבוע אדום – פגיעה בול – הצבע והמיקום נכונים. ריבוע צהוב – פגיעה חלקית – הצבע נכון אבל לא המיקום."
let head = document.getElementById("head").innerHTML="ברוכים הבאים למשחק בול פגיעה"
let impo=document.getElementById("important").innerHTML="!אין לבחור את אותו הצבע פעמיים"
let pick = document.getElementById("pick").innerHTML="עלייך לבחור רמת קושי למשחק "
let myBtn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let guessing = document.getElementsByClassName("guessing") 
let guesses = document.getElementsByClassName("guesses") 
let rank=document.getElementsByClassName("rank")
let score=document.getElementsByClassName("score")
let btn=document.getElementById("btn").innerHTML="guess";
let greet=document.getElementById("greet")
let clock=document.getElementById("clock")
btn.disabled=true;
let num=0 
let game=[]
let colors=["yellow","red","pink","green","blue","purple","teal","white"]
let colorscopy=[]
let color
let guesscolor=[]
let iguess=0
let bol=0
let pgiaa=0
let imath=8
if (localStorage.lastname == "panski") {
  greet.innerHTML=" ";
}
else {
greet.innerHTML="ברוך הבא שחקן חדש";
localStorage.setItem("lastname", "panski");
}
$(document).ready(function(){
  $("#btn").prop('disabled', true); 
    $("#colorN1").click(function(onclick){
      nizba(this,0);
    });  
  });
  $(document).ready(function(){
    $("#colorN2").click(function(onclick){
      nizba(this,1);
    });  
  });$(document).ready(function(){
    $("#colorN3").click(function(onclick){
      nizba(this,2);
    });  
  });$(document).ready(function(){
    $("#colorN4").click(function(onclick){
      nizba(this,3);
    });  
  });
  $(document).ready(function(){  
   $("#btn").click(function(){
   $("#colorN1").clone().appendTo(".guessing");
   $("#colorN2").clone().appendTo(".guessing");
   $("#colorN3").clone().appendTo(".guessing");
   $("#colorN4").clone().appendTo(".guessing");
   $(".guessing").append("<br>");
  });
});
function Scolor(col) {
    color = col.style.backgroundColor
}
function nizba(rek,i) {
 rek.style.backgroundColor=color
 rek=color;
 guesscolor[i]=rek;
 console.log(guesscolor);
  if(i==0)
    colorN1=rek;
  else if(i==1)
    colorN2=rek;
  else if(i==2)
    colorN3=rek;
  else colorN4=rek;
  if (colorN1=="grey" || colorN2=="grey" || colorN3=="grey" || colorN4=="grey") {
    $("#btn").prop('disabled', true); 
  }
    else {
      $("#btn").prop('disabled', false); 
 }
}
function start(colors,mytime,myclock){
  myrank(mytime)
 for(let z=0;z<8;z++){
   colorscopy[z]=colors[z]
 }
    for(let i=0; i<4; i++){
        num=Math.floor(Math.random() * imath);
        game[i]=colorscopy[num];
        colorscopy.splice(num,1)
        imath-=1
    }
    console.log(game);
    imath=8
    function myrank(mytime) {
      setTimeout(function(){alert("game over");
      location.reload(); }, mytime);
      let countDownDate =  new Date().getTime() + myclock;
let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now ;
let minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance %  (1000 * 60)) / 1000);
document.getElementById("clock").innerHTML = + minutes + ":" + seconds;
if (distance <= 20000){
  $("#clock").css({ 'color': 'red', 'font-size': '5vh','border': '0px' });
}
}, 1000);
 }
}
function guess(guesscolor,game){

console.log(guesscolor);
for(let i=0;i<4;i++){
    for(let z=0;z<4;z++){
        if(guesscolor[i]==game[z]&&i==z)
        pgiaa++
        else if(guesscolor[i]==game[z]&&i!=z)
        bol++
    }
}
console.log("פגיעה"+pgiaa);
console.log("בול"+bol);
let all=bol+pgiaa;
for(let i=0;i<all;i++){
  if(pgiaa==4){
  alert("הצלחת! כל הכבוד!");
location.reload();
 return false;
  }
 else if (pgiaa>0){
    let score1 =$("<div></div>").addClass("score1");
    $(".score").append(score1);
    $(".score1").css("background-color", "red");
    $(".score1").css("display", "inline-block");
    pgiaa-=1;
}
else if(bol>0){
    let score2= $("<div></div>").addClass("score2");
    $(".score").append(score2);
    $(".score2").css("background-color", "yellow");
    $(".score2").css("display", "inline-block");
    bol-=1;
}
  const mq = window.matchMedia("(min-width: 900px)");
if (mq.matches) {
  $(".score1").css("height", "3vh");
  $(".score1").css("width", "3vh");
  $(".score1").css("margin", "2vh 3px");
  $(".score2").css("height", "3vh");
  $(".score2").css("width", "3vh");
  $(".score2").css("margin", "2vh 3px");
  } else {
    $(".score1").css("height", "6px");
    $(".score1").css("width", "6px");
    $(".score1").css("margin", "16px 1px");
    $(".score2").css("height", "6px");
    $(".score2").css("width", "6px");
    $(".score2").css("margin", "16px 1px"); 
  }
}
$(".score").append("<br>");
all=0
}
$(document).ready(function(){
  $("#myBtn").prop('disabled', true); 
  modal.style.display = "block";
    });  
span.onclick = function() {
  modal.style.display = "none";
}
$(document).ready(function(){
  $(".rank").click(function(onclick){
      modal.style.display = "none";
  });  
});







