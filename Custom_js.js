const mybutton = document.querySelector('.to-the-top-icon');
const menu = document.querySelectorAll('.menu a');
const menuSpan = document.querySelector('.menu a span');

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

window.addEventListener('scroll',()=>{
  Header_scrolling();
  projects_scrolling();
  skills_scrolling();
  about_me_scrolling();
  contact_me_scrolling();
})


const Header_scrolling= ()=>{
  if(window.scrollY >= Offset_headerSection){
    menu[0].classList.add('menubar-a-hover');
    menuSpan.style.display="block";

  }else if(window.scrollY <= Offset_headerSection){
    menu[0].classList.remove('menubar-a-hover')
    menuSpan.style.display="none"
  }
}


const about_me_scrolling= ()=>{
  if(window.scrollY >= Offset_about_me){
    menu[1].classList.add('menubar-a-hover');
    menuSpan.style.display="block"

  }else if(window.scrollY <= Offset_about_me){
    menu[1].classList.remove('menubar-a-hover')
    menuSpan.style.display="none"
  }
}


const skills_scrolling= ()=>{
  if(window.scrollY >= Offset_skills){
    menu[2].classList.add('menubar-a-hover');
    menuSpan.style.display="block"

  }else if(window.scrollY <= Offset_skills){
    menu[2].classList.remove('menubar-a-hover')
    menuSpan.style.display="none"
  }
}


const projects_scrolling= ()=>{
  if(window.scrollY >= Offset_projects){
    menu[3].classList.add('menubar-a-hover');
    menuSpan.style.display="block"

  }else if(window.scrollY <= Offset_projects){
    menu[3].classList.remove('menubar-a-hover')
    menuSpan.style.display="none"
  }
}

const contact_me_scrolling= ()=>{
  if(window.scrollY >= Offset_contact_me){
    menu[4].classList.add('menubar-a-hover');
    menuSpan.style.display="block"

  }else if(window.scrollY <= Offset_contact_me){
    menu[4].classList.remove('menubar-a-hover')
    menuSpan.style.display="none"
  }
}
