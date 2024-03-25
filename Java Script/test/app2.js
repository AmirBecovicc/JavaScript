const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data)
      return data.products;
    } catch (error) {
      console.log(error);
    }
  };
  
  fetchQuote().then((data) => {
    console.log(data)
    const contentDiv = document.getElementById("content");

  const quotes = data.map((quote) => {
    return `<div class="card">
          <p class="author">Author: <span id="authorText">${quote.author}</span></p>
          <p class="content" id="contentText">${quote.content}</p>
         </div>`;
  })
  .join("");

contentDiv.innerHTML = quotes;})