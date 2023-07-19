let toDo = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K"
];


//Dominant elements
function createToDoElement(text) {
    let element = document.createElement("li");

    element.innerText = text;

    return element;
}

function renderToDoList () {
    document.getElementById("to-do-container").innerHTML = ""
    for (let i = 0; i < toDo.length; i++) {
        let toDoText = toDo[i]
        
        let toDoElement = createToDoElement(toDoText);

        document.getElementById("to-do-container").appendChild(toDoElement);
    }

}


function addToDo(text) {
    toDo.push(text);
    renderToDoList();

}

renderToDoList();

addToDo("1");
addToDo("2");
addToDo("3");
addToDo("4");









