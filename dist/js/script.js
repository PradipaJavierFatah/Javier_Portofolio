// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top')


  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Humburger

const hamburger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  humberger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});


// Untuk kilk di luar humberger
window.addEventListener('click', function(e){
  if(e.target != humberger && e.target != navMenu) {
    humberger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Pindah Posisi Toggle Sesuai Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


//  --- Toggle Skill and Tools Start ---
const skillsContainer = document.getElementById('skillsContainer');
const toolsContainer = document.getElementById('toolsContainer');
const skillsBtn = document.getElementById('skillsBtn');
const toolsBtn = document.getElementById('toolsBtn');

// Show skills and hide tools when "Skills" button is clicked
skillsBtn.addEventListener('click', function() {
    if (toolsContainer.classList.contains('hidden')) return; // Do nothing if skills are already shown
    skillsContainer.classList.remove('hidden');
    toolsContainer.classList.add('hidden');
});

// Show tools and hide skills when "Tools" button is clicked
toolsBtn.addEventListener('click', function() {
    if (skillsContainer.classList.contains('hidden')) return; // Do nothing if tools are already shown
    toolsContainer.classList.remove('hidden');
    skillsContainer.classList.add('hidden');
});

// For Change color button after click
skillsBtn.addEventListener('click', () => {
  // Change Skills button to orange
  skillsBtn.classList.remove('bg-gray-300', 'dark:bg-gray-700');
  skillsBtn.classList.add('bg-orange-500', 'text-white', 'hover:bg-orange-600');

  // Change Tools button to gray
  toolsBtn.classList.remove('bg-orange-500', 'hover:bg-orange-600');
  toolsBtn.classList.add('bg-gray-300', 'dark:bg-gray-700', 'hover:bg-gray-400', 'dark:hover:bg-gray-600');
});

toolsBtn.addEventListener('click', () => {
  // Change Tools button to orange
  toolsBtn.classList.remove('bg-gray-300', 'dark:bg-gray-700');
  toolsBtn.classList.add('bg-orange-500', 'text-white', 'hover:bg-orange-600');

  // Change Skills button to gray
  skillsBtn.classList.remove('bg-orange-500', 'hover:bg-orange-600');
  skillsBtn.classList.add('bg-gray-300', 'dark:bg-gray-700', 'hover:bg-gray-400', 'dark:hover:bg-gray-600');
});

//  --- Toggle Skill and Tools End ---


// Type Write Start
document.addEventListener("DOMContentLoaded", function () {
  var app = document.getElementById('typewriter');

  var typewriter = new Typewriter(app, {
      loop: true, // Biar looping terus
      delay: 75, // Kecepatan ketikan
  });

  typewriter
      .typeString('Student & Data Analyst')
      .pauseFor(2000) // Nunggu 2 detik sebelum ulang
      .deleteAll() // Hapus teks
      .start(); // Mulai lagi
});
// Type Write End