import { formatCoordinates } from './util.js';

export const showMouseCoordinates = event => {
    const xValue = event.pageX;
    const yValue = event.pageY;
    const formatCoordinate = formatCoordinates(xValue,yValue);

    document.getElementById('mouse-position').innerHTML = formatCoordinate;                                                        
};
