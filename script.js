const bunBtn = document.querySelector(".topping__bun");

const bottomBun = document.querySelector(".bottomBun");
const topBun = document.querySelector(".topBun");

bunBtn.addEventListener("click", () => {
    bottomBun.classList.toggle("toasted");
    topBun.classList.toggle("toasted");
})

