var contador = 1;

var acumulador = 0;

var nombreDeContador = document.getElementById('contador');

function contar(existencia) {
    if (existencia > 0) {
        acumulador = acumulador + contador;
        nombreDeContador.innerText=acumulador;
    } else {
        alert('No hay productos en inventario')
    }
}
