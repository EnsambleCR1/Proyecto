(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(inicioSesionService){
    var carreras = [
    {
        nombre: "Diseño y Desarrollo Web",
      cursos:
      [  {name : "Fundamentos de Programación"},
         {name :"Diseño Web I"},
        {name :"Diseño Web II"}
      ]
    },
      {
        nombre: "Telemática",
        cursos: [
          {name :"Redes I"},
          {name :"Redes II"}
         ]
      }
    ];
     console.log(carreras);

    var profesores = [
      {
        nombre : 'Pablo Monestel',
        correo : 'pmonestel@ucenfotec.ac.cr',
        contrasenna : 'Pmonestel@',
        tipo : 'profesor'
      }
    ];

    var publicAPI = {
      setCarreras : _setCarreras,
      getCarreras : _getCarreras,
      getCursosOpciones : _getCursosOpciones,
      getCarreraID : _getCarreraID,
      eliminarCarrera : _eliminarCarrera,
      asignarCurso : _asignarCurso,
      getCursoIndex : _getCursoIndex,
      eliminarCurso : _eliminarCurso,
      eliminarCurso : _eliminarCurso,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCarreras(pCarrera){
      carreras.push(pCarrera);
    }

    function _getCarreras(){
      return carreras;
    }

    function _getCursosOpciones(){
      return cursosOpciones;
    }

    function _getCarreraID(pCarrera) {
      var carreraIndex = -1;
      for (var i = 0; i < carreras.length; i++) {
        if (pCarrera == carreras[i].nombre ) {
          carreraIndex = i;
        }
      }
      return carreraIndex;
    }

    function _eliminarCarrera(pCarrera) {
      carreras.splice(pCarrera, 1);
    }

    function _asignarCurso(pCurso, pCarrera) {
      carreras[pCarrera].cursos.push({name:pCurso});
      alert(pCurso);

    }

    function _eliminarCurso(pCarrera, pCurso) {
      carreras[pCarrera].cursos.splice({pCurso});
    }

    function _getCursoIndex(pCarrera, pCurso) {

      var cursoIndex = -1;

      for (var i = 0; i < carreras.length; i++) {
        if (pCarrera == i) {
          for (var y = 0; y < carreras[i].cursos.length; y++) {
            alert(carreras[i].cursos[y]);
            if (pCurso == carreras[i].cursos[y]) {
              cursoIndex = y;
            }
          }
        }
      }
      alert(cursoIndex);
      return cursoIndex;
    }

    function _setProfesores(pProfesor) {
      preofesores = _getProfesores();
      preofesores.push(pProfesor);
      localStorage.setItem('profesoreslLS',JSON.stringify(preofesores)); 
      // profesores.push(pProfesor);
      // usuarios.push(pProfesor);
    }

    function _getProfesores() {
      var profesores = [];
      if(localStorage.getItem('profesoreslLS') == null){
        profesores = [];
      }else{
        profesores = JSON.parse(localStorage.getItem('profesoreslLS'));
      }
      return profesores;
    }

  }

})();
