var card1=document.querySelector(".card1");
var card2=document.querySelector(".card2");

card1.addEventListener('click',function(){
    document.querySelector('.container').classList.add('container-active1');  
});
card1.addEventListener('dblclick',function(){
    document.querySelector('.container').classList.remove('container-active1');  
});
card2.addEventListener('click',function(){
    document.querySelector('.container').classList.add('container-active2');  
});
card2.addEventListener('dblclick',function(){
    document.querySelector('.container').classList.remove('container-active2');  
});

