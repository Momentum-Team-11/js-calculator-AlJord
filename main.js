let buttOne = document.getElementById('buttOne')
console.log(buttOne)
console.log(buttOne.innerHTML)

buttOne.addEventListener('click', function() {
    console.log('Box' + buttOne.innerHTML + ' was clicked')
    

})