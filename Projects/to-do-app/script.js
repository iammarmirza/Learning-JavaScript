const inputBox = document.querySelector('.input-task')
const addButton = document.querySelector('.add-button')
const listContainer = document.querySelector('.lists-container')

function createListItem(text) {
    const listItem = document.createElement('div')
    listItem.classList.add('list-item')

    const listText = document.createElement('p')
    listText.classList.add('list-text')
    listText.innerText = text

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerText = 'Delete'

    listText.addEventListener('click', function () {
        toggleStrike(listText)
    })

    deleteButton.addEventListener('click', function () {
        removeListItem(listItem)
    })

    listContainer.append(listItem)
    listItem.append(listText, deleteButton)
}

function addListItem() {
    if (inputBox.value !== '') {
        createListItem(inputBox.value);
        inputBox.value = '';
    }
}

function toggleStrike(element) {
    element.classList.toggle('strike')
}

function removeListItem(container) {
    container.remove()
}

inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && inputBox.value !== "") {
        addListItem();
    }
});

addButton.addEventListener('click', addListItem)