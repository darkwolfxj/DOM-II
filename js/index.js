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
gradientLinks.forEach((e)=>e.addEventListener('click',()=>console.log('prevented default')));
//make the bus honk
let busHonk=document.querySelector('.intro img');
busHonk.addEventListener('mouseover', ()=> {let audio=document.createElement('audio');
audio.setAttribute('autoplay', 'true');
audio.src=('https://retired.sounddogs.com/previews/101/mp3/106439_SOUNDDOGS__bu.mp3');
});
//dragged image
let dragged=document.querySelectorAll('img');
// dragged.forEach()
