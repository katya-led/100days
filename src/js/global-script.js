/*
  Поиск ближайшего родителя по селектору
  https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README-ru.md#1.6
*/

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}



/*
  Запуск по готовности DOM
  http://youmightnotneedjquery.com/#ready
  Применение: ready(function(){ console.log('ddd'); });
*/

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}



// Свой код с jQuery

  $( document ).ready(function() {


  //gallery show/close detail
  $('.gallery__profile').on('click', function() {
    
    $('.gallery__detail').addClass('active');
  });

  $('.gallery__close').on('click', function() {
    $('.gallery__detail').removeClass('active');
  });


  // experiment day/night time 
  
  try {
    date = new Date();
    var hours = date.getHours(); 
    var time = '';
    var element = document.querySelector('.day-time');
    if ((hours >= 9) && (hours <= 18)) { time='day';}
    else{
      time='night';
    }

    if(!element.classList.contains(time)){
      element.classList.add(time);
    }
  } 
  catch(error){
      console.log('no time here its timeless place :3')
  }

  // action burger 
  
  try {
    var burger = document.querySelector(".burger__toggler");
      burger.addEventListener("click", function() {
      event.preventDefault();
      burger.classList.toggle("burger__toggler--close");
    });
  } 
  catch(error){
    console.log('no burgers here its vegan place')
  }


  // experiment action burger
  var animation = document.querySelector(".burger-animation__link");
  if(animation){
      animation.addEventListener("click", function(e) {
    e.preventDefault();
    animation.classList.toggle("burger-animation__link--close");
  });
  }

});
