// initiate the fonts variable
// var font = new FontFace("Montserrat", "url(fonts/montserrat-v15-latin-500.woff2)", {
//   style: 'normal', unicodeRange: 'U+000-5FF', weight: '500'
// });

// load the fonts and after that display the header
// font.load().then(function() {  
  
//   var content = document.getElementById("mobile-menu");
//   content.style.display = "block";
//   var content = document.getElementById("desktop");
//   content.style.display = "block";

// });

// // display the desktop header
// if (window.matchMedia('(min-width: 800px)').matches) {
//   var content = document.getElementById("mobile-menu");
//   content.style.display = "none";
//   var content = document.getElementById("desktop");
//   content.style.display = "block";
// }

// // display the mobile header
// if (window.matchMedia('(max-width: 800px)').matches) {
//   var content = document.getElementById("desktop");
//   content.style.display = "none";
//   var content = document.getElementById("mobile-menu");
//   content.style.display = "block";
//   console.log("mobile");
// }

function mobileNavIcon(){
  
  console.log("Nav clicked");
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});