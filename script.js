// bun, protein, cheese, veggie button
const bunBtn = document.querySelector(".topping__bun");
const proteinBtn = document.querySelector(".topping__protein");
const cheeseBtn = document.querySelector(".topping__cheese");
const veggieBtn = document.querySelector(".topping__veggie");

const bottomBun = document.querySelector(".bottomBun");
const topBun = document.querySelector(".topBun");
const protein = document.querySelector(".protein");
const cheese = document.querySelector(".cheese");
const lettuce = document.querySelector(".lettuce");

bunBtn.addEventListener("click", () => {
    bottomBun.classList.toggle("toasted");
    topBun.classList.toggle("toasted");
})

proteinBtn.addEventListener("click", () => {
    protein.classList.toggle("bbq-chicken");
})

cheeseBtn.addEventListener("click", () => {
    cheese.classList.toggle("american-cheese");
})

veggieBtn.addEventListener("click", () => {
    lettuce.classList.toggle("kale");
})
