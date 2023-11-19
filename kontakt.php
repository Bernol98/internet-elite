<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: url("images/bg.png") no-repeat center center fixed;
            background-size: cover;
        }

        .container {
            width: 50%;
            margin: auto;
            overflow: hidden;
        }

        form {
            background: #706e6e;
            padding: 30px;
            margin-top: 50px;
            border-radius: 4px;
            box-shadow: 0px 0px 10px 0px #000;
        }

        label {
            display: block;
            font-size: 1.2em;
            margin-bottom: 10px;
        }

        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 20px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            background-color: #a5a5a5;
        }

        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: rgb(218, 218, 3);
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: rgb(199, 137, 4);
            transition: 0.5s;
        }
    </style>
</head>



    <div class="container">
        <form action="kontakt.php" method="post">
            <label for="name">Imie i nazwisko:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Submit" name="button">
        </form>
    </div>

</body>

</html>


</body>

</html>
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
    echo "<p style='text-align: center; color: white;'>Mail wysłany pomślnie!</p> ";

}
?>
<footer>
  <div class="logo">
    <a href="index.html"><img src="images/logo_beta.png" alt="Logo" width="50" height="50"></a>
  </div>
  <nav>
    <ul>
      <li><a href="index.html">HOME</a></li>
      <li><a href="kontakt.php">KONTAKT</a></li>
    </ul>
  </nav>
  <a href="tel:+48516619243" class="styled-button">Zadzwoń</a>
</footer>
<footer class="footer2">
  <p>INTERNET ELITE 2023</p>
</footer>