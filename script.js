var titulo = document.querySelector('h1.cont-principal-escrito-tit')
var subtit = document.querySelector('h2.cont-principal-escrito-subtit')
function clicou() {
    titulo.innerHTML = 'Não tem nada aí!'
    subtit.innerHTML = 'Mas obrigado por checar!'
    setTimeout(nomes, 1000*4);
}
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + randomColor;
    titulo.innerHTML = 'Você achou!'
    setTimeout(nomes, 1000*2);
  }
function nomes() {
    titulo.innerHTML = 'GraBOT'
    subtit.innerHTML = 'Converta Coordenadas de Forma Simples'
    document.body.style.background = 'linear-gradient(171deg, rgba(177,18,58,1) 0%, rgba(207,41,41,1) 100%)'
}

