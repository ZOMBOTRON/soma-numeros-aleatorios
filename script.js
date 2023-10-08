/**@type{HTMLCanvasElement}*/
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const grid = new Array(width);
const qtd_num =
  Number(prompt('Quantos números aleatorios você deseja somar?')) || 2;

for (let i = 0; i < grid.length; i++) {
  grid[i] = canvas.height - 1;
  ctx.fillRect(i, canvas.height - 1, 1, 1);
}

function xNumRandom() {
  return Math.floor((Math.random() * width) / qtd_num);
}

(function Draw() {
  let num = 0;
  for (let i = 0; i < qtd_num; i++) {
    num += xNumRandom();
  }
  grid[num]--;
  ctx.fillRect(num, grid[num], 1, 1);
  requestAnimationFrame(Draw);
})();
