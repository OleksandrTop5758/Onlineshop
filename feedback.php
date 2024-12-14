<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Отримання даних з форми
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $Surname = htmlspecialchars($_POST['question1']);

    
    // Створення змісту для запису в файл
    $content = "Ім'я: " . $name . "\n";
    $content .= "Електронна пошта: " . $email . "\n";
    $content .= "Пароль: " . $password . "\n";
    $content .= "Призвище: " . $Surname . "\n";
    $content .= "----------------------------------\n"; // Роздільник між відгуками
    
    // Визначення імені файлу (можна додати мітку часу або унікальний ID)
    $filename = "feedbacks" . time() . "_" . uniqid() . ".txt";
    
    // Створення файлу в папці "feedbacks" (переконайтесь, що папка існує)
    if (!file_exists('feedbacks')) {
        mkdir('feedbacks', 0777, true); // Створення папки, якщо її немає
    }
    
    // Запис у файл
    file_put_contents('feedbacks/' . $filename, $content, FILE_APPEND); // Збереження в конкретну папку
    
    echo "Дякуємо за ваш відгук!";
} else {
    echo "Будь ласка, заповніть форму.";
}
?>
