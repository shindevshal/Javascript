let userName = prompt("Enter The Name:- "); 

let bodyBg = document.getElementById('bodyBg');
let h3Name = document.getElementById('h3name');
let h3Clock = document.getElementById('clock');
let btn = document.getElementById('btn');

h3Name.innerText=`Welcome ${userName}.`;  

btn.onclick =()=>{                          
 bodyBg.classList.toggle('bg');
}


function clock(){           
    let date = new Date();
    let time = date.toLocaleTimeString();
    h3Clock.innerText=time;
}
setInterval(clock,1000)  