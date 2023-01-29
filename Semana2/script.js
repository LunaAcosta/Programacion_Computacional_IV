// para mostrar y oculpar el div la lista presionando el boton ocultar 

const hidebtn = document.querySelector("#hideElements");
const listDiv = document.querySelector("#list");

//Constantes para agregar elementos
const addItemInput = document.querySelector("#addItem"); //input:text
const addItemButton = document.querySelector("button#addItemButton");

//Contante para activar la alerta
const activeAlert = document.querySelector("#alert");

//Constante para eliminar un elemento
const removeItem = document.querySelector("button#removeItem");

//Agrega los eventos al boton Ocultar / Agregar
hidebtn.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    listDiv.style.display = "block";
    hidebtn.textContent = "Ocultar";
  } else {
    listDiv.style.display = "none";
    hidebtn.textContent = "Mostrar";
  }
});

//Agregar elemetnos a la lista
addItemButton.addEventListener("click", () => {
  if (addItemInput.value != "") {
    activeAlert.style.visibility = "hidden";
    let list = document.querySelector("ol");
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    list.appendChild(li);
    addItemInput.value = "";
    addItemInput.focus();
  } else {
    activeAlert.style.visibility = "visible";
    addItemInput.focus();
  }
});

var list = document.getElementById("listItems"),
  items = list.getElementsByTagName("li");

//Funcion
const findIndex = (element) => {
  var len = items.length;
  for (var i = 0; i < len; i++) {
    if (items[i] === element) {
      return i;
    }
  }
};

list.onclick = (e) => {
  let event = e || window.event;
  src = event.target;

  var myIndex = findIndex(src);
  index = myIndex;
  //alert(myIndex);
  list
    .querySelectorAll("li")
    .forEach((el) => el.classList.remove("alert", "alert-danger"));
  items[myIndex].classList.add("alert", "alert-danger");
};

//Eliminar elemento de la lista
removeItem.addEventListener("click", () => {
  let response = confirm(
    `¿Estas seguro que deseas eliminar el elemento ${index + 1}?`
  );
  if (response == true) {
    items[index].parentNode.removeChild(items[index]);
  }
  addItemInput.focus();
});