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
const uparrownavigation = document.querySelector('.uparrowclassnavigationtotopclass');
const uparrownavigationclass = document.querySelector('.uparrowclassnavigationtotopclass');
const homesize = document.getElementById('home');
const aboutme = document.getElementById('About');
const resume = document.getElementById('Resume');
const project = document.getElementById('Projects');
const contactme = document.getElementById('contactme');


// for highlighting the while scroll event is occuring.
const linkhomeitem = document.getElementById('homeid');
const linkcontactitem = document.getElementById('contactmeid');
const linkaboutitem= document.getElementById('aboutid');
const linkprojectitem= document.getElementById('projectid');
const linkresumeitem= document.getElementById('resumeid');
const mainheight= document.getElementById('mainid');
let totalheight= homesize.offsetHeight + aboutme.offsetHeight + resume.offsetHeight + project.offsetHeight + contactme.offsetHeight;
let totalTopPosition= homesize.offsetTop + aboutme.offsetTop + resume.offsetTop + project.offsetTop + contactme.offsetTop;



$('document').ready(function () {
    function fadeintervalfunction() {
        $('.coverarrowimageclass').fadeOut();
        $('.coverarrowimageclass').fadeIn();
        $('.coverarrowimageclass').fadeOut();
    }

    setInterval(fadeintervalfunction, 10);

})


window.addEventListener('scroll', (e) => {
    console.log(window.innerHeight);


    if ($('#home').offset().top >= $(window).scrollTop()) {
        //do something
        $(uparrownavigationclass).fadeOut();

    } else {
        $(uparrownavigationclass).fadeIn();
    }
}, true);

let windowheight= $(window);
window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    // console.log(mainheight.offsetWidth);

}, true);

