// bun, protein, cheese, veggie button
const bunBtn = document.querySelector(".topping__bun");
const proteinBtn = document.querySelector(".topping__protein");
const cheeseBtn = document.querySelector(".topping__cheese");
const veggieBtn = document.querySelector(".topping__veggie");

const bottomBun = document.querySelector(".bottomBun");
const topBun = document.querySelector(".topBun");

bunBtn.addEventListener("click", () => {
    bottomBun.classList.toggle("toasted");
    topBun.classList.toggle("toasted");
})

