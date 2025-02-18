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
  const imagen = `../images/cards/${nombre}.png`      //se crea la ruta a la imagen
  cartas.push({nombre: nombre, valor: valor, imagen: imagen}) //se crea un objeto con las propiedades creadas y se agrega al array cartas.
   
  }
}
console.log(cartas)

/***************************************************************************** */
let firstCard = 10
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

const mensaje = document.querySelector('.mensaje')
document.querySelector('.jugar').addEventListener('click', () => {
  if(sum <= 20){
    mensaje.innerText = 'Desea otra carta?'
    
  }else if(sum === 21){
    message = 'has ganado!'
    hasBlackJack = true
  }else{
    message = 'has perdido'
    isAlive = false
  }
})