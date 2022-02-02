// newFunction();

// function newFunction() {
//     const navToggler = document.querySelectorAll(".nav-toggler");

//     navToggler.addEventListner('click', () => {

//         alert("hello");

//     });
// }




{/* <script> */ }
const button = document.getElementById("btn");
const list = document.getElementById("list");

list.style.display = "none";

button.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }

})




// </script>

{/* <script> */ }
const button_2 = document.getElementById("btn_2");
const list_2 = document.getElementById("list_2");

list_2.style.display = "none";

button_2.addEventListener("click", (event) => {
    if (list_2.style.display == "none") {
        list_2.style.display = "block";
    } else {
        list_2.style.display = "none";
    }

})

// </script>

const navToggler = document.querySelector(".nav-toggler");
const headermenu = document.querySelector("ul.header--menu");


navToggler.addEventListener("click", () => {

    const navIcon = document.querySelectorAll(".navIcon")

    // show menu programatically
    headermenu.classList.toggle("show");

    // alert("hello");

    navIcon.forEach(Icon =>{
        Icon.classList.toggle("hidden")
    })

});

