const toastBox = document.getElementById("toastBox");
const btn = document.querySelectorAll("button");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Success';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

const showToast = (msg, className) => {
  const toast = document.createElement("div");
  toast.classList.add("toast", className);
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  setInterval(() => {
    toast.remove();
  }, 6000);

  return toast;
};

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "Success") {
      showToast(successMsg,);
    } else if (e.target.innerText === "Error") {
      showToast(errorMsg, "error");
    } else if (e.target.innerText === "Invalid") {
      showToast(invalidMsg, "invalid");
    }
  });
});
