$(document).ready(function () {
  $("#btnSubmit").click(function (e) {
    e.preventDefault();
    if (this.form.reportValidity()) {
      retrieveData();
    }
  });
});

const retrieveData = async () => {
  let message = document.getElementById("message").value;
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  await fetch("http://localhost:5000/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
      subject: subject,
    }),
  });
};
