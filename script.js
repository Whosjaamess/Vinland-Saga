let button = document.querySelector("button");

let q1 = document.querySelector(".character");

let q2 = document.querySelector(".answer");

let pic = document.querySelector("img");

let title = document.querySelector(".title");

let all = document.querySelector(".all");


button.onclick = function(){
  let answer1= Number(q1.value);
  console.log(answer1);
  let answer2= q2.value;
  console.log(answer2);
 
  if(answer1 <= 18 && answer2 ==="Thorfin"){
    console.log("wow");
    pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADLkiihF_9e9j6R-sKj3e6MwB5NwA0njOrg&s"
    title.innerHTML = "I dont know";
      all.style.display ="none";
      
      
  }else if(answer1 <= 18 && answer2 ==="Thors"){
    console.log("waka");
     pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADLkiihF_9e9j6R-sKj3e6MwB5NwA0njOrg&s"
    title.innerHTML ="In my chicken jocky";
      all.style.display ="none";
    
    
    
  }else if(answer1 >= 19 && answer2 ==="Thorfin"){
    console.log("kkkkkkka");
     pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADLkiihF_9e9j6R-sKj3e6MwB5NwA0njOrg&s"
    title.innerHTML = "I got hands";
      all.style.display ="none";
    
    
    
  }else if(answer1 >= 19 && answer2 ==="Thors"){
    console.log("waaaa");
   pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdBAM8H0LPaSP8lsjuYXtPoVQA7vFUntJOw&s"
    title.innerHTML = "Dont need it";
      all.style.display = "none";
  
    
    
  }

};
