// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit optionBtn )
let editElemet;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// borrar datos
clearBtn.addEventListener("click", clearItems);
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  console.log(`este es el id :${id}`);
  if (value && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    // añadiendo id
    attr.value = id;
    element.setAttributeNode(attr);
    // añadiendo clase
    element.classList.add("grocery-item");
    element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener("click",deleteItem);
    editBtn.addEventListener("click", editItem);
    // abriendo el hijo
    list.appendChild(element);
    displayAlert("Item Añadido", "success");
    // mostrando el contenedor
    container.classList.add("show-container");
    // añadir al memoria local
    addToLopcalStore(id, value);
    // set back to default
    setBackToDefault();

    // añadiendo
  } else if (value && editFlag) {
    editElemet.innerHTML = value;
    displayAlert("Valor Editado", "success");
    editLocalStorage(editID, value);
    setBackToDefault(); //
  } else {
    displayAlert("Porfavor Ingresa un Valor", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}
// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("Lista Vacia", "danger");
  setBackToDefault();
  //localStorage.removeItem("list");
}

//edit item
function editItem(e)
{
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}
//delete item
function deleteItem(e)
{
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element)
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert('Elemento Eliminado','danger');
  setBackToDefault();
  removeFromLocalStorage(id)
}
// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** FUNCTIONS **********


// ****** LOCAL STORAGE **********
function addToLopcalStore(id, value) {
  console.log("item añadido");
}

function removeFromLocalStorage(id)
{
  console.log("item eliminado");
}

function editLocalStorage(id, value)
{
  
}
// ****** SETUP ITEMS **********
