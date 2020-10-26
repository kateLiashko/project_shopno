/*burger menu*/

let menuBtn = document.querySelector('.menu-btn');
let menuLines = document.querySelector('.menu-btn-lines');
let menuBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

if(menuBtn) {
  menuBtn.addEventListener('click', function() {
    menuLines.classList.toggle("menu-btn-active");
    menuBox.classList.toggle("menu-show");
  });
}

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuLines.classList.remove("menu-btn-active");
    menuBox.classList.remove("menu-show");
  });
});


/*fix header*/

let header = document.querySelector('.header');

if(header) {
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 590){
      header.classList.add("header-fixed");
    }
    else{
      header.classList.remove("header-fixed");
    }
  }
}


/*scroll menu*/

$("#menu-burger").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 75 + 'px';
  $('body,html').animate({scrollTop: top}, 900);
});

//$("#home").on("click", "a", function (event) {
  //event.preventDefault();
  //let id  = $(this).attr('href'),
      //top = $(id).offset().top - 75 + 'px';
 // $('body,html').animate({scrollTop: top}, 900);
//});


/*slider swiper section-about-us*/

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*section wr-services info-btn*/

let previewsContainer = document.querySelector('.services-content');

previewsContainer.addEventListener('click', function (e){
  if(!e.target.closest('button')) return;
  
  let btn = e.target.closest('button');
  let parent = e.target.closest('.preview');

  if (btn.className === 'info-btn') {
      parent.classList.add('show');
  } else {
      parent.classList.remove('show');
  }
});

/*slisk-slider section-wr-characteristic*/

$('.characteristic-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'  
});
