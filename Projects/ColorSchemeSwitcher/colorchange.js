const buttons = document.querySelectorAll('.buttons')
const body = document.body

buttons.forEach(function (button){
    button.addEventListener('click', function(clickedButton){
       body.style.backgroundColor = clickedButton.target.id
    })
})