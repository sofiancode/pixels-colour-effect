const container = document.getElementById('container');

// random colour array
const colors = ['#e74c3c', '#8e44ad', '#2498db', '#e67e22', '#2ecc71'];

// number of squares to be generated
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square)
}

//set color to square when however

let setColor = (square) => {
  const color = getRandomColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// remove background color of square when mouse out
let removeColor = (square) => {
  square.style.background = `#1d1d1d`;
  square.style.boxShadow = `0 0 2px #000`
}

// get a random color from colors array
let getRandomColor =() => {
  return colors[Math.floor(Math.random() * colors.length)]
}