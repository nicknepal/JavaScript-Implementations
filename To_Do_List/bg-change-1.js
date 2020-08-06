const hexNum =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const bodyBG =document.querySelector('body');
const btn = document.querySelector('#btn1');
const hexCode = document.querySelector('#hex-color-code');

btn.addEventListener('click',getHex);

function getHex(){
    let hexcol = '#';

    for (let i=0; i<6; i++){
      let random = Math.floor(Math.random()*hexNum.length);
      hexcol += hexNum[random];
    }

    bodyBG.style.backgroundColor= hexcol;
    hexCode.innerHTML=hexcol;
}

