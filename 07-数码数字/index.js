let digitalMap = {
  0: [0, 1, 3, 4, 5, 6],
  1: [1, 3],
  2: [0, 1, 2, 4, 5],
  3: [0, 1, 2, 3, 4],
  4: [1, 2, 3, 6],
  5: [0, 2, 3, 4, 6],
  6: [0, 2, 3, 4, 5, 6],
  7: [0, 1, 3],
  8: [0, 1, 2, 3, 4, 5, 6],
  9: [0, 1, 2, 3, 4, 6],
};

const segments = document.querySelectorAll('.digital>div');

let count = 0;
setInterval(() => {
  count++;
  if (count > 9) {
    count = 0;
  }
  changeDigital(count);
}, 1500);

function changeDigital(count) {
  console.log(digitalMap[count]);
  Array.from(segments).forEach((seg, idx) => {
    seg.classList.add('hide');
  });
  digitalMap[count].forEach((index) => {
    segments[index].classList.remove('hide');
  });
}

changeDigital(0);
