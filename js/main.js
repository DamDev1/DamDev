const liContainer = document.querySelector(".liContainer")
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function(){
    liContainer.classList.toggle("active")
});