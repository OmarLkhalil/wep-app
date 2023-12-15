let keyList  = document.querySelectorAll('.keys p');
console.log(keyList);

/* keyList.forEach((key)=>{
    key.addEventListener("click",()=>{
        key.style.borderBottom='1px solid blue';
    });
    
}); */

keyList.forEach((key)=>{
    
    key.addEventListener("click",function(){
        for(let i=0; i<keyList.length;i++){
            keyList[i].classList.remove("keyIndicator");
            
        };
        key.classList.toggle("keyIndicator");
        
    }); 
    
}); 
let cardGallery = document.querySelector(".cardGallery");
let browse = document.querySelector(".browse");
let hotelKeys =document.querySelectorAll(".hotels");
let browserkey = document.querySelector('.browserKey');

hotelKeys.forEach((keys)=>{
    keys.addEventListener("click",function(){
    browse.style.display="none";
    cardGallery.style.display="grid";});
    
});
browserkey.addEventListener("click",function(){
    browse.style.display="flex";
    cardGallery.style.display="none";});

let hearts = document.querySelectorAll('.heart-1 ');
hearts.forEach((heart)=>{
    heart.addEventListener("click",function(){
    heart.classList.toggle("coloredHeart");
    });
    
});

let dropDown = document.querySelector(".links");
let dropBtn = document.querySelector(".dropBtn");
let spanList= document.querySelectorAll(".dropBtn span");
dropBtn.addEventListener("click",()=>{
    /* dropDown.style.display='flex'; */
    dropDown.classList.toggle("hide");
    console.log('it is hidden');
    console.log(dropDown.classList);
    console.log(dropDown);
    dropBtn.classList.toggle('btnInv');
     spanList.forEach((span)=>{
        span.classList.toggle('spanInv');
    }); 

    console.log(spanList);
  });