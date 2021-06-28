<?php


if(isset($_POST['accion'])){

	include "conexion_KRC.php";

	switch ($_POST['accion']) {
		case 'read':
			ActionReadPHP($conexion);
			break;
		case 'update':
			ActionUpdatePHP($conexion);
			break;
		case 'create':
			ActionCreatePHP($conexion);
			break;
		case 'delete':
			ActionDeletePHP($conexion);
			break;
		default:
			$Respuesta["estado"]=0;
			$Respuesta["mensaje"]="Accion no valida";
			echo json_encode($Respuesta);
			break;
	}

}else{
	$Respuesta["estado"]=0;
	$Respuesta["mensaje"]="Faltan Parametros";
	echo json_encode($Respuesta);
}

function ActionCreatePHP($conexion){

	$nombre 		= $_POST['nombre'];
	$programa 	= $_POST['programa'];

	$Query = "INSERT INTO alta_alumnos (id, programa, nombre) VALUES (NULL, '".$programa."',  '".$nombre."')";

	//Esta intrución crea el registro en la vase de datos
	//Numero de filas (registros) adectados =1
	$resultado = mysqli_query($conexion,$Query);

	if($resultado>=1)
	{
		$respuesta['estado']	 = 1; //Para el programador
		$respuesta['mensaje']	 = "El registro se creo con Exito";// para el alumno o persona encargada de las electuvas (usuarios)
		$respuesta['id']	 	 = mysqli_insert_id($conexion); //Programador
		echo json_encode($respuesta);
	}
	else
	{
		$respuesta['estado']	= 0;//Para el programador
		$respuesta['mensaje']	= "Ocurrio un error desconocido";// para el alumno o persona encargada de las electuvas (usuarios)
		$respuesta['id']		= -1; //Programador
		echo json_encode($respuesta);
	}
}


function ActionUpdatePHP($conexion){

  $Id  = $_POST['id'];
	$nombre    = $_POST['nombre'];
	$programa = $_POST['programa'];


    $Query ="UPDATE alta_alumnos SET nombre='".$nombre."', programa='".$programa."' WHERE id=".$Id;

	mysqli_query($conexion,$Query);

	if(mysqli_affected_rows($conexion)>0){
		$Respuesta['estado']=1;
		$Respuesta['mensaje']="Datos actualizados correctamente";
	}else{
		$Respuesta['estado']=0;
		$Respuesta['mensaje']="Ocurrrio un error desconocido";
	}
	echo json_encode($Respuesta);

}





?>
