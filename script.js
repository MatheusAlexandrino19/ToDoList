const columns = document.querySelectorAll(".column__cards");
const trash = document.getElementById("trash")
let draggedCard;
var id1 = 'matheus'
const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = "move";
    number()
};

const dragOver = (event) => {
    event.preventDefault();
};

const dragEnter = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.add("column--highlight");
    }
    number()
};

const dragLeave = ({ target }) => {
    target.classList.remove("column--highlight");
    number()
};

const drop = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.remove("column--highlight");
        target.append(draggedCard);
    } else if (target.id === "trash" || target.closest("#trash")) {
        draggedCard.remove();
    }
    number();
};

const createCard = ({ target }) => {
    if (!target.classList.contains("column__cards")) return;

    const card = document.createElement("section");

    card.className = "card";
    card.draggable = "true";
    card.contentEditable = "true";

    card.addEventListener("focusout", () => {
        card.contentEditable = "false";
        if (!card.textContent){ card.remove(); number()}
    });

    card.addEventListener("dragstart", dragStart);

    target.append(card);
    card.focus();
    number()
};

columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dblclick", createCard);
});
trash.addEventListener("dragover", dragOver);
trash.addEventListener("dragenter", dragEnter);
trash.addEventListener("dragleave", dragLeave);
trash.addEventListener("drop", drop);
function number(){
        const columnNumber0 = document.getElementById('column-0')
        const columnNumber1 = document.getElementById('column-1')
        const columnNumber2 = document.getElementById('column-2')
        const columnNumber3 = document.getElementById('column-3')

        let columnSections0 = columnNumber0.querySelectorAll('section')
        let columnSections1 = columnNumber1.querySelectorAll('section')
        let columnSections2 = columnNumber2.querySelectorAll('section')
        let columnSections3 = columnNumber3.querySelectorAll('section')

        document.getElementById('number0').innerText = columnSections0.length
        document.getElementById('number1').innerText = columnSections1.length
        document.getElementById('number2').innerText = columnSections2.length
        document.getElementById('number3').innerText = columnSections3.length
}
