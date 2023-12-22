function clock(){
    let date = new Date();  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // 12 hours format
    if(hours>12){
        hours = hours-12
    }

    //console.log(hours, minutes, seconds);

    //assiging  real time values to html elements
    let hrs = document.getElementById("hh");
    hrs.innerText = hours;
    let mins = document.getElementById("mh");
    mins.innerText = minutes;
    let secs = document.getElementById("sh");
    secs.innerText = seconds;   
}
setInterval(()=>{       
    clock()             
},1000)


let date = new Date();  
let hours = date.getHours();
if(hours>=12){
    let ampm = document.getElementById('am')
    ampm.innerText = "PM"
}
else if(hours<=12){
    let ampm = document.getElementById('am')
    ampm.innerText = "AM"
}

if(hours>=5 && hours<9){
    let greeting = document.getElementById("greeting")
    greeting.innerText = "GOOD MORNING..!! HACE A GREAT DAY"
}
else if(hours>=9 && hours<12){
    let greeting = document.getElementById("greeting")
    greeting.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
}
else if(hours>=12 && hours<=14){
    let greeting = document.getElementById("greeting")
    greeting.innerText = "GOOD AFTERNOON!!!"
}
else if(hours>=15 && hours<16){
    let greeting = document.getElementById("greeting")
    greeting.innerText = "TAKE NAP"
}
else if(hours>=16 && hours<21){
    let greeting = document.getElementById("greeting")
    greeting.innerText = "GOOD EVENING!! TAKE COFFFEE"
}
else if(hours>=19 && hours<22){
    let greeting = document.getElementById("greeting")
    greeting.innerText = "GYM TIME"
}
else{
    let greeting = document.getElementById("greeting")
    greeting.innerText = "GO TO SLEEP...!!"
}

let buttons = document.getElementById("add_alarm")
buttons.addEventListener('mouseover', function(){
    this.innerText = "PARTY TIME.!!"
})
buttons.addEventListener('mouseout', function(){
    this.innerText = "SET ALARM.!!"
})
buttons.addEventListener("click", function (event){
    let date = new Date();
    let hours = date.getHours();

    let wakeUp = document.getElementById("wakeUp")
    let afternoon = document.getElementById("afternoon")
    let evening = document.getElementById("evening")
    let night = document.getElementById("night")


    if(parseInt(wakeUp.value)===hours){
        document.getElementById("setTime").innerText= "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById('morn_image').src = "./morningimage.jpg"
    }
    if(parseInt(afternoon.value)===hours){
        document.getElementById("setTime").innerText= "LET'S HAVE SOME LUNCH !!!"
        let image = document.getElementById('morn_image')
        image.setAttribute("src", "./noonimage.jpg")
    }
    if(parseInt(evening.value)===hours){
        document.getElementById("setTime").innerText= "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById('morn_image').src = "./lunch_image.jpg"
    }
    if(parseInt(night.value)===hours){
        document.getElementById("setTime").innerText= "CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById('morn_image').src = "./goodnight_image.jpg"
    }
    //let value = wakeUp.options  //selects all the options within the select tag
    // let value = wakeUp.options[wakeUp.selecteIndex].text
    // console.log(value)

    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text
    timing[1].innerText = afternoon.options[afternoon.selectedIndex].text
    timing[2].innerText = evening.options[evening.selectedIndex].text
    timing[3].innerText = night.options[night.selectedIndex].text
})

