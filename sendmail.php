<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "elite-admin@internet-elite.pl";

    // Temat wiadomości
    $subject = "Wiadomość z formularza kontaktowego";

    // Treść wiadomości
    $email_body = "Imię: $name\n" . "Email: $email\n" . "Wiadomość:\n$message";

    // Nagłówki
    $headers = "From: $email";

    // Wysyłanie maila
    mail($to, $subject, $email_body, $headers);

}
?>
