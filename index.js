const navigation = document.querySelector('.navigation');
const firstSection = document.querySelector('.sections__block_one');
const section = document.querySelector('.sections');
const slider =  document.getElementById("myRange");
const input =  document.getElementById("myRange");
const horSlider = document.querySelector('.sections__block_horizont');
navigation.firstElementChild.classList.add('navigation__dots_active');

function activeNavigation(event) {
    let scroll = Math.floor(firstSection.getBoundingClientRect().top);
    if (scroll > -756 / 2) {
        navigation.firstElementChild.nextElementSibling.classList.remove('navigation__dots_active');
        navigation.firstElementChild.classList.add('navigation__dots_active');
    } else if (scroll <= -756 / 2 && scroll > -1000) {
        navigation.firstElementChild.classList.remove('navigation__dots_active');
        navigation.lastElementChild.classList.remove('navigation__dots_active');
        navigation.firstElementChild.nextElementSibling.classList.add('navigation__dots_active');
    } else if (scroll <= -1000) {
        navigation.firstElementChild.classList.remove('navigation__dots_active');
        navigation.firstElementChild.nextElementSibling.classList.remove('navigation__dots_active');
        navigation.lastElementChild.classList.add('navigation__dots_active');
    }
}



let scrollSlide = 0;
slider.oninput = function() {
    let value = parseInt(input.value)
    if(scrollSlide < value) {
        horSlider.scrollBy({
            left: 1000,
            behavior: "smooth"
        });
    } else if (scrollSlide > value){
        horSlider.scrollBy({
            left: -1000,
            behavior: "smooth"
        });
    }
    scrollSlide = value;
}

section.addEventListener('scroll', activeNavigation);
document.addEventListener('click', oninput)



