const searchBox = document.getElementById("searchbox");
const searchButton = document.getElementById("search-button");
const cardHolder = document.querySelector(".card-holder");
const BASE_URL = "https://api.jikan.moe/v4/anime";

async function makeRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const animes = await data.data
    const cards = [];
    for (let i = 0; i < animes.length; i++) {
      const { images: { jpg: { image_url } }, title_english, url, title } = animes[i]
      const card = document.createElement("div");
      card.classList.add("cards");
      const cardImage = card.appendChild(document.createElement("img"));
      cardImage.classList.add("card-image");
      cardImage.setAttribute("src", image_url);
      const titleText = card.appendChild(document.createElement("p"));
      titleText.classList.add("title");
      const animeTitle = title_english || title || "";
      if (animeTitle.length < 25) {
        titleText.innerText = animeTitle;
      } else if (animeTitle) {
        titleText.innerText = animeTitle.substring(0, 25) + "...";
      } else {
        titleText.innerText = "Unknown Title";
      }
      cards.push(card);
    }
    cardHolder.append(...cards);
    if (!response.ok) {
      throw new Error("Something unexpected happened");
    }
  } catch (error) {
    console.log(error);
  }
}

function searchAnime() {
  cardHolder.innerHTML = "";
  const requestUrl = `${BASE_URL}?q=${searchBox.value}`;
  makeRequest(requestUrl)
}

searchBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && searchBox.value !== "") {
    searchAnime();
  }
});

searchButton.addEventListener("click", function () {
  if (searchBox.value !== "") {
    searchAnime();
  }
});
