const showAllbtn = document.querySelector(".all")
const showDatabtn = document.querySelectorAll(".filter-btn");
const allData = document.querySelectorAll(".data")

showDatabtn.forEach(element => {
    element.addEventListener("click", () => {
        if (element.getAttribute("data-id") === "all") {
            showAll();
        }
        showData(element.getAttribute("data-id"));
        // console.log(element.getAttribute("data-id"));
    });
})

showAllbtn.addEventListener("click", showAll);

function showData(id) {
    allData.forEach(element => {
        if (element.getAttribute("data-id") === id) {
            element.style.display = "grid";
        } else {
            element.style.display = "none";
        }
    });
}

function showAll() {
    allData.forEach(element => {
        element.style.display = "grid"
    })
}
