var slideIndexs = 1;
showSlides(slideIndexs);
function plusSlides(n) {
    showSlides(slideIndexs += n);
}
function currentSlide(n) {
    showSlides(slideIndexs = n);
}
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides_pro");
    var dots = document.querySelectorAll(".demo");
    // var des = document.querySelectorAll(".block-descriptions");

    //   let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndexs = 1;
    }
    if (n < 1) {
        slideIndexs = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_img", "");
        // des[i].className = des[i].className.replace(" active_des", "");

    }

    slides[slideIndexs - 1].style.display = "block";
    dots[slideIndexs - 1].className += " active_img";
    // des[slideIndexs - 1].className += " active_des";

    //   captionText.innerHTML = dots[slideIndex-1].alt;
}

// let next = document.getElementsByClassName("next_icon");
// let prev = document.getElementsByClassName("prev_icon");
// let active_top = document.getElementsByClassName("demo");
// let product_page = Math.ceil(active_top.length/4);
// let l =0;
// let moveper = 24.6;
// let maxmove = 98.4;
// // let maxMove_upcome = 49.2;

// // mobile_view	
// // let mob_view = window.matchMedia("(max-width: 608px)");
// // if (mob_view.matches)
// // {
// //  movePer = 50.36;
// //  maxMove = 504;
// // }
// let up_mover = ()=>{
// l = l + moveper;
// if (active_top  == 1){l = 0; }
// // if (upcomingmovie  == 1){l = 0; }

// for(const i of active_top )
// {
//     if (l > maxmove){l = 0;}
    
//     i.style.bottom = '-' + l + '%';
// }


// }


// let bottom_mover = ()=>{
// l = l - moveper;
// if (l<=0){l = 0;}
// for(const i of active_top ){
//     // if (product_page>1){
//         i.style.bottom = '-' + l + '%';
//     // }
// }

// }

// next[0].onclick = ()=>{up_mover();}
// prev[0].onclick = ()=>{bottom_mover();}


