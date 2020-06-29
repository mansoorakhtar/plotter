import React from 'react';
import { getRandomColor } from '../../../utils/colorGenerator';


const circle = (props) => {

    let {params} =  props;
    const [,cx, cy, radius] = params.split(" ");

    return (
        <circle cx={cx} cy={cy} r={radius} fill={getRandomColor()} />
    )
};

export default circle;


/**
   * validate circle plotting parameters
   * @param Array params
   * @returns Boolean
*/
export const validateCirclePlottingParams = (params) => {
  params = params.split(" ");
  params.shift();
  if (params.length !== 3) return false;
  return params.every(param => Number.isInteger(parseInt(param, 10)))
}