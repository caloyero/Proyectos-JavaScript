const about = document.querySelector('.about')
const listBtn = document.querySelectorAll('.tab-btn');
const article = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    /* alert(id); */
    if (id) {
        listBtn.forEach((btn) => { btn.classList.remove('active') });
        e.target.classList.add('active');

        article.forEach((art) => {
            art.classList.remove('active');
        });
        /*  id.classList.add('active'); */

        const elId = document.getElementById(id);
        elId.classList.add('active');
        console.log(elId.id);

    }


});