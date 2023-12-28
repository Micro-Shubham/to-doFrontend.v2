let arr = [];
const btn = document.getElementById("btn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.getElementById("container");
let id = 1;
console.log("test", getTodos());

btn.addEventListener("click", () => {

    addTodo(title.value, description.value);
    title.value = "";
})
function addTodo(title, description) {
    let object = {
        Title: title,
        Des: description,
        id: id++,
    }
    arr.push(object);
    updateDisplay(arr);
    // console.log(arr)

}
function updateDisplay(todos) {
    container.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {

        const t = todos[i].Title;
        const titlediv = document.createElement("div");

        titlediv.innerHTML = t;
        titlediv.id = todos[i].id;
        container.appendChild(titlediv);

    }
}
container.addEventListener("click", (event) => {
    if (event.target.id !== "container") {
        deleteTodo(event.target.id);
    }
})

function deleteTodo(id) {
    let array = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id != id) {
            array[index] = arr[i];
            index++;
        }

    }
    arr = array;
    updateDisplay(arr);
}
function getTodos() {
    //GET:/get
    let temp = [];
    fetch("http://localhost:3000/get").then((res) => {
        return res.json();
    }).then((data) => temp = data)
    return temp;
}
function postTodos(todo) {
    //POST:/post
}
function putTodos(todo, id) {
    //PUT:/put/:id
}
function deleteTodos(id) {
    //DELETE:/delete/:id
}
