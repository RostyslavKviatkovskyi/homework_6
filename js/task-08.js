const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  // передаем ссылку на весь ДОМ элемент - на всю форму
  const formData = new FormData(event.currentTarget);

  const elements = event.currentTarget.elements;

  const email = elements.email.value;
  const password = elements.password.value;

  if (email === "" || password === "") {
    alert("Please, enter the data, Bro!");
  } else {
    formData.forEach(() => {
      // console.log({ email, password });

      return {
        email,
        password,
      };
    });
    loginFormEl.reset();
  }
  console.log({ email, password });
}
