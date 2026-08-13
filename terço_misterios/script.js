const misterios = {
    gozosos: [
        {texto: "1º mistério: Anunciação do anjo a Maria; (Lucas 1, 26-38)", imagem: "imagens/gabriel_e_maria_200.png" },
        {texto: "2º mistério: Visitação de maria a Santa Isabel; (Lucas 1, 39-45)",imagem: "imagens/maria_e_isabel_200.png" },
        {texto: "3º mistério: Nascimento do Menino Deus; (Lucas 2, 1-21)", imagem: "imagens/nascimento_jesus_200.png" },
        {texto: "4º mistério: Apresentação de Jesus no Templo; (Lucas 2, 22-35)", imagem:"imagens/apresentação_templo_200.png" },
        {texto: "5º mistério: Perda e Encontro de Jesus; (Lucas 2, 41-52)", imagem: "imagens/perda_e_encontro_200.png" }
    ],
    dolorosos: [
        {texto: "1º mistério: A agonia de Jesus no Horto das oliveiras;"},
        {texto: "2º mistério: A flagelação do Senhor;"},
        {texto: "3º mistério: A coroação de espinhos;"},
        {texto: "4º mistério: Jesus carregando a cruz até o calvário;"},
        {texto: "5º mistério: A crucificação e morte de Jesus;"}
    ],
    glorioso: [
        {texto: "1º mistério: A Ressurreição do senhor;"},
        {texto: "2º mistério: A Ascensão do senhor aos céus;"},
        {texto: "3º mistério: A vinda do Espírito Santo;"},
        {texto: "4º mistério: A Assunção de Nossa Senhora ao céu;"},
        {texto: "5º mistério: A coroação de Maria Santíssima no céu;"}
    ],
    luminosos: [
        {texto: "1º mistério: O batismo do Senhor no Jordão."},
        {texto: "2º mistério: A autorrevelação de Cristo nas bodas de Caná"},
        {texto: "3º mistério: O anúncio do Reino de Deus e o convite à conversão"},
        {texto: "4º mistério: A Tranfiguração do Senhor;"},
        {texto: "5º mistério: A instituição da Santíssima Eucaristia;"}
    ],
};

const hoje = new Date();
const diaSemana = hoje.getDay();

function getGrupoDoDia(dia) {
    switch(dia) {
        case 0:
        case 3:
            return "gloriosos"; 
        case 1:
        case 6:
            return "gozosos";
        case 2:
        case 5:
            return "dolorosos";
        case 4:
            return "luminosos";  
    }
}

const grupoHoje = getGrupoDoDia(diaSemana);
const listaDoDia = misterios[grupoHoje];
const tituloElemento = document.getElementById("misterioAtual");
const nomeFormatado = grupoHoje.charAt(0).toUpperCase() + grupoHoje.slice(1);

tituloElemento.textContent = "Mistérios" + nomeFormatado;

const lista = document.getElementById('listaCarrossel');

listaDoDia.forEach(function (misterio) {
    const item =document.createElement("li");
    item.className = "carrossel-item";

    const img = document.createElement("img");
    img.src = misterio.imagem;
    img.alt= misterio.texto;

    const paragrafo = document.createElement("p");
    paragrafo.textContent = misterio.texto;

    item.appendChild(img);
    item.appendChild(paragrafo);
    lista.appendChild(item);
});

const btnProximo = document.getElementById('btnProximo');
const btnAnterior = document.getElementById('btnAnterior');

const larguraItem = lista.clientWidth;

btnProximo.addEventListener('click', () =>{
    lista.scrollLeft += larguraItem;
});

btnAnterior.addEventListener('click', () => {
    lista.scrollLeft -= larguraItem;
});