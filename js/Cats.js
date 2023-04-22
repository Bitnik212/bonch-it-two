let client = new XMLHttpRequest()
let catsJsonLink = "https://gist.githubusercontent.com/Bitnik212/0feb72c593c413fa9ce405470005c00f/raw/6bb7eddb38fb8b1304cac8b5a2afc5ce11b055ed/cats.json"

client.open("GET", catsJsonLink)
client.send()

client.onload = (() => {
    console.log(client.status)
    if (client.status === 200) {
        let cats = JSON.parse(client.response).cats
        cats.forEach((catUrl, index) => {
            renderCatCard(index, catUrl)
        });
    }
})

let renderRoot = document.getElementById("cats")

function renderCatCard(id, imageUrl) {
    console.info(imageUrl)
    let catCard = document.createElement("div")
    catCard.id = "cat-" + id
    catCard.className = "cat-card"
    catCard.setAttribute("style", "background: url('" + imageUrl + "');")
    renderRoot.appendChild(catCard)
}