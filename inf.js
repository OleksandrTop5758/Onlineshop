const userData = {
    name: 'John',
    email: 'john@example.com',
    age: 30
};

// Збереження об'єкта як рядка
localStorage.setItem('user', JSON.stringify(userData));
// Отримання об'єкта
const savedData = localStorage.getItem('user');

if (savedData) {
    const user = JSON.parse(savedData); // Перетворюємо рядок у об'єкт
    console.log(user.name);  // 'John'
    console.log(user.email); // 'john@example.com'
} else {
    console.log('No data found in localStorage!');
}
const registrationData = localStorage.getItem('registrationData');

if (registrationData) {
    const user = JSON.parse(registrationData);
    console.log(`Hello, ${user.name} ${user.surname}!`); // Наприклад: Hello, John Smith!
} else {
    console.log('No registration data found.');
}
// Функція для збереження даних реєстрації в localStorage
function saveRegistrationData(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const name = document.querySelector('#register-form input[placeholder="John"]').value;
    const surname = document.querySelector('#register-form input[placeholder="Smith"]').value;
    const email = document.querySelector('#register-form input[placeholder="example@gmail.com"]').value;
    const password = document.querySelector('#register-form input[type="password"]:nth-of-type(1)').value;

    const newUser = {
        name,
        surname,
        email,
        password,
        registeredAt: new Date().toISOString(),
    };

    const existingData = JSON.parse(localStorage.getItem('usersData')) || [];
    existingData.push(newUser);
    localStorage.setItem('usersData', JSON.stringify(existingData));

    alert('Registration data saved!');
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
