// Quran Competition Lower Third
// OBS Overlay Communication Script


const channel = new BroadcastChannel("quran_lowerthird");


// Get overlay elements

const lowerThird = document.getElementById("lowerThird");

const participantName = document.getElementById("participantName");

const participantCategory = document.getElementById("participantCategory");



// Listen for messages from control.html

channel.onmessage = function(event) {


    const data = event.data;



    // SHOW lower third

    if (data.show === true) {


        participantName.innerText = data.name;

        participantCategory.innerText = data.category;


        lowerThird.classList.add("show");


    }



    // HIDE lower third

    else if (data.show === false) {


        lowerThird.classList.remove("show");


    }


};



// Optional: hide when page loads

window.onload = function() {

    lowerThird.classList.remove("show");

};