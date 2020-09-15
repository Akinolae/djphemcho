
const animateNav = () => {
    const date = new Date();
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    const footerDate = document.getElementById("currentDate");
    footerDate.textContent = date.getFullYear();

    // footerDate.textContent = "hey"
    burger.addEventListener("click", () => {
        nav.classList.toggle("burgerIsactive");
        burger.classList.toggle("toggle")
    })
}

animateNav();