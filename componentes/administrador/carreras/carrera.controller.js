(function(){
  angular
    .module('myEnsamble')
    .controller('carreraController', carreraController);
    function carreraController(administradorService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var carreraCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        carreraCtrl.carreras = administradorService.getCarreras();
      }init();

      carreraCtrl.save = function (){
        var nuevaCarrera = {
          nombre: carreraCtrl.nombre,
          cursos: [
            {}
          ]

        }
        administradorService.setCarreras(nuevaCarrera);
        console.log(nuevaCarrera);
      }

      carreraCtrl.eliminar = function (){
        var carreraSeleccionada = administradorService.getCarreraID(carreraCtrl.carreraSeleccionada);
        administradorService.eliminarCarrera(carreraSeleccionada);
      }

      carreraCtrl.asignar = function () {
        var carreraSeleccionada = administradorService.getCarreraID(carreraCtrl.carreraSeleccionadaCurso);
        administradorService.asignarCurso(carreraCtrl.nombreCurso, carreraSeleccionada);
      }

      carreraCtrl.eliminarCurso = function (){
        var carreraSeleccionada = administradorService.getCarreraID(carreraCtrl.carreraSeleccionadaEliminarCurso),
            cursoSeleccionado = administradorService.getCursoIndex(carreraCtrl.carreraSeleccionadaEliminarCurso, carreraCtrl.carreraEliminarCurso);
            alert(cursoSeleccionado);
            alert(carreraSeleccionada);
       administradorService.eliminarCurso(carreraSeleccionada, cursoSeleccionado);
      }
    }

})();
