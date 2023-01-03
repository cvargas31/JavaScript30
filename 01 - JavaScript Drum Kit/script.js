// Array de todos los keys
const keys = [...document.querySelectorAll('.key')]
// Funcion para darle play al sonido
const playSound = (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  // pera evitar errores con los keys que no tienen sonido
  if(!audio) return

  // class para el border color
  key.classList.add('playing')
  audio.currentTime = 0
  audio.play()
}

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// Cuando se remueva la propiedad transition, ejecutamos funcion para quitar la class playing
keys.forEach(key => key.addEventListener('transitionend',removeTransition ))

window.addEventListener("keypress", (e) => {
  playSound(e)
});
