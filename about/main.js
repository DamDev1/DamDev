var liContainer = document.querySelector(".liContainer");

document.querySelector(".toggle").addEventListener
("click", function(){
    liContainer.classList.toggle("active")
});

window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     alert("hello")
//   } else {
//     document.getElementById("myP").className = "";
//   }
// }

function myFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        liContainer.classList.remove("active")
    }else{
        false;
    }
}