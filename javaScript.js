function home() {
  document.getElementById("about-me").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("about-me-button").className = "special-text";
  document.getElementById("home-button").className = "on-page";
}

function aboutMe() {
  document.getElementById("about-me").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("about-me-button").className = "on-page";
  document.getElementById("home-button").className = "special-text";
}
// var fonts = "url(fonts/montserrat-v15-latin-500.woff2), \
// url('fonts/montserrat-v15-latin-500.eot?#iefix'), \
// url('../fonts/montserrat-v15-latin-500.woff'), \
// url('../fonts/montserrat-v15-latin-500.ttf'), \
// url('../fonts/montserrat-v15-latin-500.svg#Montserrat'), \
// url('../fonts/montserrat-v15-latin-500.eot')"

var font = new FontFace("Montserrat", "url(fonts/montserrat-v15-latin-500.woff2)", {
  style: 'normal', unicodeRange: 'U+000-5FF', weight: '500'
});

// don't wait for the render tree, initiate an immediate fetch!
//if (window.matchMedia('(min-width: 800px)').matches) {
  // do stuff
  font.load().then(function() {
    // apply the font (which may re-render text and cause a page reflow)
    // after the font has finished downloading
    //document.fonts.add(font);
    //document.body.style.fontFamily = "Awesome Font, serif";
  
    // OR... by default the content is hidden,
    // and it's rendered after the font is available
    var content = document.getElementById("content-load");
    content.style.display = "block";
  
    // OR... apply your own render strategy here...
  });
//}

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


//setTimeout(() => {  document.getElementById("content-load").style.display = "block" }, 500);

