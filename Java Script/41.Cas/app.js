const fetchQuote = async () => {
    try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        const data = await response.json()
        console.log(data)
        return data[0];
    } catch (error) {
        console.log(error)
    }
}

fetchQuote().then((data) => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `<div class="card">
    <p class="author">Author: <span id="authorText">${data.author}</span></p>
    <p class="content" id="contentText">${data.content}</p>
</div>`
});


const fetchQuotes = async () => {
    try {
        const response = await fetch("https://api.quotable.io/quotes?page=1");
        const data = await response.json()
        console.log(data)
        return data.results;
    } catch (error) {
        console.log(error)
    }
};

fetchQuotes().then((data) => {
    const contentDiv = document.getElementById("content2");
    let quotes = "";

    data.forEach(() => {
        quotes +=`<div class="card">
        <p class="author">Author: <span id="authorText">${quote.author}</span></p>
        <p class="content" id="contentText">${quote.content}</p>
    </div>`
    })

    contentDiv.innerHTML = quotes
})