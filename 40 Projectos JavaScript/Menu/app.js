const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 19.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector(".section-center");

const containerBtn = document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItem(menu);
    botonMenu();
});



function displayMenuItem(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function botonMenu() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);

        } return values;
    }, ['all']);
    //console.log(categories)
    const categoryBtn = categories.map(function (categoria) {
        return `<button type="button" class="filter-btn" data-id="${categoria}">${categoria}</button>`
    }).join("");
    console.log(categoryBtn)

    containerBtn.innerHTML = categoryBtn;
    const filterBtn = document.querySelectorAll('.filter-btn');
    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const filtro = e.currentTarget.dataset.id;//constante que guarda los data id de la clase filter-btn
            // y guarda el id
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === filtro) { return menuItem; }
            });// menu categoria va a guardar el filtro del menu el cual vamos a filtrar category
            //u compararemos con lo que biene en el filtro que es la categoria que estamos seleccionando si es igual nos retorna todo el objeto
            //console.log(menuCategory);
            if (filtro === 'all') {
                displayMenuItem(menu);
            } else {
                displayMenuItem(menuCategory);
            }
            /* condcionamos el if si lo que seleccionamos es igual a all la cual no hay categoria retornamos el menu que es el objeto sin filter
            en la funcion displayMenuItem(menu) si no else retornamos el bojeto filtrado displayMenuItem(menuCategory); */
        });
    });
}

//alert((3 === '3' && 4))
/* alert(1 === '1' || 2 === '2'); */