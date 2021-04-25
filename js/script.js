const text = ['programmer','student','teacher','builder'];
let count = 0;
let index = 0; 
let currentText = '';
let letter = '';
(function type(){
    if (count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}());

var x = window.matchMedia("(max-width: 756px)");
const ul = document.getElementById('myTopnav');
const a = document.querySelector('div.utama nav.navbar a.icon');
function myFunction(x) {
a.addEventListener('click', function(){
    
    if (x.matches) {
        ul.classList.toggle('responsive');
      } else {
        ul.classList.toggle('responsive');
      }
})
    
}
myFunction(x);
