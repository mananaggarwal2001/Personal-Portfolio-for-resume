AOS.init();
let typed = new Typed('.wordchangingclass', {
    strings: ["Manan Aggarwal.", "a Content Creater.", "a Coder.", "a Writer.", "a Guider.", "a Freelancer."],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity
});
let coverarrowdiv = document.querySelector(".coverarrowclass");
let imageclass = document.querySelector(".coverarrowimageclass");

let disablingarrowelement = document.querySelector("#arrowid");
const home = document.getElementById('home');




$('document').ready(() => {
    function fadeintervalfunction(){
        // $('.coverarrowimageclass').fadeOut();
        // $('.coverarrowimageclass').fadeIn();
         $('.coverarrowimageclass').slideUp();
         $('.coverarrowimageclass').slideDown();
         $('.coverarrowimageclass').slideUp();

    }

    setInterval(fadeintervalfunction, 100);

})