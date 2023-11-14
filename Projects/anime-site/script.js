const searchBox = document.getElementById('searchbox');
const cardHolder = document.querySelector('.card-holder')
let requestUrl;
let objects = {}

searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && searchBox.value !== "") {
        cardHolder.innerHTML = ''
        requestUrl = ` https://api.jikan.moe/v4/anime?q=${searchBox.value}&sfw`
        const xhr = new XMLHttpRequest()
        xhr.open('GET', requestUrl)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                const data = JSON.parse(this.responseText)
                objects.imageUrl = data.data[0].images.jpg.image_url
                objects.title = data.data[0].title_english
                const cards = cardHolder.appendChild(document.createElement('div'))
                cards.classList.add('cards')
                const cardImage = cards.appendChild(document.createElement('img'))
                cardImage.classList.add('card-image')
                cardImage.setAttribute('src', `${objects.imageUrl}`)
                const title = cards.appendChild(document.createElement('p'))
                title.classList.add('title')
                title.innerHTML = objects.title
            }
        }
        xhr.send()
    }
})


