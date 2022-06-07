// id the display
// id all buttons add event listeners
// when buttons are clicked, edit innertext of display to equal innertext of buttons
// when equals is clicked use eval to evaluate sting in innertext of display




let displayBox=document.getElementById('buttResult');
displayBox.innerHTML= ''
console.log(displayBox)

// buttSeven.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+7);
//     console.log(displayBox.innerHTML)})
    
// buttEight.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+8);
//     console.log(displayBox.innerHTML)})

// buttNine.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+9);
//     console.log(displayBox.innerHTML)})

// buttFour.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+4);
//     console.log(displayBox.innerHTML)})

// buttFive.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+5);
//     console.log(displayBox.innerHTML)})

// buttSix.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+6);
//     console.log(displayBox.innerHTML)})

// buttOne.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+1);
//     console.log(displayBox.innerHTML)})

// buttTwo.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+2);
//     console.log(displayBox.innerHTML)})

// buttThree.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+3);
//     console.log(displayBox.innerHTML)})

// buttZero.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+0);
//     console.log(displayBox.innerHTML)})






// buttClr.addEventListener('click', function() { 
//     (displayBox.innerHTML= '' );
//     console.log(displayBox.innerHTML)})

// buttDivide.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+divide)
//     console.log(displayBox.innerHTML)})

// buttMulti.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+multi);
//     console.log(displayBox.innerHTML)})

// buttMinus.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+minus);
//     console.log(displayBox.innerHTML)})

// buttDecimel.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+decimel);
//     console.log(displayBox.innerHTML)})

// buttEquals.addEventListener('click', function() {; 
//     displayBox.innerHTML=eval(displayBox.innerHTML)
//     console.log(eval(displayBox.innerHTML))});

// buttPlus.addEventListener('click', function() { 
//     (displayBox.innerHTML= displayBox.innerHTML+plus);
//     console.log(displayBox.innerHTML)})

// let decimel='.'
// let minus ='-'
// let multi = '*'
// let divide= '/'
// let plus='+'


let button = document.querySelectorAll('button')




for (let buttons of button){
        (displayBox.innerHTML = displayBox.innerHTML + buttons)
        (console.log(displayBox.innerHTML))
 
 
 
        button.innerHTML.addEventListener ('click', function() {
     (displayBox.innerHTML = displayBox.innerHTML+ button);
    console.log(displayBox.innerHTML)})
            
    }
    








