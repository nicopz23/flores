<?php
session_start();
if (isset($_POST["nombre"]) && isset($_POST["fecha"])) {
    $nombre = strtolower(trim($_POST["nombre"]));
    $fecha = $_POST["fecha"];

    // Cambia la fecha de nacimiento al formato correcto.
    if ($nombre= "karol ruiz ortega" or $nombre == "karol johanna ruiz ortega" && $fecha == "02/01/2006" ) {
        $_SESSION["miamor"] = "Tu eres el amor de mi vida, sigue";
        $mostrarFormulario = false;
        unset($_SESSION["error"]); // Borrar el mensaje de error si existe
    } else {
        $_SESSION["error"] = "Salte de la página del amor de mi vida";
        unset($_SESSION["miamor"]); // Borrar el mensaje de error si existe
        $mostrarFormulario = false;
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        @keyframes gradientAnimation {
            0% {
                background-color: #ffccbc;
            }

            50% {
                background-color: #ffab91;
            }

            100% {
                background-color: #ffccbc;
            }
        }

        body {
            animation: gradientAnimation 10s infinite alternate; /* Cambia suavemente entre colores */

            /* Degradado de coral pálido a un tono coral más intenso */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        }

        .form-container {
            background: linear-gradient(145deg, #ffffff, #f0f0f0);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            display: <?php echo isset($mostrarFormulario) && !$mostrarFormulario ? 'none' : 'block'; ?>;
            max-width: 400px;
            width: 100%;
        }

        .message,
        .error-message {
            background: linear-gradient(145deg, #ffffff, #f0f0f0);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            text-align: center;
            font-size: 2rem;
            color: #007bff;
            max-width: 400px;
            width: 100%;
        }

        .error-message {
            color: #e74c3c;
            font-size: 1.5rem;
        }

        .form-title {
            margin-bottom: 1rem;
            color: #007bff;
            text-align: center;
            font-size: 1.8rem;
            font-weight: bold;
        }

        label {
            color: #333;
            font-weight: bold;
            margin-top: 1rem;
        }

        .form-control {
            border-radius: 8px;
            border: 1px solid #ccc;
            padding: 0.8rem;
            font-size: 1rem;
        }

        .btn {
            background-color: #007bff;
            border: none;
            padding: 0.8rem;
            font-size: 1rem;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .message,
        .error-message {
            transition: all 0.3s ease-in-out;
            opacity: <?php echo isset($_SESSION["miamor"]) || isset($_SESSION["error"]) ? '1' : '0'; ?>;
            transform: <?php echo isset($_SESSION["miamor"]) || isset($_SESSION["error"]) ? 'translateY(0)' : 'translateY(-20px)'; ?>;
        }
    </style>
</head>

<body>
    <?php if (isset($_SESSION["miamor"])): ?>
        <div class="message">
            <?php echo $_SESSION["miamor"]; ?>
        </div>
        <script>
            setTimeout(function() {
                window.location.href = 'logout.php';
            }, 5000);
        </script>
    <?php elseif (isset($_SESSION["error"])): ?>
        <div class="error-message">
            <?php echo $_SESSION["error"]; ?>
            <script>
                setTimeout(function() {
                    window.location.href = 'logout.php';
                }, 5000);
            </script>
        </div>
    <?php endif; ?>

    <div class="form-container">
        <h2 class="form-title text-center">Hola, llena el formulario por favor</h2>
        <form action="" method="post">
            <div class="form-group">
                <label for="nombre">Coloca tu nombre aquí debajo:</label>
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre completo en minúsculas" required>
            </div>
            <div class="form-group">
                <label for="fecha">Coloca debajo tu fecha de nacimiento:</label>
                <input type="text" class="form-control" name="fecha" id="fecha" placeholder="DD/MM/AA" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Enviar</button>
        </form>
    </div>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>