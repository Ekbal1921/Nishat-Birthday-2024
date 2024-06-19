//Time counter javascript code


var nishat = document.querySelector(".photo");



function secondimage(){
    
   nishat.src = ("https://i.ibb.co/s3V3KJH/akhi1.jpg");
  
}


let number = document.getElementById('number');
let counter = 0;

setInterval(() =>{

if(counter==99){
  clearInterval();   
}
else{
   counter += 1;
   number.innerHTML = counter; 
    
}



},1000)









//Dark theam code

var icon = document.getElementById('icon');

icon.onclick = function(){
    
document.body.classList.toggle('dark-theam');
    
  if(document.body.classList.contains('dark-theam')) {
      
     icon.src = "sun.png"; }
     
     else{
     icon.src = "moon.png"; }
   
   
    
}
    
 
 
//Real time show
let time =    
       document.getElementById('timeShow');

 setInterval(() =>{
      
 let d = new Date();


 time.innerHTML =  d.toLocaleTimeString();
            
 },1000) 
    

   


