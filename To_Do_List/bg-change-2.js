const bodyBG = document.querySelector('body');
const button = document.querySelector('#btn-1');

const bgcolor= ['red','green','purple','blue','tomato','grey'];

    button.addEventListener('click',bgChange);




    function bgChange(){

    //    bodyBG.style.backgroundColor= bgcolor[4];
    //      This statement displays 4th on the array.

    let random= Math.floor(Math.random()*bgcolor.length)
    //generating random nth color form array length.

    bodyBG.style.backgroundColor= bgcolor[random];
    


}


/*




*/