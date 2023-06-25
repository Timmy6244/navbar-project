let toggleBar = document.querySelector(".toggle-bar");
let links = document.querySelector(".links");

toggleBar.addEventListener("click", () => {
    if (links.classList.contains("showLinks")
    ) {
        links.classList.remove("showLinks")   
    }else {
        links.classList.add("showLinks");
    }
})
