let lastData = "";


setInterval(()=>{


let data = localStorage.getItem("lowerThird");


if(!data || data === lastData)
return;


lastData=data;


let info = JSON.parse(data);



let box=document.getElementById("lowerThird");



if(info.show){


document.getElementById("name").innerHTML =
info.name;



document.getElementById("category").innerHTML =
info.category;



box.classList.add("show");


}

else{


box.classList.remove("show");


}



},100);
