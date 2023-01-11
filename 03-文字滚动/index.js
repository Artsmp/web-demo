const list = document.querySelector('.list');
const container = document.querySelector('.container');

// 克隆第一个元素放到最后
list.appendChild(list.firstElementChild.cloneNode(true));

let curIdx = 0;
const itemHeight = 44;

let intervalId = null;
function animate() {
  intervalId = setInterval(() => {
    let from = curIdx * itemHeight;
    curIdx++;
    const to = curIdx * itemHeight;
    const totalDuration = 500;
    const duration = 10;
    const times = totalDuration / duration;
    // 每次滚动的距离
    const dis = (to - from) / times;
    const timerId = setInterval(() => {
      from += dis;
      if (from >= to) {
        clearInterval(timerId);
        if (curIdx === list.children.length - 1) {
          curIdx = 0;
          list.scrollTop = 0;
        }
      }
      list.scrollTop = from;
    }, duration);
  }, 2000);
}
animate();
// 鼠标进入时 暂停滚动
container.addEventListener('mouseenter', () => {
  console.log('mouseenter');
  clearInterval(intervalId);
});

// 鼠标离开后继续滚动
container.addEventListener('mouseleave', () => {
  console.log('mouseleave');
  animate();
});
