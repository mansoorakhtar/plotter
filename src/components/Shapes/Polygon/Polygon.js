import React from 'react';
import { getRandomColor } from '../../../utils/colorGenerator';


const polygon = (props) => {

    let {params} =  props;
    params = params.substring(2);
    return (
        <polygon points={params} style={{ fill: getRandomColor() }} />
    )
};

export default polygon;

/**
   * validate polygon plotting parameters
   * @param Array params
   * @returns Boolean
*/
export const validatePolygonPlottingParams = (params) => {
    params = params.replace(/,/g, " ");
    params = params.split(" ");
    params.shift();
    if (params.length % 2 === 1 || params.length < 6) return false;
    return params.every(param => Number.isInteger(parseInt(param, 10)))
}