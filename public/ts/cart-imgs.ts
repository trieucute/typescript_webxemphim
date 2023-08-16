let slideIndexs: number = 1;
showSlides(slideIndexs);

function plusSlides(n:number) {
  showSlides(slideIndexs += n);
}

function currentSlide(n:number) {
  showSlides(slideIndexs = n);
}

function showSlides(n:number) {
    let i:number;
    let slides:  NodeListOf<HTMLElement> =  document.querySelectorAll(".mySlides_pro") ;
    let dots:NodeListOf<HTMLElement> = document.querySelectorAll(".demo");
  //   let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndexs = 1}
    if (n < 1) {slideIndexs = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_img", "");
    }
   
    slides[slideIndexs-1].style.display = "block" ;
    dots[slideIndexs-1].className += " active_img";
  //   captionText.innerHTML = dots[slideIndex-1].alt;
  }
  