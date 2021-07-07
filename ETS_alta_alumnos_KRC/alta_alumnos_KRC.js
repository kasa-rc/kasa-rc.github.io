// CRUD

var IdEliminar = 0;
var IdActualizar = 0;

//--------- CREATE
function ActionCreate(){

	var nombre_Create= document.getElementById("nombre_create").value;
	var programa_Create=document.getElementById("programa_create").value;
  var apellidoP_Create= document.getElementById("apellidoP_create").value;
	var apellidoM_Create=document.getElementById("apellidoM_create").value;

	$.ajax({
	  method:"POST",
	  url: "php/alta_alumnos_KRC.php",
	  data: {
	  	accion:"create",
	    programa:programa_Create,
	    nombre:nombre_Create,
      apellidoP:apellidoP_Create,
      apellidoM:apellidoM_Create

	  },
	  success: function( result ) {

	    resultJSON = JSON.parse(result);

	    if(resultJSON.estado==1){
	    	var tabla=$('#example2').DataTable();

        Botones='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-Editar" onclick="IdenticaActualizar('+resultJSON.id+');">Actualizar</button>';
        Botones=Botones+' <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-Eliminar" onclick="IndentificaEliminar('+resultJSON.id+');">Eliminar</button>';

	  		tabla.row.add([
  			  programa_Create,
          nombre_Create,
  				Botones
  				]).draw().node().id="row_"+resultJSON.id;

          $('#modal-Nuevo').modal('hide');
	    }else
      alert("Esto me responde el servidor" + result);
	  }
	});
}




//--------- UPDATE
function ActionUpdate() {

  var id = IdActualizar;
  var nombre_Update     = document.getElementById("nombre_update").value;
  var programa_Update   = document.getElementById("programa_update").value;
  var apellidoP_Update  = document.getElementById("apellidoP_update").value;
	var apellidoM_Update  =document.getElementById("apellidoM_update").value;

  $.ajax({
      method: "POST",
      url: "php/alta_alumnos_KRC.php",
      data: {
          accion      : "update",
          id          : id,
          nombre      : nombre_Update,
          programa    : programa_Update,
          apellidoP   :apellidoP_Update,
          apellidoM   :apellidoM_Update
      },
      success: function(result) {
          resultJSON = JSON.parse(result);
          if (resultJSON.estado == 1) {

              var tabla = $("#example2").DataTable();

              //Temporal
              renglon = tabla.row("#row_" + id).data();
              renglon[0] = programa_Update;
              renglon[1] = nombre_Update;

              tabla.row("#row_" + id).data(renglon);

              $('#modal-Editar').modal('hide');
          } else
              alert(resultJSON.mensaje);

      }
  });
}




//--------- READ
function ActionRead(){

	$.ajax({
	  method:"post",
	  url: "./php/alta_alumnos_KRC.php",
	  data: {
	    accion: "read"
	  },
	  success: function( result ) {
	  	var resultJSON = JSON.parse(result);

	  	if(resultJSON.estado==1){

	  		var tabla=$('#example2').DataTable();

	  		resultJSON.altas.forEach(function(alta_alumnos){

	  			Botones='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-Editar" onclick="IdenticaActualizar('+alta_alumnos.id+');">Actualizar</button>';
	  			Botones=Botones+' <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-Eliminar" onclick="IndentificaEliminar('+alta_alumnos.id+');">Eliminar</button>';

	  			tabla.row.add([
	  				alta_alumnos.programa,
	  				alta_alumnos.nombre,
	  				Botones
	  				]).draw().node().id="row_"+alta_alumnos.id;

	  		});


	  	}else{

	    	alert(resultJSON.mensaje);
      }
	  }
	});
}


//--------- DELETE
function ActionDelete(){

	IdElim=IdEliminar;

			$.ajax({
				method:"post",
				url: "php/alta_alumnos_KRC.php",
				data: {
					accion: "delete",
					id: IdElim
				},
				success: function( result ) {
					console.log(result);
					resultJSON = JSON.parse(result);

					if(resultJSON.estado==1)
					{
						//alert("¿Estás seguro de eliminar a "+nomElim+"?");
						//Eliminar el renglon de la tabla
						tabla = $("#example2").DataTable();

						tabla.row("#row_"+IdElim).remove().draw();

					$('#modal-Eliminar').modal('hide');
					}else{
						alert(resultJSON.mensaje);
					}
				}
			});

}





function IndentificaEliminar(id){
  alert("Desea eliminar al id : "+id);
	IdEliminar=id;

}

//function IndentificaNombreEliminar(id){
	//nombreEliminar=id;
//}

function IdenticaActualizar(id){
	IdActualizar = id;

	//Referencia a la tabla
	tabla		 = $("#example2").DataTable();

	//Referencia al contenido del renglon
	renglon			   =  tabla.row("#row_"+IdActualizar).data();

	programa         = renglon[0];
  nombre      	   = renglon[1];
  apellidoP        = renglon[2];
  apellidoM        = renglon[3];

	$("#programa_update").val(programa);
	$("#nombre_update").val(nombre);
  $("#apellidoP_update").val(apellidoP);
  $("#apellidoM_update").val(apellidoM);

  var nombre_Update     = document.getElementById("nombre_update").value;

}
