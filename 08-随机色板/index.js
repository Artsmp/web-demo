const refreshBtn = document.querySelector('.refreshBtn'),
  container = document.querySelector('.container');

const maxPaletteNum = 12;

refreshBtn.addEventListener('click', randomColor);

function randomColor() {
  container.innerHTML = '';
  for (let i = 0; i < maxPaletteNum; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, '0').toUpperCase()}`;
    const color = document.createElement('div');
    color.classList.add('color');
    color.innerHTML = `
      <div class="rect" style="background: ${randomHex}"></div>
      <div class="hex">${randomHex}</div>
    `;
    color.addEventListener('click', () => copyColor(color, randomHex));
    container.append(color);
  }
}

function copyColor(elem, hexVal) {
  navigator.clipboard.writeText(hexVal).then(() => {
    elem.lastElementChild.textContent = 'Copied !';
    setTimeout(() => {
      elem.lastElementChild.textContent = hexVal;
    }, 1000);
  });
}

randomColor();
