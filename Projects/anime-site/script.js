const searchBox = document.getElementById('searchbox');
const cardHolder = document.querySelector('.card-holder')
let requestUrl;
let objectArray = [];

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
        requestUrl = `https://api.jikan.moe/v4/anime?q=${searchBox.value}`;
        makeRequest(requestUrl)
            .then((data) => {
                return new Promise((resolve, reject) => {
                    objectArray = data.data
                    resolve(objectArray)
                })
            })
            .then((objects) => {
                for (let i = 0; i < objects.length; i++) {
                    const cards = cardHolder.appendChild(document.createElement('div'));
                    cards.classList.add('cards');
                    const cardImage = cards.appendChild(document.createElement('img'));
                    cardImage.classList.add('card-image');
                    cardImage.setAttribute('src', `${objects[i].images.jpg.image_url}`);
                    const title = cards.appendChild(document.createElement('p'));
                    title.classList.add('title');
                    const animeTitle = String(objects[i].title_english);
                    if(animeTitle.length < 25){
                        title.innerHTML = animeTitle
                    }
                    if(animeTitle.length > 25){
                        title.innerHTML = animeTitle.substring(0, 25) + "..."
                    }
                    if (animeTitle === "null"){
                        title.innerHTML = 'N/A'
                    }
                }
            }).catch(() => {
                alert('Some Error has occurred');
            });
    }
});
