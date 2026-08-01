const name =
document.getElementById("participantName");


const category =
document.getElementById("participantCategory");


const lowerThird =
document.getElementById("lowerThird");



function updateOverlay(){


let savedName =
localStorage.getItem("contestantName");


let savedCategory =
localStorage.getItem("contestantCategory");



if(savedName){

name.innerHTML=savedName;

}



if(savedCategory){

category.innerHTML=savedCategory;

}



resize();


}



function resize(){


let length =
name.innerText.length;



let width = 700;



if(length > 20){

width = 700 + ((length-20)*10);

}



if(width > 1200){

width = 1200;

}



lowerThird.style.width =
width+"px";


}



window.addEventListener(
"storage",
updateOverlay
);



updateOverlay();
