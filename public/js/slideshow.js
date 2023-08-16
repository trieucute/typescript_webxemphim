
// card slider 
let next1 = document.getElementsByClassName("next1");
let prev1 = document.getElementsByClassName("prev1");
let prev2 = document.getElementsByClassName("prev2");
let next2 = document.getElementsByClassName("next2");
let product_slide = document.getElementsByClassName("favoritesmovie");
let upcomingmovie= document.getElementsByClassName('upcomingmovie');
// let product_slide = document.getElementById("content-row-product");
// let product_page = Math.ceil(product_slide.length/4);
// let product_page = Math.ceil(upcomingmovie.length/4);

let l =0;
let movePer = 24.6;
let maxMove = 98.4;
let u=0;
let movePer_upcome = 24.6;
let maxMove_upcome = 49.2;

// mobile_view	
// let mob_view = window.matchMedia("(max-width: 608px)");
// if (mob_view.matches)
// {
//  movePer = 50.36;
//  maxMove = 504;
// }
let right_mover = ()=>{
l = l + movePer;
if (product_slide  == 1){l = 0; }
// if (upcomingmovie  == 1){l = 0; }

for(const i of product_slide )
{
    if (l > maxMove){l = 0;}
    
    i.style.left = '-' + l + '%';
    i.style.transition='all 1s';

}


}


let left_mover = ()=>{
l = l - movePer;
if (l<=0){l = 0;}
for(const i of product_slide ){
    // if (product_page>1){
        i.style.left = '-' + l + '%';
    // }
}

}


let right_mover_upcome = ()=>{
  u = u + movePer_upcome;
  // if (product_slide  == 1){l = 0; }
  if (upcomingmovie  == 1){u = 0; }
  
  for(const i of upcomingmovie )
  {
      if (u > maxMove_upcome){u = 0;}
      
      i.style.left = '-' + u + '%';
      i.style.transition='all 1s';

  }
  }
let left_mover_upcome = ()=>{
  u = u - movePer_upcome;
  if (u<=0){u = 0;}

  for(const i of upcomingmovie ){
    // if (product_page>1){
        i.style.left = '-' + u + '%';
    // }
  }
  }
next1[0].onclick = ()=>{right_mover();}
prev1[0].onclick = ()=>{left_mover();}
next2[0].onclick = ()=>{right_mover_upcome();}
prev2[0].onclick = ()=>{left_mover_upcome();}

// slide show


var slideIndex_header;
// KHai bào hàm hiển thị slide
function showSlides_header() {
    var i;
    var slides = document.getElementsByClassName("slide-content");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].classList.remove("active"); 
    }
 

    slides[slideIndex_header].classList.add("active");  
   
    //chuyển đến slide tiếp theo
    slideIndex_header++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex_header > slides.length - 1) {
      slideIndex_header = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides_header, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides_header(slideIndex_header = 0);