const name = document.getElementById("participantName");
const lowerThird = document.getElementById("lowerThird");


function resizeLowerThird(){

    const length = name.innerText.length;


    if(length > 25){

        lowerThird.style.width = (700 + (length * 8)) + "px";

    }

    else{

        lowerThird.style.width = "700px";

    }

}



const observer = new MutationObserver(()=>{

    resizeLowerThird();

});


observer.observe(name,{

    childList:true,

    subtree:true,

    characterData:true

});


resizeLowerThird();
