import React from 'react';
import { getRandomColor } from '../../../utils/colorGenerator';


const rectangle = (props) => {


    let {params} =  props;
    const [,x, y, width, height] = params.split(" ");

    return (
        <rect x={x} y={y} width={width} height={height} style={{ fill: getRandomColor() }} />
    )
};

export default rectangle;

/**
   * validate rectange plotting parameters
   * @param Array params
   * @returns Boolean
*/
export const validateRectangePlottingParams = (params) => {
  params = params.split(" ");
  params.shift();
  if (params.length !== 4) return false;
  return params.every(param => Number.isInteger(parseInt(param, 10)))
}