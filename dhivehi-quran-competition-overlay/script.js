const name =
document.getElementById("participantName");


const category =
document.getElementById("participantCategory");


const lowerThird =
document.getElementById("lowerThird");



const channel =
new BroadcastChannel("quranOverlay");



function resize(){


let length =
name.innerText.length;



let width = 700;



if(length > 20){

width = 700 + ((length - 20) * 10);

}



if(width > 1200){

width = 1200;

}



lowerThird.style.width =
width + "px";


}




channel.onmessage = function(event){


name.innerHTML =
event.data.name;


category.innerHTML =
event.data.category;


resize();


};



resize();
