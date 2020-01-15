// Your code goes here
//on copy
let doNotCopy=document.querySelector('body');
doNotCopy.addEventListener('copy', ()=>alert("Please don't copy anything from our site ;-;"));

//on right-click of image
let otherImgs=document.querySelectorAll('img');
otherImgs.forEach((e)=> e.addEventListener('contextmenu', ()=>{   
    e.style.visibility='hidden';
        alert('Are you trying to steal our images? ;-;')
}));

//don't allow selection of text on double-click
let selectText=document.querySelectorAll('h1, h2, h4, p');
selectText.forEach((e)=> e.addEventListener('dblclick', ()=>{
    e.style.fontSize='0px';
    alert('No selecting text ;-;');
}));
//apply a gradient to links on click
let gradientLinks=document.querySelectorAll('.nav-link');
gradientLinks.forEach((e)=> e.addEventListener('click',  ()=> {
    e.style.background='-webkit-linear-gradient(red, yellow,black)'; 
    e.style['-webkit-text-fill-color']='transparent';
    e.style['-webkit-background-clip']='text'
}))
//prevent default for links on click
gradientLinks.forEach((e)=>e.addEventListener('click',(e)=>e.preventDefault()));
//make the bus honk
let busHonk=document.querySelector('.intro img');
busHonk.addEventListener('click', ()=> {let audio=document.createElement('audio');
audio.setAttribute('autoplay', 'true');
audio.src=('https://retired.sounddogs.com/previews/101/mp3/106439_SOUNDDOGS__bu.mp3');
});
//no stealing images
let doNotSteal=document.querySelectorAll('img');
doNotSteal.forEach((e)=>e.addEventListener('mousedown', ()=>{e.style.filter='blur';}));
//key down
let keyDown=document.querySelector('body');
keyDown.addEventListener('keydown', ()=>{document.body.style.backgroundColor='black'; alert('Why are you typing? ;-;')});
//click copyright
let copyright=document.querySelector('.footer p');
copyright.addEventListener('click', ()=>copyright.style.color='red');
//blur img on mouseover
let blur=document.querySelectorAll('img');
blur.forEach((e)=>e.addEventListener('mouseover', ()=>{e.style.filter='blur(5px)';}));
//click button
let btnClick=document.querySelectorAll('.btn');
btnClick.forEach((e)=>e.addEventListener('click', ()=>e.style.backgroundColor='black'))