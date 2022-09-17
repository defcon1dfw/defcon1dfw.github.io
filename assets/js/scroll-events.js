let tileElementsArray = document.querySelectorAll(".tile");
let headerElementsArray = document.querySelectorAll(".master-nav");

console.log(tileElementsArray);
window.addEventListener('scroll', fadeIn);
window.addEventListener("scroll", shrinkHeader);

function fadeIn() {
    for (var i = 0; i < tileElementsArray.length; i++) {
        var elem = tileElementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 90;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}

function shrinkHeader() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var elem = headerElementsArray[0];
    var scrollTop = 80;

    if (st > scrollTop) {
        // downscroll code
        elem.classList.add("shrink-nav");
    } else {
        // upscroll code
        elem.classList.remove("shrink-nav");
    }
    // lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

// Allow fadeIn to run on page reload.
fadeIn();