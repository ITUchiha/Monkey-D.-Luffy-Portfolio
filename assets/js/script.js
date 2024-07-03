
let nav_menu=document.querySelector('#nav-menu');
const hide_menu=()=>nav_menu.classList.remove('show-menu');
const show_menu=()=>nav_menu.classList.add('show-menu');
// show menu
document.querySelector('#nav-toggle').addEventListener('click',show_menu)
//hide menu
document.querySelector('#nav-close').addEventListener('click',hide_menu)
//remove menu on click of a menu option
document.querySelectorAll('.nav__link').forEach(nav__link=>{
    nav__link.addEventListener('click',hide_menu)
})



//slider
let swiperProjects = new Swiper('.projects__container',{ 
    loop:true,
    spaceBetween: 24,
    
    navigation: {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
    },
    mousewheel:true,
    keyboard:true,
})


//---------------swiper testimoals------------

let swiperTestimonial = new Swiper(".Testimonial__container ", {
    loop:true,
    spaceBetween: 24,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:".Testimonial__container .swiper-pagination",
    },
    mousewheel:true,
    keyboard:true,
  });

// ----------------scroll-sections-active-link-------------------
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// -----------------show-scroll-up------------------------

const scrollUp = () =>{
	const scrollUp = document.querySelector('.scrollup')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ------------dark-light-theme-----------------
let body=document.querySelector('body');
if(!localStorage.getItem('themeState')){
    themeState = 'light-theme';
    localStorage.setItem('themeState','light-theme');
    body.className=themeState;
}else{
    themeState = localStorage.getItem('themeState')
    console.log(themeState);
    body.className=themeState;
}

let theme=document.querySelector('#theme-button')
const change=()=>{
    if(themeState=='light-theme'){
        themeState='dark-theme'
        localStorage.setItem('themeState','dark-theme');
        body.classList.add(themeState)
        theme.classList.remove('ri-moon-line')
        theme.classList.add('ri-sun-line')
    }else{
        body.classList.remove(themeState)
        themeState='light-theme'
        localStorage.setItem('themeState','light-theme');
        theme.classList.add('ri-moon-line')
        theme.classList.remove('ri-sun-line')
    }
}
document.querySelector('.change-theme').addEventListener('click',change)


console.log();
// change background header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll reveal animation
const sr = ScrollReveal({
    origin : 'top',
    distance: '60px',
    duration : 2500,
    delay: 400,
    //reset : true /* Animations repeat */
})


sr.reveal('.home__data , .projects__container, .Testimonial__container, .footer__container')
sr.reveal('.home__info div',{delay : 600, origin: 'bottom',interval:100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)',{origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)',{origin: 'right'})
sr.reveal('.qualification__content, .services__card',{interval:100})
