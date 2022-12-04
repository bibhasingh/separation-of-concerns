import { showMouseCoordinates } from './handler.js';

export default function(){

    document.getElementById('user-interface')
                          .addEventListener('mousemove', showMouseCoordinates);

};

