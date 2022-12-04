import { averageEvens } from './utils.js';

export const averageEvensHandler = event => {
    const allNumbers = [];
    let acceptingInput = true;
    while (acceptingInput) {
      const nextInput = prompt('enter a number');
      if (nextInput === null || nextInput === '') {
        acceptingInput = false;
        continue;
      }

      const nextNumber = Number(nextInput);
      if (Number.isNaN(nextNumber)) {
        alert(`"${nextInput}" is not a valid number`);
      } else {
        allNumbers.push(nextNumber);
      }
    }
   const average = averageEvens(allNumbers);
   const message = `average of all evens: ${average}`;
    alert(message);
};
