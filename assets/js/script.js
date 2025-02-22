const cartas = []  //array vacío que recibe las cartas
const palos = ["c", "d", "p", "t"]    //array con los 4 palos de la baraja

for(const palo of palos){         //se anidan 2 bucles para iterar sobre los palos y los números
  for(let i = 1; i <= 13; i++){
    const nombre = `${palo}${i}`    //se crea el nombre de la cartas
    let valor = i
  
    if(i === 1){
      valor = 11
    }else if(i > 10){             //se crean los valores
      valor = 10
    }
  const imagen = `assets/images/cards/${nombre}.png`      //se crea la ruta a la imagen
  cartas.push({nombre: nombre, valor: valor, imagen: imagen}) //se crea un objeto con las propiedades creadas y se agrega al array cartas.
   
  }
}
console.log(cartas)

/***************************************************************************** */
/* let firstCard = 10
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
const mensaje = document.querySelector('.mensaje')
const suma = document.querySelector('.suma')
 */


/*   if(sum <= 20){
  suma.innerText = sum     
  }else if(sum === 21){
    message = 'has ganado!'
    hasBlackJack = true
  }else{
    message = 'has perdido'
    isAlive = false
  } */

    const espacioJugador = document.querySelector('.jugador')


    const pedirOtraCarta = () => {
      const nuevaCartaJugador = repartir()
      const imagen1Jugador = document.createElement('img')
      imagen1Jugador.src = nuevaCartaJugador.imagen
      imagen1Jugador.alt = nuevaCartaJugador.nombre
      espacioJugador.appendChild(imagen1Jugador)
      return nuevaCartaJugador
    
    }
    

const comenzarJuego = () =>{
  barajar(cartas)

  const carta1Jugador = repartir()
  const carta2Jugador = repartir()
  const carta1Casa = repartir()
  const carta2Casa = repartir()

  /* jugador */

 
  espacioJugador.innerHTML = ''   //se limpia el espacio

  const imagen1Jugador = document.createElement('img')
  imagen1Jugador.src = carta1Jugador.imagen
  imagen1Jugador.alt = carta1Jugador.nombre
  espacioJugador.appendChild(imagen1Jugador)

  const imagen2Jugador = document.createElement('img')
  imagen2Jugador.src = carta2Jugador.imagen
  imagen2Jugador.alt = carta2Jugador.nombre
  espacioJugador.appendChild(imagen2Jugador)

  /* casa */

  const espacioCasa = document.querySelector('.casa')
  espacioCasa.innerHTML = ''   //se limpia el espacio

  const imagen1Casa = document.createElement('img')
  imagen1Casa.src = carta1Casa.imagen
  imagen1Casa.alt = carta1Casa.nombre
  espacioCasa.appendChild(imagen1Casa)

  const imagen2Casa = document.createElement('img')
  imagen2Casa.src = carta2Casa.imagen
  imagen2Jugador.alt = carta2Casa.nombre
  espacioCasa.appendChild(imagen2Casa)

  const cartasJugador = [carta1Jugador, carta2Jugador]
  const cartasCasa = [carta1Casa, carta2Casa]

  valorJugador = calculoValor(cartasJugador)
  valorCasa = calculoValor(cartasCasa)
  
  totalJugador.innerText = valorJugador
  totalCasa.innerText = valorCasa
  contadorTitulo.forEach(titulo => {
    titulo.classList.add('active')

    
  })

  
/*   if(sum <= 20){
  suma.innerText = sum     
  }else if(sum === 21){
    message = 'has ganado!'
    hasBlackJack = true
  }else{
    message = 'has perdido'
    isAlive = false
  } */

    /* funcion pedir carta o pasar*/

    if(valorCasa < 21 && valorJugador < 21){
      mostrarBotones()
    }
    else if(valorCasa === 21){
      /*mensaje, 'la casa gana, has perdido' */
    }
    else if(valorJugador === 21){
      /*mensaje 'has ganado!' */
    }

  
}

/******* BARAJAR *******/

const barajar = (cartas) =>{
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));      //se usa el algoritmo de baraje de Fisher-Yates
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
}


/***** REPARTIR *******/

const repartir = () => {              
if(cartas.length === 0){                   //no quedan carta en el mazo   
  return null
}
const indice = Math.floor(Math.random() * cartas.length)
const carta = cartas[indice]        //elige una carta y la elimina del mazo
cartas.splice(indice, 1)
return carta
}

/***** MOSTRAR BOTONES  *******/

const mostrarBotones = () =>{
  const pedirCarta = document.querySelector('.pedir')
  pedirCarta.classList.add('active')
  const pasarTurno = document.querySelector('.pasar')
  pasarTurno.classList.add('active')
}



const pasarTurno = () => {

}

/****  CALCULAR VALOR *****/ 

let valorCasa = 0
let valorJugador = 0

const totalCasa = document.querySelector('.total-casa')
const totalJugador = document.querySelector('.total-jugador')
const contadorTitulo = document.querySelectorAll('.contador-titulo')

const calculoValor = (mano) => {
  let valor = 0
  let ases = 0

  for(const carta of mano){
    valor += carta.valor
    if(carta.valor === 11){
      ases++
    }
  }
  while(valor > 21 && ases > 0){
    valor -= 10
    ases--

  }
  return valor
}


document.querySelector('.jugar').addEventListener('click',comenzarJuego)
document.querySelector('.pedir').addEventListener('click', pedirOtraCarta)
document.querySelector('.pasar').addEventListener('click', pasarTurno)



