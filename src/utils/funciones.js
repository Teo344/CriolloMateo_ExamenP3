function toCelsius(number){

    if (number){
        throw new TypeError('El numero no es finito');
    }
    let result = (number-32)*(5/9);
    return result.toPrecision(1,0.1);
}

function toFahrenheit(number){
     if (number){
        throw new TypeError('El numero no es finito');
    }
    let result = (number *(9/5))+32;
    return result.toPrecision(1,0.1);
}

function movingAverage(series, window){

    if(series){

    }
    if(window<2 || window>series.length()){
        throw new RangeError('Ventana fuera de rango');
    }
    
}




module.exports = {
  toCelsius,
  toFahrenheit,
  movingAverage
};