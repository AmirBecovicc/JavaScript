// fetching data & query params

// fechajte sa ovog apija:https://api.quotable.io/quotes/random sa get methodom podatke
// i zatim ih consologujete. Koristi te promise i 

fetch("https://api.quotable.io/quotes/random")
.then((result) => {
    return result.json()
})
.then((data) => {
    console.log(data)
    console.log(data[0].author, data[0].content)
});

// uradite sve sto u prethodnom zadatku ali koristeci async await,
// takodje koristite try catch

const fetchQuote = async () => {
    try{
        const result = await fetch("https://api.quotable.io/quotes/random");
        const data = await result.json()
        console.log(data)
        console.log(data[0].author, data[0].content)
    } catch (error) {
        console.log(error)
    }
}

fetchQuote();

// napisite asinhronu funkciju koja fetcha podatke sa apija:
// 


const fetchQuotes = async () => {
    try{
        const result = await fetch("https://api.quotable.io/quotes");
        const data = await result.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchQuotes();

const getLongestQuote = (data) => {
    let longestQuote;

    data.results.forEach((element) => {
        if(longestQuote) {
            longestQuote = element;
        }
        if(longestQuote){
            if(longestQuote.content.length < element.content.length){
                longestQuote = element;
            }
        }

        console.log(index, element.content.length)
    });

    return longestQuote;
};

const getShortestQuote = (data) => {
    let longestQuote;

    data.results.forEach((element) => {
        if(shortestQuote) {
            shortestQuote = element;
        }
        if(shortestQuote){
            if(shortestQuote.content.length > element.content.length){
                shortestQuote = element;
            }
        }

        console.log(index, element.content.length)
    });

    return shortestQuote;
};

