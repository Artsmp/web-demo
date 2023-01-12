const btns = document.querySelectorAll('.buttons .btn');
const notification = document.querySelector('.notification');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    createToast(btn.id);
  });
});

function createToast(id) {
  console.log(id);
  const { icon, text } = toastDetails[id];
  const toast = document.createElement('li');
  toast.className = `toast ${id}`;
  toast.innerHTML = `
  <div class="column">
    <i class="uil ${icon}"></i>
    <span>${text}</span>
  </div>
  <i class="uil uil-times" onclick="removeToast(this.parentElement)"></i>
  `;
  notification.append(toast);
  const timerId = setTimeout(() => {
    clearTimeout(timerId);
    removeToast(toast);
  }, toastDetails.timeout);
}

const toastDetails = {
  timeout: 5000,
  success: {
    icon: 'uil-check-circle',
    text: 'Success: This is a success toast.',
  },
  error: {
    icon: 'uil-times-circle',
    text: 'Error: This is a error toast.',
  },
  info: {
    icon: 'uil-info-circle',
    text: 'Info: This is a info toast.',
  },
  warning: {
    icon: 'uil-exclamation-octagon',
    text: 'Warning: This is a warning toast.',
  },
};

function removeToast(toast) {
  toast.classList.add('hide');
  const timerId = setTimeout(() => {
    clearTimeout(timerId);
    toast.remove();
  }, 1000);
}
