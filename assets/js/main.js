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

    navIcon.forEach(Icon => {
        Icon.classList.toggle("hidden")
    })

});

function navbarfixed() {
    const header_dom = document.querySelector(".header");

    const nav_offset_top = header_dom.clientHeight + 50;

    window.addEventListener("scroll", () => {

        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        if (scroll >= nav_offset_top) {
            header_dom.classList.add("navbar-fixed");
        } else {
            header_dom.classList.remove("navbar-fixed");
        }
    });
}
function setMenuActive() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".header--menu__item>a");

    window.addEventListener("scroll", () => {

        let current = "";
        sections.forEach((section) => {


            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(li => {
            li.classList.remove("active");
            if (current == li.getAttribute("href").split('#')[1]) {
                li.classList.add("active")
            }
        });


    })
}

navbarfixed();
setMenuActive();
