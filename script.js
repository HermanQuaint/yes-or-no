const text = document.querySelector('.text');
const button = document.querySelector('.button');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const removeAnim = () => {
  text.classList.remove('anim');
}

const gen = () => {
  text.textContent = getRandomInt(2) ? 'yes' : 'no';
  text.classList.add('anim');
  window.setTimeout(removeAnim, 2000)
  button.disabled = true;
  setTimeout(function() { button.disabled = false }, 2000);
}

gen();

button.addEventListener('click', gen);

