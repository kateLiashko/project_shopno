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
  mousewheelControl: true,
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

/*slisk-slider section-workers*/
$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('#items:not(.slick-initialized)').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      centerPadding: '40px',
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000, 
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1            
          }
        }
      ]
    });
  } else {
    $("#items.slick-initialized").slick("unslick");
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
    autoplay: true,

    cssEase: 'linear'  
});

/* validation email, form */
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.value);
}

function validate(target) {
  let nameContainer = target.querySelector('.form-name');
  let subjectContainer = target.querySelector('.form-subject');
  let messageContainer = target.querySelector('.form-message');
  let emailContainer = target.querySelector('.form-email');

  let name = target.querySelector('.form-name input');
  let subject = target.querySelector('.form-subject input');
  let message = target.querySelector('.form-message textarea');
  let email = target.querySelector('.form-email input');

  nameContainer.classList.remove('error-message');
  subjectContainer.classList.remove('error-message');
  messageContainer.classList.remove('error-message');
  emailContainer.classList.remove('error-message');

  if (!name.value) {
      nameContainer.classList.add('error-message');
  }
  if (!subject.value) {
    subjectContainer.classList.add('error-message');
  }
  if (!message.value) {
      messageContainer.classList.add('error-message');
  }
  if (!validateEmail(email)) {
      emailContainer.classList.add('error-message');
  }
  if (name.value && message.value && validateEmail(email)) {
      target.submit();
  }
  return false;
}

$('.main-form button').click(function() {
  let target = document.querySelector('.main-form');
  validate(target);
});

