import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = event => {
    const input = event.target.value;
    const reversedUpperCase = reverseAndUpper(input);

    document.getElementById('output').innerHTML = reversedUpperCase;
};
  