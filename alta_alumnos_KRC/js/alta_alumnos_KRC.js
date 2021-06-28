// CRUD

var IdEliminar = 0;
var IdActualizar = 0;

//--------- CREATE
function ActionCreate(){

	var nombre_Create= document.getElementById("nombre_create").value;
	var programa_Create=document.getElementById("programa_create").value;

	$.ajax({
	  method:"POST",
	  url: "php/alta_alumnos_KRC.php",
	  data: {
	  	accion:"create",
	    programa:programa_Create,
	    nombre:nombre_Create
	  },
	  success: function( result ) {

	    var resultJSON = JSON.parse(result);
	    if(resultJSON.estado==1){
	    	var tabla=$('#example2').DataTable();

        Botones ='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-Editar" onclick="IdenticaActualizar('+resultJSON.id+');>Editar</button>';
        Botones = Botones+' <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-Eliminar" onclick="IdenticaEliminar('+resultJSON.id+');>Eliminar</button>';

	  		tabla.row.add([
  				nombre_Create,
  			  programa_Create,
  				Botones
  				]).draw().node().id="row_"+resultJSON.id;

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

  $.ajax({
      method: "POST",
      url: "php/alta_alumnos_KRC.php",
      data: {
          accion      : "update",
          id          : id,
          nombre      : nombre_Update,
          programa    : programa_Update
      },
      success: function(result) {
          resultJSON = JSON.parse(result);
          if (resultJSON.estado == 1) {

              var tabla = $("#example2").DataTable();

              //Temporal
              renglon = tabla.row("#row_" + idAct).data();
              renglon[0] = actividad_local_UP;
              renglon[1] = fechaInicio_local_UP;
              renglon[2] = horas_local_UP;

              tabla.row("#row_" + idAct).data(renglon);

          } else
              alert(resultJSON.mensaje);
      }
  });
}





function IndentificaEliminar(id){
	IdEliminar=id;
}

function IdenticaActualizar(id){
	IdActualizar = id;

	//Referencia a la tabla
	tabla		 = $("#example2").DataTable();

	//Referencia al contenido del renglon
	renglon			   =  tabla.row("#row_"+IdActualizar).data();

	nombre      	   = renglon[0];
	observaciones      = renglon[1];

	$("#nombre_delete").val(nombre);
	$("#programa_delete").val(observaciones);

}
