const name = document.getElementById("participantName");
const lowerThird = document.getElementById("lowerThird");


function resizeLowerThird(){

    let textLength = name.innerText.length;


    let newWidth = 700;


    if(textLength > 20){

        newWidth = 700 + ((textLength - 20) * 10);

    }


    if(newWidth > 1100){

        newWidth = 1100;

    }


    lowerThird.style.width = newWidth + "px";

}



resizeLowerThird();



const observer = new MutationObserver(function(){

    resizeLowerThird();

});



observer.observe(name, {

    childList:true,

    subtree:true,

    characterData:true

});
