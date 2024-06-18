document.addEventListener("DOMContentLoaded", function() {

    // navbar management

    // const header = document.getElementById('header');
    // let lastScrollTop = 0;

    // window.addEventListener('scroll', function() {
    //     let scrollTop = window.scrollY;
    //     // || document.documentElement.scrollTop;

    //     if (scrollTop > lastScrollTop) {
    //         // Scroll down
    //         header.style.top = '-15vh';
    //     } else {
    //         // Scroll up
    //         header.style.top = '0';
    //     }
    //     lastScrollTop = scrollTop;
    // });

    // small circles management

    const circles = document.querySelectorAll(".small-circle");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const firstCircle = circles[0];

    // colors the first circle when one land on the page
    firstCircle.classList.add("active");
    firstCircle.style.background = "#FFF5D0";

    circles.forEach(circle => {
        circle.addEventListener("click", function() {
            // Remove the active class from any currently active circle
            const activeCircle = document.querySelector(".small-circle.active");
            if (activeCircle) {
                activeCircle.classList.remove("active");
                activeCircle.style.background = "#FFF5D0";
            }

            // Add the active class to the clicked circle
            this.classList.add("active");
            this.style.background = "#FFF5D0";
        });
    });

    leftArrow.addEventListener("click", function() {
        const activeCircle = document.querySelector(".small-circle.active");
        if (activeCircle) {
            const prevCircle = activeCircle.previousElementSibling;
            if (prevCircle && prevCircle.classList.contains("small-circle")) {
                activeCircle.classList.remove("active");
                activeCircle.style.background = "#112A46";
                prevCircle.classList.add("active");
                prevCircle.style.background = "#FFF5D0";
            }
        }
    });

    rightArrow.addEventListener("click", function() {
        const activeCircle = document.querySelector(".small-circle.active");
        if (activeCircle) {
            const nextCircle = activeCircle.nextElementSibling;
            if (nextCircle && nextCircle.classList.contains("small-circle")) {
                activeCircle.classList.remove("active");
                activeCircle.style.background = "#112A46";
                nextCircle.classList.add("active");
                nextCircle.style.background = "#FFF5D0";
            }
        }
    });
});