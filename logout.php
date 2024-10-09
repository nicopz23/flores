<?php
session_start();
session_unset();
session_destroy();
header("Location: ./"); // Redirige al usuario de vuelta a la página principal
exit();
