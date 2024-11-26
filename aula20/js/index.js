function meuEscopo() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado o formulário.');
    };
}
meuEscopo();