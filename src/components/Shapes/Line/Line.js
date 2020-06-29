import React from 'react';
import { getRandomColor } from '../../../utils/colorGenerator';


const circle = (props) => {

    let {params} =  props;
    const [,x1, y1, x2, y2] = params.split(" ");

    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={{stroke: getRandomColor(), strokeWidth: '2'}} />
    )
};

export default circle;


/**
   * validate line plotting parameters
   * @param Array params
   * @returns Boolean
*/
export const validateLinePlottingParams = (params) => {
    params = params.split(" ");
    params.shift();
    if (params.length !== 4) return false;
    return params.every(param => Number.isInteger(parseInt(param, 10)))
}