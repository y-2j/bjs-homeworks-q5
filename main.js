//Задача3
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
  const now =+ new Date();
  birthday =+ new Date(birthday);
  const diff = now - birthday
  const millisecondsYear = 24 * 60 * 60 * 1000 * 365;
  const age = diff / millisecondsYear;
  
  return (age > 18);
}

//Задача 1

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    const sound = animal.sound
       if (typeof sound == "undefined") {
           animal = null;
           return animal;
        } else {
          return sound;
       }
}

//Задача2

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sumResult = 0;
    for (let i = 0; i < marks.length; i++) {
        sumResult = sumResult + +marks[i];
    }
  const average = sumResult / marks.length;
  const roundedAverage = Math.round(average);
  
  return roundedAverage;
}