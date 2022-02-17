const incremento = document.querySelector ('.incremento'),
      decremento = document.querySelector ('.decremento'),
      numero = document.querySelector ('.numero');

let a = 1;

incremento.addEventListener ('click', () => {
    a++;
    a = (a < 10) ? '' + a : a;
    numero.innerText = a;
});

decremento.addEventListener ('click', () => {
    if (a > 1){
        a--;
        a = (a > 10) ? '' + a : a; 
        numero.innerText = a;
    } 
});

