const quoteDiv = document.getElementById("quotes")
console.log(quoteDiv)

fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((res2) => {
        quoteDiv.innerHTML += `<h2>${res2.quote}<h2>`
    })

const catButton = document.getElementById("give-cat")

catButton.addEventListener("click", (evt) => {
    const catDiv = document.getElementById("cat-pic")

    fetch("https:api.thecatapi.com/v1/images/search?")
        .then(res => res.json())
        .then(picTime => {
            picTime.forEach(cat => {
                catDiv.innerHTML += `<img src="${cat.url}" alt="kitti">`
            });
        })
})