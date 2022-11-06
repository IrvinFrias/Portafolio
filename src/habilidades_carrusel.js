const carrusel = document.querySelector('.habilidades__cards');
const sections = document.querySelectorAll('.list__btn');




sections.forEach(( section, i) =>{
    section.addEventListener('click', ()=>{
        let position = i;
        console.log(i)

        carrusel.style.transform = `translateX(${(100/5)*-i}%`;





        /*Remuevo la clase active de todos los elementos*/
        sections.forEach( (section, i) =>{
            section.classList.remove('active');
        })
        /*Agrego la clase active al elemento clickeado*/
        sections[i].classList.add('active');
    })
});