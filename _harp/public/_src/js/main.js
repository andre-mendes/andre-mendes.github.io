

// $(document).ready(function() {
// // var home = document.getElementById('home');

//   var movementStrength = 10;
//   var height = movementStrength / $(window).height();
//   var width = movementStrength / $(window).width();
//   $("#home").mousemove(function(e){
//     var pageX = e.pageX - ($(window).width() / 2);
//     var pageY = e.pageY - ($(window).height() / 2);
//     var newvalueX = width * pageX * -1 - 25;
//     var newvalueY = height * pageY * -1 - 50;
//     $('#home').css("background-position", newvalueX+"px     "+newvalueY+"px");
//   });
// });



if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {

  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(registration) {
    if (typeof registration.update == 'function') {
      registration.update();
    }
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });

}


