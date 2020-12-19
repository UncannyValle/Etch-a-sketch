//Etch-a-Sketch logic
const grid = document.querySelector("#container");
const reset = document.querySelector("#reset");
const width = document.querySelector("#width");
let squares;
let wide = 16;
//Creates the 256 square grid
const removeOldSquares = () => {
  const oldSquare = document.querySelectorAll(".square");
  oldSquare.forEach((x) => {
    x.remove();
  });
};

const makeGrid = () => {
  let i = 1;
  if (wide <= 100) {
    do {
      if (i <= Math.pow(wide, 2)) {
        const square = document.createElement("div");
        square.id = `square${i}`;
        square.classList.add("square");
        square.style.width = `${100 / wide}%`;
        grid.appendChild(square);
        i++;
      }
    } while (i <= Math.pow(wide, 2));
  }
  squares = document.querySelectorAll(".square");

  const addGreen = (pixel) => {
    pixel.target.classList.add("green");
  };
  squares.forEach((square) => {
    square.addEventListener("mouseover", addGreen);
  });
};
makeGrid();

//reset button
const resetAll = () => {
  squares.forEach((x) => {
    x.classList.remove("green");
  });
};

reset.addEventListener("click", resetAll);

//Change the grid width
width.addEventListener("click", () => {
  resetAll();
  removeOldSquares();
  wide = Number(prompt("How wide should the grid be? 1-100"));
  makeGrid();
});
