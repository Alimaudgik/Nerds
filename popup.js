var write = document.querySelector(".write-us");
var writeForm = document.querySelector(".modal");

write.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeForm.classList.add("modal-visual")
})