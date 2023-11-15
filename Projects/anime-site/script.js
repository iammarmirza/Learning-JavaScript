const searchBox = document.getElementById('searchbox');
const cardHolder = document.querySelector('.card-holder')
const BASE_URL = 'https://api.jikan.moe/v4/anime';

function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                const data = JSON.parse(this.responseText);
                if (data) {
                    resolve(data);
                } else {
                    reject(new Error('Invalid API response format'));
                }
            }
        };
        xhr.send();
    });
}

searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && searchBox.value !== "") {
        cardHolder.innerHTML = '';
        requestUrl = `${BASE_URL}?q=${searchBox.value}`;
        makeRequest(requestUrl)
            .then((responseObj) => {
                return new Promise((resolve, reject) => {
                    const animes = responseObj.data
                    const cards = []
                    for (let i = 0; i < animes.length; i++) {
                        const { images: { jpg: { image_url } }, title_english, url, title } = animes[i]
                        const card = document.createElement('div')
                        card.classList.add('cards');
                        const cardImage = card.appendChild(document.createElement('img'));
                        cardImage.classList.add('card-image');
                        cardImage.setAttribute('src', image_url);
                        const titleText = card.appendChild(document.createElement('p'));
                        titleText.classList.add('title');
                        const animeTitle = title_english || title || "";
                        if (animeTitle.length < 25) {
                            titleText.innerText = animeTitle
                        } else if (animeTitle) {
                            titleText.innerText = animeTitle.substring(0, 25) + "..."
                        } else {
                            titleText.innerText = 'Unknown Title'
                        }
                        cards.push(card)
                    }
                    cardHolder.append(...cards)
                })
            }).catch(() => {
                alert('Some Error has occurred');
            });
    }
});
