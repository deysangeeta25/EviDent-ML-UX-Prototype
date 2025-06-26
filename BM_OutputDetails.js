document.addEventListener("DOMContentLoaded", () => {
    let caretElements = document.querySelectorAll(".caret");

    caretElements.forEach(caret => {
        caret.addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("nested");
            this.classList.toggle("caret-down");
        });
    });
});