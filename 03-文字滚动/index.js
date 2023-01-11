const list = document.querySelector('.list');

// 克隆第一个元素放到最后
list.appendChild(list.firstElementChild.cloneNode(true));

let curIdx = 0;
const itemHeight = 44;
setInterval(() => {
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
