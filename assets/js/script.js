let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGELICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];
let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUNIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZANARTU",
    paciente: "ANGEL MUNOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VINUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];
// Function that receives the array information and the target where it is going to return the information processed on it.
function patientAttendanceInformation(arrayPos, htmlTarget) {
  document.getElementById(
    `patient_attendance_information_${htmlTarget}`
  ).innerHTML = `Primera Atención: ${arrayPos[0].paciente} - Previsión: ${
    arrayPos[0].prevision
  } | Última Atención: ${arrayPos[arrayPos.length - 1].paciente} - Previsión: ${
    arrayPos[arrayPos.length - 1].prevision
  }`;
}
// Calling the functions and passing the different parameters required to display the information in the HTML page.
patientAttendanceInformation(radiologia, "radiology");
patientAttendanceInformation(traumatologia, "traumatology");
patientAttendanceInformation(dental, "dental");

// Function that receives the array information and the target where it is going to return the information processed on it.
function tablePatientInformationGenerator(arrayPos, htmlTarget) {
  let genericHeaderText = `<tr>
  <th>HORA</th>
  <th>ESPECIALISTA</th>
  <th>PACIENTE</th>
  <th>RUT</th>
  <th>PREVISION</th>
  </tr>`;

  for (let i = 0; i < arrayPos.length; i++) {
    genericHeaderText += `<tr>
      <td>${arrayPos[i].hora}</td>
      <td>${arrayPos[i].especialista}</td>
      <td>${arrayPos[i].paciente}</td>
      <td>${arrayPos[i].rut}</td>
      <td>${arrayPos[i].prevision}</td>
      </tr>`;
  }
  document.getElementById(`table_patient_information_${htmlTarget}`).innerHTML =
    genericHeaderText;
}
// Calling the functions and passing the different parameters required to display the information in the HTML page.
tablePatientInformationGenerator(radiologia, "radiology");
tablePatientInformationGenerator(traumatologia, "traumatology");
tablePatientInformationGenerator(dental, "dental");

// Desafio Numero 2 - Uso de Metodos con Arrays y Objetos
// Bonus: Function Sort
// traumatologia[0].hora
// '8:00'
// traumatologia[0].hora.split(":")
// (2) ['8', '00']
// Array[indice].elemento.metodo("condicion")
// traumatologia[0].hora.split(":")[0]
// '8'
function sortTime(array) {
  for (let i = 0; i < array.length; i++) {
    let hour = array[i].hora.split(":")[0];
    console.log(`${i} ${hour}`);
  }
}
//   array.sort(function (a, b) {
//     let timeSplit = array.hora.split(":");
//     console.log(timeSplit[0]);
//     return timeSplit;
// return a.hora.localeCompare() - b.hora.localeCompare();
//   });
//   tablePatientInformationGenerator(traumatologia, "traumatology");
// }
sortTime(traumatologia);
// 1. Agregar 5 horas de diferentes pacientes a traumatologia.
// Created function to add a new patient to any of the array of objects lists.
function addPatient(array, time, specialist, patient, rut, prevision) {
  array.push({
    hora: `${time}`,
    especialista: `${specialist}`,
    paciente: `${patient}`,
    rut: `${rut}`,
    prevision: `${prevision}`,
  });
}

addPatient(
  traumatologia,
  "09:00",
  "RENE POBLETE",
  "ANA GELLONA",
  "13123329-7",
  "ISAPRE"
);
addPatient(
  traumatologia,
  "09:30",
  "MARIA SOLAR",
  "RAMIRO ANDRADE",
  "12221451-K",
  "FONASA"
);
addPatient(
  traumatologia,
  "10:00",
  "RAUL LOYOLA",
  "CARMEN ISLA",
  "10112348-3",
  "ISAPRE"
);
addPatient(
  traumatologia,
  "10:30",
  "ANTONIO LARENAS",
  "PABLO LOAYZA",
  "13453234-1",
  "ISAPRE"
);
addPatient(
  traumatologia,
  "12:00",
  "MATIAS ARAVENA",
  "SUSANA POBLETE",
  "14345656-6",
  "FONASA"
);
tablePatientInformationGenerator(traumatologia, "traumatology");

// 2. Eliminar el primer y ultimo elemento del arreglo de Radiologia.
// Created function to remove first and last patient from any of the array of objects lists.
function removeFirstAndLastPatient(array) {
  array.shift();
  array.pop();
}

removeFirstAndLastPatient(radiologia);
tablePatientInformationGenerator(radiologia, "radiology");
patientAttendanceInformation(radiologia, "radiology");

// 3. Imprimir dental pero separados por guion cada dato y cada fila de informacion debe estar separada por un parrafo.
// Pense inicialmente hacerlo usando el metodo join(" - ") pero no pude, es posible? - pregunta para clase de manana.
// Created a function to choose a separator and display the information using the selected one.
function separator(array, htmlTarget, separator) {
  let patientsResult = ``;

  for (let i = 0; i < array.length; i++) {
    patientsResult += `
          ${array[i].hora} ${separator}
          ${array[i].especialista} ${separator}
          ${array[i].paciente} ${separator}
          ${array[i].rut} ${separator}
          ${array[i].prevision}</br>
          `;
  }
  document.getElementById(
    `patient_attendance_information_${htmlTarget}_separator`
  ).innerHTML = patientsResult;
}
separator(dental, "dental", "-");

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro medico.

let fullAttendanceList = radiologia.concat(traumatologia).concat(dental);

function fullAttendancePatientList(pacientes) {
  let genericEmptyString = "";
  for (let i = 0; i < pacientes.length; i++) {
    genericEmptyString += `${pacientes[i].paciente} </br>`;
  }
  document.getElementById("patient_attendance_list_full").innerHTML =
    genericEmptyString;
}
fullAttendancePatientList(fullAttendanceList);

// 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas Dental.
// Created a function to filter by PREVISION on any array of objects we select, I didn't know how to do this one just yet, ask in tomorrow's class.
let isaprePatientsFilter = dental.filter(function (paciente) {
  return paciente.prevision == "ISAPRE";
});

function isaprePatients(pacientes, htmlTarget) {
  let genericEmptyString = "";
  for (let i = 0; i < pacientes.length; i++) {
    genericEmptyString += `${pacientes[i].paciente} - ${pacientes[i].prevision}</br>`;
  }
  document.getElementById(
    `patient_attendance_list_isapre_${htmlTarget}`
  ).innerHTML = genericEmptyString;
}
isaprePatients(isaprePatientsFilter, "dental");

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.
let fonasaPatientsFilter = traumatologia.filter(function (paciente) {
  return paciente.prevision == "FONASA";
});
isaprePatients(fonasaPatientsFilter, "traumatology");
