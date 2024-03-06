// DOM manipulation

// const calculate = (sign) => {
//     const a = document.getElementById("num1")
//     const b = document.getElementById("num2")
//     const result = document.getElementById("result")
//     let calculate;

//     switch(sign) {
//         case"+"
//         calculation = +a.value + +b.value
//         break;

//         case"-"
//         calculation = +a.value - +b.value
//         break;

//         case"*"
//         calculation = +a.value * +b.value
//         break;

//         case"/"
//         calculation = +a.value / +b.value
//         break;
//     };
//     // const sum = Number(a.value) + Number(b.value)

//     result.textContent = calculation;
// };

// napraviti input element i dodati na njega event listener za change event
// u callbecku za event listener prikazati na konzoli vrednost inputa

const input1 = document.querySelector('#test');

input1.addEventListener("input", (e) => {
    // console.log(input1.value)
    console.log(e.target.value)
})

// napraviti skriptu koja pita korisnika sa prompt funkcijom da unese svoje godine
// i onda odgovara ne ekranu u nekom p elementu sa tim da li je on u penziji ili tinejdzer ili obicni covek

prompt("Unesite svoje godine");