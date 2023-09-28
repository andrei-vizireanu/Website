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

function changeContent(page) {
  const content = document.getElementById('content');
  var element = document.getElementById(page);
  const home = document.getElementById('home');
  const aboutMe = document.getElementById('aboutMe');
  const myProjects = document.getElementById('myProjects');
  const contact = document.getElementById('contact-desktop');

  home.className = "special-text";
  aboutMe.className = "special-text";
  myProjects.className = "special-text";
  contact.className = "special-text";
  // Remove all classes by setting className to an empty string
  element.className = "";
  // Add the new class
  element.classList.add("on-page");

  

  // Define relative paths to your content HTML files
  const contentPaths = {
    'home': 'index.html',
    'aboutMe': 'aboutMe.html',
    'myProjects': 'myProjects.html',
    'contact-desktop': 'contact.html'
  };

  // Use AJAX to fetch the content from separate HTML files
  const xhr = new XMLHttpRequest();
  xhr.open('GET', contentPaths[page], true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          content.innerHTML = xhr.responseText;
      }
  };

  xhr.send();
}
