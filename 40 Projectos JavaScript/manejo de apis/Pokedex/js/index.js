/* let api = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"; */

/* fetch(api)
.then(response => response.json())
.then(data => {
    let results = data.results
    console.log(results)
    results.forEach(item => {
        document.write(`<h1>${item.name}<h1/>`)
    });
})
    
.catch(error => console.log(error)) */

// nuevo codigo

const listaPokemon = document.querySelector('#listaPokemon');
const btn = document.querySelectorAll('.btn-header');
let urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

for(let i = 1; i <= 151; i++)
{
    fetch(urlPokemon + i)
    .then(response=> response.json())
    .then(data => mostrarPokemon(data))
}

function mostrarPokemon(pokemon)
{
    let pokemonId = pokemon.id.toString();
    if(pokemonId.length ===1)
    {
        pokemonId = '00' + pokemonId
    }else if(pokemonId.length === 2)
    {
        pokemonId = '0' + pokemonId
    }
    const types = pokemon.types.map(type=>`<p class="${type.type.name} tipo">${type.type.name}</p>`);
    let type = types.join(" ");
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
                        <p class="pokemon-id-back">#${pokemonId}</p>
                        <div class="pokemon-imagen">
                            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="pokemon">

                        </div>
                        <div class="pokemon-info">
                            <div class="nombre-contenedor">
                                <p class="pokemon-id">#${pokemonId}</p>
                                <h2 class="pokemon-nombre">${pokemon.name}</h2>
                            </div>
                            <div class="pokemon-tipos">
                            ${type}
                            </div>
                            <div class="pokemon-stats">
                                <p class="stats">${pokemon.height}m</p>
                                <p class="stats">${pokemon.weight}kg</p>
                            </div>
                        </div>
                   
    `; listaPokemon.append(div);

    btn.forEach(boton =>boton.addEventListener('click',(e)=>{
        const btnId = e.currentTarget.id;
        listaPokemon.innerHTML='';
        for(let i = 1; i <= 151; i++)
            {
                fetch(urlPokemon + i)
                .then(response=> response.json())
                .then(data =>
                    {
                    let types =data.types.map(types => types.type.name)
                    //console.log(types)
                    if(types.some(type =>type.includes(btnId)))
                    {
                        //mostrarPokemon(data)
                        console.log(data.length)
                    }
                    } ) 
            }
        
    }))
    
}