import { reverseAndUpperHandler } from "./handler.js";

// import { reverseAndUpperHandler } from './handler.js';
export default function(){
 console.log('abc');
 document.getElementById('input')
                    .addEventListener('keyup', reverseAndUpperHandler);
 
}