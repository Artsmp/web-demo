const popup = document.querySelector('.popup'),
  popupTitle = popup.querySelector('.title'),
  popupDesc = popup.querySelector('.desc'),
  popupIcon = popup.querySelector('.icon i'),
  reconnectBtn = popup.querySelector('.reconnect');

let isOnline = true,
  timer = 10,
  intervalId = null;

function changePopupState() {
  if (isOnline) {
    popupIcon.className = 'uil uil-wifi';
    popupTitle.textContent = '连接成功！';
    popupDesc.innerHTML = '您的网络已成功连接！';
    popup.classList.add('online');
    const timeoutId = setTimeout(() => {
      popup.classList.remove('show');
      clearTimeout(timeoutId);
    }, 2000);
  } else {
    popup.classList.remove('online');
    popup.classList.add('show');
    popupIcon.className = 'uil uil-wifi';
    popupTitle.textContent = '失去连接！';
    popupDesc.innerHTML = `您的网络已失去连接。将会在<b>${timer}s</b>后自动进行重试！`;
    const time = popupDesc.querySelector('b');
    intervalId = setInterval(() => {
      time.textContent = `${--timer}s`;
      if (timer == 0) {
        clearInterval(intervalId);
        timer = 10;
        checkConnection();
      }
    }, 1000);
  }
}

const checkConnection = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.status >= 200 && response.status < 300) {
      isOnline = true;
    } else {
      isOnline = false;
    }
  } catch (error) {
    isOnline = false;
    popup.classList.add('show');
  } finally {
    changePopupState();
  }
};

setInterval(() => isOnline && checkConnection(), 3000);

reconnectBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  timer = 10;
  checkConnection();
});
