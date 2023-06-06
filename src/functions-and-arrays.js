// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2) {
  if (num1>num2){
    return num1;
 
  } else {
    return num2;
  }
}












// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];




function findLongestWord(words) {
  if (words.length===0){  //words.lenght es como un mnumero
    return null;




  }
let palabraMasLarga = words[0]; //"words[0]" hace referencia al primer elemento del array "words".
//Esto proporciona un punto de partida para comparar las demás palabras y determinar cuál es la más larga
for (let i=1; i<words.length; i++){
  if (words[i].length > palabraMasLarga.length){
    palabraMasLarga = words[i];
  }
  return palabraMasLarga;
}




}








// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];




function sumNumbers() {
  let sum=0;
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}












// Iteration #3.1 Bonus: //DIFICIL
/*una comprobación adicional para lanzar un error en
caso de que se encuentren elementos de tipo 'object' o 'array'.  */




function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }




  let sum = 0;
  let tiposNoAdmitidos = ['object', 'array'];




  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let currentType = typeof currentElement;




    if (tiposNoAdmitidos.includes(currentType)) {
      throw new Error('Unsupported data type');
    }




    /*if (!isNaN(currentElement)) {
      sum += currentElement;
    }*/
  }




  return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }




  let sum = 0;




  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }




  return sum / numbers.length;
}












/*Calcular el promedio de una matriz de cadenas
debe declarar una función llamada AverageWordLength
debe devolver nulo si recibe una matriz vacía cuando se llama
debe devolver el promedio de una matriz de un elemento
debe devolver el promedio de una matriz*/




function averageWordLength(words) {
  if (words.length === 0) {
    return null;
  }




  let totalLength = 0;




  for (let i = 0; i < words.length; i++) {
    totalLength += words[i].length;
  }




  return totalLength / words.length;
}




// Level 2: Array of strings
/*Calcular el promedio de una matriz de cadenas
        debe declarar una función llamada AverageWordLength
        debe devolver nulo si recibe una matriz vacía cuando se llama
        debe devolver el promedio de una matriz de un elemento
        debe devolver el promedio de una matriz




*/
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];




function averageWordLength(words){
  if (words.length === 0) {
    return null;
  }




  let totalLength = 0;




  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] === 'string') { /*Esto se hace para asegurarse de que solo se sumen
    las longitudes de las palabras y no se cuenten otros tipos de elementos. */
      totalLength += words[i].length;
    }




  return totalLength / words.length;
  }
}




// Bonus - Iteration #4.1








/*Bonificación: calcule el promedio de una matriz de elementos mixtos
        debe declarar una función llamada avg
        debe devolver nulo si recibe una matriz vacía cuando se llama
        debe devolver el promedio de la matriz*/




function avg(array) {
  if (array.length === 0) {
    return null;
  }
       
  let sum = 0;//para almacenar la suma de los números en la matriz
  let count = 0;//para contar la cantidad de números en la matriz.




  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {  //Esto se hace para asegurarse de que solo se sumen y cuenten los números de la matriz
      sum += array[i];  //sum = sum + array[i].
      count++; // incrementa en 1 el valor de la variable count en cada iteración del bucle
              //Es equivalente a count = count + 1 o count += 1.
    }
  }
       
  return sum / count;
}
       




// Iteration #5: Unique arrays
/*función llamada uniquifyArray




    debe devolver nulo si recibe una matriz vacía cuando se llama




    debe devolver la matriz unificada correcta cuando se pasa una matriz de los mismos elementos como argumento




    debe devolver la misma matriz cuando no se repite ningún elemento




    debería devolver la matriz única




 */
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];




function uniquifyArray(array) {
  if (array.length === 0) {
    return null;
  }




  let uniquifiedArray = []; //se utilizará para almacenar los elementos únicos




  for (let i = 0; i < array.length; i++) {
    if (uniquifiedArray.indexOf(array[i]) === -1) {  //verificar si el elemento en el índice i no se encuentra en la matriz
      uniquifiedArray.push(array[i]);
    }




    /*uniquifiedArray.indexOf(array[i])
    busca el índice del elemento array[i]
     dentro de uniquifiedArray.
     Si el elemento no se encuentra en uniquifiedArray,
     indexOf devuelve -1. */
  }




  return uniquifiedArray;
}
















// Iteration #6: Find elements
/*debe declarar una función llamada doesWordExist




 debe devolver nulo si recibe una matriz vacía cuando se llama




debería devolver verdadero si la palabra que estamos buscando es la única en la matriz




debería devolver falso si la palabra que estamos buscando no está en la matriz




debería devolver verdadero si la palabra que estamos buscando está en la matriz */




const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];




function doesWordExist(words, targetWord) {
  if (words.length === 0) {
    return null;
  }




  for (let i = 0; i < words.length; i++) {
    if (words[i] === targetWord) {
      return true;
    }
  }




  return false;
}
















// Iteration #7: Count repetition
/*debe declarar una función llamada cuantas veces




debe devolver 0 (cero) si recibe una matriz vacía cuando se llama




debe devolver 1 (uno) cuando la palabra aparece solo una vez en la matriz




debe devolver 0 (cero) cuando la palabra no aparece en la matriz
 */
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];




function howManyTimes(words, targetWord) {
  if (words.length === 0) {
    return 0;
  }




  let count = 0;




  for (let i = 0; i < words.length; i++) {
    if (words[i] === targetWord) {
      count++;
    }
  }




  return count;
}






// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];


function greatestProduct() {}








// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
