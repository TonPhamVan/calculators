var input = document.querySelector('.input');
var items = Array.from(document.querySelectorAll('.item'))
items.forEach( function(btn) {
    btn.addEventListener('click',function() {
        if(input.innerHTML =='0') {
            input.innerHTML = '';
        
        }
        else if (btn.innerHTML == '=') {
            input.innerHTML = eval(input.innerHTML);
        }
        else {
            input.innerHTML += btn.innerHTML;
        }
    })
})