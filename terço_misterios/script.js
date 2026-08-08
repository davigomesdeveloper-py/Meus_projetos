const lista = document.getElementById('listaCarrossel');
const btnProximo = document.getElementById('btnProximo');
const btnAnterior = document.getElementById('btnAnterior');

const larguraItem = lista.clientWidth;

btnProximo.addEventListener('click', () =>{
    lista.scrollLeft += larguraItem;
});

btnAnterior.addEventListener('click', () => {
    lista.scrollLeft -= larguraItem;
});