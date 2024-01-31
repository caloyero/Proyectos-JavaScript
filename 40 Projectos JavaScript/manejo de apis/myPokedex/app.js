const apiPopkemon = "https://pokeapi.co/api/v2/pokemon?limit=21&offset=0";

fetch(apiPopkemon)
.then(Response =>Response.json())
.then(data => mostrarPokemon(data))
.catch(error => console.log(error));

function mostrarPokemon(pokemon)
{
    let div2 = document.createElement('div')
    pokemon.results.forEach(poke=>{ 
        let div = document.createElement('div');
        div.classList.add('pokemon');
        let urlUnPokemo = `${poke.url}`;
        fetch(urlUnPokemo)
        .then(Response =>Response.json())
        .then(data => {
            let types = data.types.map(type=>`<p class="${type.type.name} tipo">${type.type.name}</p>`);
            let type = types.join(" ");
    div.innerHTML = `
        <p class="pokemon-id-back">#${data.id}</p>
        <div class="pokemon-imagen">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="pokemon">

        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${data.id}</p>
                <h2 class="pokemon-nombre">${data.name}</h2>
            </div>
            <div class="pokemon-tipos">
            ${type}
            </div>
            <div class="pokemon-stats">
                <p class="stats">${data.height}m</p>
                <p class="stats">${data.weight}kg</p>
            </div>
        </div>
   <div>
   
`;listaPokemon.append(div);})
.catch(error => console.log(error))
 });div2.innerHTML = `<a href="https://pokeapi.co/api/v2/pokemon?offset=20&limit=0"> next </a>   <a href="https://pokeapi.co/api/v2/pokemon?offset=20&limit=0"> back </a> `;listaPokemon.append(div2)

}
