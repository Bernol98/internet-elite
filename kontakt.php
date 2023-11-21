<!DOCTYPE html>
<html lang="en">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internet Elite</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: url("images/bg.webp") no-repeat center center fixed;
            background-size: cover;
        }

        .container {
            display: flex;
            flex-wrap: wrap; /* Dodane dla obsługi responsywności */
            justify-content: space-between; /* Dodane dla rozmieszczenia elementów na końcach */
            margin: auto;
            overflow: hidden;
        }

        .container h1 {
            font: times;
            font-size: xx-large;
            color: yellow;
            text-align: center;
            width: 100%; /* Dostosowane do responsywności */
        }
        form {
            background: #373737;
            padding: 20px;
            margin-top: 20px;
            border-radius: 4px;
            box-shadow: 0px 0px 10px 0px #000;
            color: #fff;
            width: 100%; /* Dostosowane do responsywności na telefonach */
        }
        .additional-info {
            background: #373737;
            padding: 20px;
            margin-top: 20px;
            border-radius: 4px;
            box-shadow: 0px 0px 10px 0px #000;
            color: #fff;
            width: 100%; /* Dostosowane do responsywności na telefonach */
        }

        @media (min-width: 768px) {
            form,
            .additional-info {
                width: 48%; /* Szerokość 48% na większych ekranach (komputer, laptop) */
            }
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
            border: 1px solid #555555;
            border-radius: 4px;
            box-sizing: border-box;
            background-color: #565656;
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
        .additional-info li {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            font-size: X-large
            
        }
        .naglowek {
            height: 150px;
            
        }
        .colorlib-navbar-brand {
            margin-left: 30vh;
        }
    </style>
</head>

<body>
<nav id="colorlib-main-nav" role="navigation">
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
        <div class="js-fullheight colorlib-table">
            <div class="colorlib-table-cell js-fullheight">
                <div class="row no-gutters">
                    <div class="col-md-12 text-center">
                        <h1 class="mb-4"><a href="index.html" class="logo">Internet Elite</a></h1>
                        <ul>
                            <li class="active"><a href="index.html"><span><small>01</small>Home</span></a></li>
                            <li><a href="kontakt.php"><span><small>02</small>Kontakt</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="naglowek">
        <header>
            <div class="container1">
                <div class="row">
                    <div class="col-md-12">
                        <div class="colorlib-navbar-brand">
                            <a class="colorlib-logo" href="index.html">
                                <span class="logo-img" style="background-image: url(images/logo_beta.png);"></span>
                            </a>
                        </div>
                        <nav class="desktop-menu">
                            <ul>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="kontakt.php">Kontakt</a></li>
                            </ul>
                        </nav>
                        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle Mobilemenu"><i></i></a>
                    </div>
          
                </div>
        
            </div>
      
        </header>
    </div>
    <div class="container">
        <form action="kontakt.php" method="post">
            <h1>Napisz do nas</h1>
            <label for="name">Imie i nazwisko:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Wyślij" name="button">
        </form>

        <div class="additional-info">
            <h1>ALBO</h1>
            <ul>
                <li>Napisz maila na adres:<a href="mailto:maksym@internet-elite.pl">maksym@internet-elite.pl</a></li>
                <li>Zadzwoń na numer: <a href="tel:+48 516 619 243">+48 516 619 243</a></li>
            </ul>
        </div>
    </div>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $message = isset($_POST["message"]) ? $_POST["message"] : "";
    $to = "elite-admin@internet-elite.pl";

    // Sprawdź, czy wymagane pola są ustawione
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Temat wiadomości
        $subject = "Wiadomość z formularza kontaktowego";

        // Treść wiadomości
        $email_body = "Imię: $name\n" . "Email: $email\n" . "Wiadomość:\n$message";

        // Nagłówki
        $headers = "From: $email";

        // Wysyłanie maila
        $mailSent = mail($to, $subject, $email_body, $headers);

        if ($mailSent) {
            echo "<p style='text-align: center; color: white;'>Mail wysłany pomślnie!</p> ";
        } else {
            echo "<p style='text-align: center; color: white;'>Wystąpił błąd podczas wysyłania maila.</p>";
        }
    } else {
        echo "<p style='text-align: center; color: white;'>Wypełnij wszystkie wymagane pola!</p>";
    }
}
?>



    <footer class="footer" style='margin-top: 19vh;'>
        <div class="logo">
            <a href="index.html"><img src="images/logo_beta.webp" alt="Logo" width="50" height="50"></a>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="kontakt.php">KONTAKT</a></li>
            </ul>
        </nav>
        <a href="tel:+48516619243" class="styled-button">Zadzwoń</a>
    </footer>
    <footer class="footer2" style='margin-top:0'>
        <p>INTERNET ELITE 2023</p>
    </footer>

</body>

</html>
