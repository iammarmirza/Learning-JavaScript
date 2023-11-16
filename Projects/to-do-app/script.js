const inputBox = document.querySelector('.input-task')
const addButton = document.querySelector('.add-button')
const mainContainer = document.querySelector('.main-container')

function createListContainer(text) {
    const listContainer = mainContainer.appendChild(document.createElement('div'))
    listContainer.classList.add('list-container')

    const listText = listContainer.appendChild(document.createElement('p'))
    listText.classList.add('list-text')
    listText.innerText = text

    const deleteButton = listContainer.appendChild(document.createElement('button'))
    deleteButton.classList.add('delete-button')
    deleteButton.innerText = 'Delete'

    listText.addEventListener('click', function () {
        toggleStrike(listText)
    })

    deleteButton.addEventListener('click', function () {
        removeListContainer(listContainer)
    })
}

function addListItem() {
    if (inputBox.value !== '') {
        createListContainer(inputBox.value);
        inputBox.value = '';
    }
}

function toggleStrike(element) {
    element.classList.toggle('strike')
}

function removeListContainer(container) {
    container.remove()
}

inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && inputBox.value !== "") {
        addListItem();
    }
});

addButton.addEventListener('click', addListItem)