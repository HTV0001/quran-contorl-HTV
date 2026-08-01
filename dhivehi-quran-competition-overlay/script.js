const name = document.getElementById("participantName");
const lowerThird = document.getElementById("lowerThird");


function resizeLowerThird(){

    let words = name.innerText.trim().split(/\s+/).length;


    if(words > 3){

        lowerThird.classList.add("expanded");

    }

    else{

        lowerThird.classList.remove("expanded");

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
