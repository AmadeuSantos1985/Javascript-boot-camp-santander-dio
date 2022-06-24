function escolhaModo(){
    escolhaClasse();
    escolhaTexto();
}

function escolhaClasse(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    div.classList.toggle(darkModeClass);
}

function escolhaTexto(){
    const ligthMode = 'Modo Claro';
    const darkMode = 'Modo Escuro';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = 'Ligar ' + ligthMode;
        h1.innerHTML = darkMode + ' Ligado';
        return;
    }

    button.innerHTML = 'Ligar '+ darkMode;
    h1.innerHTML = ligthMode + ' Ligado';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById ('page-title');
const body = document.getElementsByTagName('body')[0];
const div = document.getElementsByTagName('div')[0];

button.addEventListener('click', escolhaModo);