var write = document.querySelector(".write-us");
var writeForm = document.querySelector(".modal");
var formClose = writeForm.querySelector(".modal-close");

write.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeForm.classList.add("modal-visual")
});

formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeForm.classList.remove("modal-visual")
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (writeForm.classList.contains("modal-visual")) {
            writeForm.classList.remove("modal-visual");
        }
    }
});