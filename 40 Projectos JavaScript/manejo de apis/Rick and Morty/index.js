
const api = "https://rickandmortyapi.com/api/character/?page=1";
const img = document.querySelector('.img-character');
const h1 = document.querySelectorAll('.h1');
fetch(api)
.then(response =>response.json())
.then(data => {
  let results = data.results
  console.log(results)
results.forEach(element => {
 return  document.write(`<h1>${element.name}<h1/> <img src="${element.image}"/>`)
});

}
  )
  
.catch(error => console.log(error))
