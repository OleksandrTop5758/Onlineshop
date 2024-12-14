function showRegisterForm() {
   document.getElementById('register-form').style.display = 'block';
   document.getElementById('login-form').style.display = 'none';
   document.querySelector('.singup-tab').classList.add('active');
   document.querySelector('.login-tab').classList.remove('active');
}

function showLoginForm() {
   document.getElementById('register-form').style.display = 'none';
   document.getElementById('login-form').style.display = 'block';
   document.querySelector('.login-tab').classList.add('active');
   document.querySelector('.singup-tab').classList.remove('active');
}

const signupTab = document.querySelector('.singup-tab');
const loginTab = document.querySelector('.login-tab');

signupTab.addEventListener('click', () => {
   signupTab.classList.add('active');
   loginTab.classList.remove('active');
});

loginTab.addEventListener('click', () => {
   loginTab.classList.add('active');
   signupTab.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
   const signUpTab = document.querySelector(".singup-tab");
   const loginTab = document.querySelector(".login-tab");
   const registerForm = document.getElementById("register-form");
   const loginForm = document.getElementById("login-form");

   function showRegisterForm() {
      loginTab.classList.remove("active");
      loginTab.style.color = "rgba(0, 0, 0, 0.5)";
      loginTab.style.borderBottom = "none";

      signUpTab.classList.add("active");
      signUpTab.style.color = "#000000";
      signUpTab.style.borderBottom = "2px solid #000000";

      registerForm.style.display = "block";
      loginForm.style.display = "none";
   }

   function showLoginForm() {
      signUpTab.classList.remove("active");
      signUpTab.style.color = "rgba(0, 0, 0, 0.5)";
      signUpTab.style.borderBottom = "none";

      loginTab.classList.add("active");
      loginTab.style.color = "#000000";
      loginTab.style.borderBottom = "2px solid #000000";

      loginForm.style.display = "block";
      registerForm.style.display = "none";
   }

   signUpTab.addEventListener("click", showRegisterForm);
   loginTab.addEventListener("click", showLoginForm);
});

// Функція для збереження даних реєстрації
function saveRegistrationData(event) {
   event.preventDefault(); // Запобігаємо перезавантаженню сторінки

   // Отримуємо введені користувачем дані
   const name = document.querySelector('#register-form input[placeholder="John"]').value;
   const surname = document.querySelector('#register-form input[placeholder="Smith"]').value;
   const email = document.querySelector('#register-form input[placeholder="example@gmail.com"]').value;
   const password = document.querySelector('#register-form input[type="password"]:nth-of-type(1)').value;

   // Зчитуємо існуючі дані з localStorage
   const existingData = JSON.parse(localStorage.getItem('usersData')) || []; // Якщо даних немає, використовуємо порожній масив

   // Перевіряємо, чи існує користувач з таким email
   const existingUserIndex = existingData.findIndex(user => user.email === email);

   if (existingUserIndex !== -1) {
       // Якщо користувач з таким email є, оновлюємо його дані
       existingData[existingUserIndex] = {
           name,
           surname,
           email,
           password,
           registeredAt: new Date().toISOString(), // Оновлюємо час реєстрації
       };
       alert('User data updated!');
   } else {
       // Якщо користувача з таким email немає, додаємо нового
       const newUser = {
           name,
           surname,
           email,
           password,
           registeredAt: new Date().toISOString(),
       };
       existingData.push(newUser);
       alert('Registration data saved!');
   }

   // Зберігаємо оновлений масив назад у localStorage
   localStorage.setItem('usersData', JSON.stringify(existingData));
}

// Функція для перевірки даних входу
function checkLoginData(event) {
   event.preventDefault(); // Запобігаємо перезавантаженню сторінки

   const email = document.querySelector('#login-form input[placeholder="example@gmail.com"]').value;
   const password = document.querySelector('#login-form input[type="password"]').value;

   const usersData = JSON.parse(localStorage.getItem('usersData')) || [];

   const user = usersData.find(user => user.email === email && user.password === password);

   if (user) {
       alert(`Welcome, ${user.name} ${user.surname}!`);
       window.location.href = 'index.html'; // Перехід на головну сторінку
   } else {
       alert('Invalid email or password. Please try again.');
   }
}

// Прив'язуємо функції до кнопок
const registerForm = document.querySelector('#register-form form');
if (registerForm) {
   registerForm.addEventListener('submit', saveRegistrationData);
}

const loginForm = document.querySelector('#login-form form');
if (loginForm) {
   loginForm.addEventListener('submit', checkLoginData);
}
