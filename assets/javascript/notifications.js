let notification = document.querySelector(".notifications");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        showSuccessToast();
      } else {
        showErrorToast();
      }
    })
    .catch((error) => {
      showErrorToast();
      console.error("Error:", error);
    });
});

function showSuccessToast() {
  let type = "";
  let icon = "fa-solid fa-circle-check";
  let title = "نجاح";
  let text = "تم إرسال الرسالة بنجاح!";
  createtoast(type, icon, title, text);
}

function showErrorToast() {
  let type = "";
  let icon = "fa-solid fa-exclamation-triangle";
  let title = "فشل";
  let text = "لقد فشل الارسال الرسالة!!";
  createtoast(type, icon, title, text);
}

function createtoast(type, icon, title, text) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
        <div class="toast">
  <i class="${icon}"></i>
  <div class="content">
    <div class="title">${title}</div>
    <span>${text}</span>
  </div>
  <i class="fa-solid fa-xmark close" onclick="(this.parentElement).remove()"></i>
  <div class="progress"></div>
</div>`;

  notification.appendChild(newToast);
  newToast.timeout = setTimeout(() => newToast.remove(), 5000);
}
