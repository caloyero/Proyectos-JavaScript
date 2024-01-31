
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    /* if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
        //si contiene la clase la oculta al dar click
    } else { links.classList.add('show-links') } */// si no la muestra
    links.classList.toggle('show-links')//esto hace lo mismo que el codigo anterior
});