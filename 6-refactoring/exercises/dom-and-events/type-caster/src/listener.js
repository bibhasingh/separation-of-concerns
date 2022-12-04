import { castTheValue } from './handler.js';

export default function(){

    document.getElementById('user-action')
                        .addEventListener('click', castTheValue);
    
};