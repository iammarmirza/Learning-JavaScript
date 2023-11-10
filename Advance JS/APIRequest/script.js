const moreDetailsObject = {}
const MOREDETAILSARR = [`<i class="fa-solid fa-earth-asia" style="color: #000000;"></i>`,
    `<i class="fa-brands fa-x-twitter" style="color: #000000;"></i>`,
    `<i class="fa-solid fa-chart-line" style="color: #000000;"></i>`]

const card = document.querySelector('body').appendChild(document.createElement('div'))
card.classList.add('card')

const requestUrl = "https://api.github.com/users/syedkumailraza1"
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        moreDetailsObject.location = data.location;
        moreDetailsObject.twitter = data.twitter_username;
        moreDetailsObject.followers = data.followers;
        moreDetailsObject.avatar = data.avatar_url;
        moreDetailsObject.bio = data.bio;
        moreDetailsObject.name = data.name;

        const cardImage = card.appendChild(document.createElement('img'))
        cardImage.classList.add('card-image')
        cardImage.setAttribute('src', `${moreDetailsObject.avatar}`)

        const cardDetails = card.appendChild(document.createElement('div'))
        cardDetails.classList.add('card-details')
        const nameHeading = cardDetails.appendChild(document.createElement('h1'))
        nameHeading.classList.add('name-heading')
        nameHeading.innerHTML = `${moreDetailsObject.name}`

        const bio = cardDetails.appendChild(document.createElement('div'))
        bio.classList.add('bio')
        bio.innerHTML = `<i class="fa-solid fa-quote-left" style="color: #000000;"></i>
            <span class="bio-text">${moreDetailsObject.bio}</span>
            <i class="fa-solid fa-quote-right" style="color: #000000;"></i>`

        for (let i = 0; i < MOREDETAILSARR.length; i++) {
            const moreDetails = cardDetails.appendChild(document.createElement('div'))
            moreDetails.classList.add('more-details')
            if(i === 0){
                moreDetails.innerHTML = MOREDETAILSARR[i] + moreDetailsObject.location
            }
            if(i === 1){
                moreDetails.innerHTML = MOREDETAILSARR[i] + moreDetailsObject.twitter
            }
            if(i === 2){
                moreDetails.innerHTML = MOREDETAILSARR[i] + moreDetailsObject.followers
            }
        }
    }
}
xhr.send()

