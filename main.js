let character = document.getElementById('static-img');
document.addEventListener("keydown", (e) => {
   if (e.keyCode === 39) {
      character.classList.add('runner');
      character.classList.remove('static-img');
      console.log("Right key is pressed.");
   }
})

// move forward on scroll up

var timer = null;

window.addEventListener('scroll', function () {
   if (timer > 0) {
      clearTimeout(timer);
      character.classList.add('runner');
      character.classList.remove('static-img');
   }
   timer = setTimeout(function () {
      character.classList.add('static-img');
      character.classList.remove('runner');
   }, 150);
}, false);

// var pos = 0;
// $(window).bind('mousewheel DOMMouseScroll', function (event) {
//    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
//       pos = pos + 50;
//    } else {
//       if (pos > 1) {

//          pos = pos - 50;
//       }
//    }
//    $('#yscroll').scrollLeft(pos)
// });

// var st = window.scrollX;
// window.addEventListener('scroll', function() {
//    console.log(this.window.scrollX);
//    if (st > this.window.scrollX) {
//       character.classList.add('runner');
//       character.classList.remove('static-img');
//    } else if (st < this.window.scrollX){
//       character.classList.add('runner-back');
//       character.classList.remove('static-img');
//    }
// }, false);


// stop moving if keyup right arrow

document.addEventListener("keyup", (e) => {
   if (e.keyCode === 39) {
      character.classList.remove('runner');
      character.classList.add('static-img');
      console.log("Right key is up.");
   }
})

document.addEventListener("keydown", (e) => {
   if (e.keyCode === 37) {
      character.classList.add('runner-back');
      character.classList.remove('static-img');
      console.log("Right key is pressed.");
   }
})

document.addEventListener("keyup", (e) => {
   if (e.keyCode === 37) {
      character.classList.remove('runner-back');
      character.classList.add('static-img');
      console.log("Right key is up.");
   }
})

// let bg = document.querySelector('.container');
// let cloud = document.querySelectorAll('#cloud');

// bg.onscroll = function() {
//    let x = bg.scrollTop;

//    cloud[0].style.left = x/8 + 'px';
//    cloud[1].style.left = x/4 + 'px';
// }