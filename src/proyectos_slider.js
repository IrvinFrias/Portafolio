const proyectosCards = document.querySelector('.proyectos__cards'); /*deslizar*/
const symboloRight = document.querySelector('.material-symbols-outlined.right');
const symboloLeft = document.querySelector('.material-symbols-outlined.left');
const puntos = document.querySelectorAll('.proyectos__punto');
class Integer{
      static number;
}


//obtengo la posición del punto.
puntos.forEach((punto,i)=>{
    if(punto.className === "proyectos__punto active"){
        Integer.number = i;
    }
})

const render = (number) => {
    puntos.forEach((punto)=>{
        punto.classList.remove('active');
    })
    puntos[number].classList.add('active');
}

const deslizarRight = ()=>{
    if(Integer.number >= 0 && Integer.number <puntos.length-1){
        Integer.number++;
        proyectosCards.style.transform = `translateX(${(100/((puntos.length-1)*2))*-Integer.number}%`;
    }
    render(Integer.number);


}

const deslizarLeft = ()=>{
    if(Integer.number > 0 && Integer.number < puntos.length){
        Integer.number--;
        proyectosCards.style.transform = `translateX(${(100/((puntos.length-1)*2))*-Integer.number}%`;
    }
    render(Integer.number);
}


/*Escuchadores de eventos
*
* */
symboloRight.addEventListener('click', deslizarRight);
symboloLeft.addEventListener('click', deslizarLeft);


