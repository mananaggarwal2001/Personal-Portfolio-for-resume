AOS.init();
let typed = new Typed('.wordchangingclass', {
    strings: ["Manan Aggarwal.", "a Content Creater.", "a Coder.", "a Writer.", "a Guider.", "a Freelancer."],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity
});
let coverarrowdiv = document.getElementsByClassName(".coverarrowclass");
let imageclass = document.getElementsByClassName(".coverarrowimageclass");
function slideUp() {
    imageclass.style.transition = "all 2s ease-in-out";
    imageclass.style.height = "0px";
}

function slideDown() {
    imageclass.style.transition = "all 2s ease-in-out";
    imageclass.style.height = "100px";
}

setInterval(() => {

    slideUp;
    slideDown;
}, 2000);