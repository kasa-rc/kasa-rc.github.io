<?php
    $servidor   ="localhost";
    $usuario    ="root";
    $clave      ="";
    $basedatos  ="alumnos";

    $conexion = mysqli_connect($servidor,$usuario,$clave,$basedatos);

    mysqli_set_charset($conexion,"utf8");
?>
