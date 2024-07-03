alert("Ésta página calculará tu promedio escolar.");

let nombre = prompt("Ingrese su nombre");
alert("bienvenido " + nombre);

function calcularProm() {
  let resultado;
  let suma = 0;

  let tipoPromedio = parseInt(
    prompt(
      'Elija una de las opciones: \n Escriba "1" para sacar el promedio trimestral, cuatrimestral, etc. \n Escriba "2" para sacar promedio anual de las materias. \n Escriba "3" para salir.'
    )
  );
  if (isNaN(tipoPromedio)) {
    alert("Ingrese un número válido por favor");
    calcularProm();
  } else if (tipoPromedio === 1) {
    let materias = parseInt(prompt("Ingrese la cantidad de materias"));
    if (isNaN(materias)) {
      alert("Ingrese un número válido por favor");
    } else {
      for (let i = 1; i <= materias; i++) {
        let notaMateria = prompt("Ingrese la nota de cada materia.");
        suma = +notaMateria[i];
        resultado = suma / materias;
        alert("Tu promedio es de " + resultado);
      }
    }
  } else if (tipoPromedio === 2) {
    let tipo = parseInt(
      prompt(
        'Escriba "1" para calcular por trimestre. \nEscriba "2" para calcular por cuatrimestre.'
      )
    );
    if (tipo === 1) {
      let num1 = parseInt(prompt("Escribe el promedio del primer trimestre."));
      let num2 = parseInt(prompt("Escribe el promedio del segundo trimestre."));
      let num3 = parseInt(prompt("Escribe el promedio del tercer trimestre."));

      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Escribe un número válido.");
        calcularProm();
      } else {
        suma = num1 + num2 + num3;
        resultado = suma / 3;
        alert("Tu promedio anual es de " + resultado);

        calcularProm();
      }
    } else if (tipo === 2) {
      let num1 = parseInt(
        prompt("Escribe el promedio del primer cuatrimestre.")
      );
      let num2 = parseInt(
        prompt("Escribe el promedio del segundo cuatrimestre.")
      );
      if (isNaN(num1) || isNaN(num2)) {
        alert("Escribe un número válido.");
        calcularProm();
      } else {
        suma = num1 + num2;
        resultado = suma / 2;
        alert("Tu promedio anual es de " + resultado);

        calcularProm();
      }
    } else {
      alert("Escriba 1 o 2 por favor.");
      calcularProm();
    }
  } else if (tipoPromedio === 3) {
    alert("Hasta pronto.");
  } else {
    alert("Escriba 1, 2 o 3 por favor.");
    calcularProm();
  }
}

calcularProm();
