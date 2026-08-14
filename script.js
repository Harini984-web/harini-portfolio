/* ================= MOBILE MENU ================= */

const menuIcon = document.getElementById("menuIcon");

const navLinks = document.getElementById("navLinks");


menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon =
        menuIcon.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* ================= CLOSE MOBILE MENU ================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon =
                menuIcon.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.getElementById("typing");


const words = [

    "Computer Science Graduate",

    "M.Sc. Computer Science Student",

    "Data Analytics",

    "Software Developer",

    "Frond-end Developer",

    "Web Developer",

    "UI/UX Designer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}


typeEffect();


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        alert(
            "Thank you for your message!"
        );

        contactForm.reset();

    }
);


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navItems.forEach(item => {

            item.classList.remove(
                "active"
            );


            if (
                item.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                item.classList.add(
                    "active"
                );

            }

        });

    }
);