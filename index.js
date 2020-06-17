const classA = [
  {
    name: 'Marlon',
    grade: 3.5,
  },
  {
    name: 'Matheus',
    grade: 4.25
  },
  {
    name: 'Paulo',
    grade: 8.5
  },
  {
    name: 'Margarete',
    grade: 9.0
  }
]

const classB = [
  {
    name: 'Leonardo',
    grade: 4.5
  },
  {
    name: 'Bruno',
    grade: 4.25
  },
  {
    name: 'Juscelino',
    grade: 1.5
  },
  {
    name: 'Silvana',
    grade: 8.8
  }
]

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }
  const average = sum / students.length
  return average;
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);


function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congratulations!!!`)
  } else {
    console.log(`${turma} average: ${average}. It's terrible guys.`)
  }
}

sendMessage(average1, 'Class A');
sendMessage(average2, 'Class B');

// Marcar student como Flunked se a grade for menor que 5.
// Enviar um mensagem.

function markAsFlunked(student) {
  student.Flunked = false;
  if (student.grade < 5) {
    student.Flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.Flunked) {
    console.log(`the student ${student.name} is Flunked!!`)
  }
}

function studentReprovados(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

studentReprovados(classA);
studentReprovados(classB);
