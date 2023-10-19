const mybutton = document.querySelector('.to-the-top-icon');
const menu = document.querySelectorAll('.menu a');
// const menuSpan = document.querySelector('.menu_a_link span');
const spans = document.querySelectorAll('.menu-bar a span');
// const menuSpan=document.querySelectorAll('menu_span');

const sections = document.querySelectorAll('.sections');

const headerSection = document.querySelector('.header');
const Offset_headerSection = headerSection.offsetTop;

const about_me = document.querySelector('.about-me');
const Offset_about_me = about_me.offsetTop;

const skills = document.querySelector('.skills');
const Offset_skills = skills.offsetTop;

const projects = document.querySelector('.projects');
const Offset_projects = projects.offsetTop;

const contact_me = document.querySelector('.contact-me');
const Offset_contact_me = contact_me.offsetTop;

const testi = document.querySelector('.contact-me');
const Offset_testi = contact_me.offsetTop;


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}

mybutton.addEventListener('click',()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

window.addEventListener('load',()=>{
  menu[0].classList.add('menubar-a-hover');
  spans[0].classList.add("menu-bar-a-span");
})
window.addEventListener('scroll',()=>{
  Header_scrolling();
  projects_scrolling();
  skills_scrolling();
  about_me_scrolling();
  contact_me_scrolling();
  if(window.scrollY === 0){
    menu[0].classList.add('menubar-a-hover');
    spans[0].classList.add("menu-bar-a-span");
  }

})




const scrollNavbar= ()=>{

}

const Header_scrolling= ()=>{
  if(window.scrollY > Offset_headerSection && window.scrollY < Offset_about_me){
    menu[0].classList.add('menubar-a-hover');
    spans[0].classList.add("menu-bar-a-span");
  }else {
    menu[0].classList.remove("menubar-a-hover")
    spans[0].classList.remove("menu-bar-a-span");
    spans[0].classList.add("menu-bar-a-span-off");
  }
}
const scrollingY = window.scrollY;

const about_me_scrolling= ()=>{
  if(window.scrollY >= Offset_about_me  && window.scrollY < Offset_skills ){
    menu[1].classList.add('menubar-a-hover');
    spans[1].classList.add("menu-bar-a-span");
    console.log('didi shod')

  }else{
    menu[1].classList.remove("menubar-a-hover")
    spans[1].classList.add("menu-bar-a-span-off");
    spans[1].classList.remove("menu-bar-a-span");

  }
}


const skills_scrolling= ()=>{
  if(window.scrollY >= Offset_skills && window.scrollY < Offset_projects ){
    menu[2].classList.add('menubar-a-hover');
    spans[2].classList.add("menu-bar-a-span");

  }else {
    menu[2].classList.remove('menubar-a-hover')
    spans[2].classList.add("menu-bar-a-span-off");
    spans[2].classList.remove("menu-bar-a-span");

  }
}


const projects_scrolling= ()=>{
  if(window.scrollY  >= Offset_projects && window.scrollY < Offset_contact_me ){
    menu[3].classList.add('menubar-a-hover');
    spans[3].classList.add("menu-bar-a-span");

  }else{
    menu[3].classList.remove('menubar-a-hover')
    spans[3].classList.add("menu-bar-a-span-off");
    spans[3].classList.remove("menu-bar-a-span");

  }
}

const contact_me_scrolling= ()=>{
  if(window.scrollY >= Offset_contact_me ){
    menu[4].classList.add('menubar-a-hover');
    spans[4].classList.add("menu-bar-a-span");

  }else{
    menu[4].classList.remove('menubar-a-hover')
    spans[4].classList.add("menu-bar-a-span-off");
    spans[4].classList.remove("menu-bar-a-span");

  }
}
