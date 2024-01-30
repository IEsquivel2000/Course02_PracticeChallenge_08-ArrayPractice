let title = document.querySelector('h1');
title.innerHTML = 'Hora del Desafío'





function btn_Challenge01(){
    try {
        let height = parseFloat(prompt('Introduzca la altura en metros'));
        let weight = parseFloat(prompt('Introduzca el peso en kilogramos'));
        
        return alert(`El IMC (Indice de masa corporal) para los valores ingresados es de: ${(weight/Math.pow(height, 2)).toFixed(2)} `);
    } catch (error) {
        console.log(error);
    }
}

function btn_Challenge02(){
    try {
        let num = parseFloat(prompt('Introduzca el valor que desee buscar el factorial'));
        let fac = factorial(num);

        return alert(`El factorial del valor ingresado es: ${fac}`);
    } catch (error) {
        console.log(error);      
    }
}

function btn_Challenge03(){
    try {
        let cash = parseFloat(prompt('Introduce el valor en $ dolares USD para transformarlo a reales brasilena, por favor'));
        
        return alert(`Al cambio el valor equivalente es ${cash * 4.80}`);
    } catch (error) {
        console.log(error);
    }
}
function btn_Challenge04(){
    try {
        let height = parseFloat(prompt('Introduzca la altura en metros para determinar el área y el perímetro de una sala rectangular'));
        let width  = parseFloat(prompt('Introduzca el ancho en metros para determinar el área y el perímetro de una sala rectangular'));
        
        return alert(`El área es de ${height*width}m, mientras que el perimetro es de ${2 *(height+width)}m del rectangulo respectivamente`);

    } catch (error) {
        console.log(error);       
    }
}
function btn_Challenge05(){
    let radio = parseFloat(prompt('Introduzca el radio en metros para determinar el área y el perímetro de una sala circular'));
    return alert(`El área es de ${(Math.PI * Math.pow(radio, 2)).toFixed(2)}m, mientras que el perimetro es de ${(2 *Math.PI*radio).toFixed(2)}m del circulo respectivamente`);
}

function btn_Challenge06(){

    let num = parseInt(prompt('Introduce el numero de la tabla de multiplicar a buscar'));
     return alert(`El doble del numero seleccionado es:
     ${num} * 1 = ${num*1}
     ${num} * 2 = ${num*2}
     ${num} * 3 = ${num*3}
     ${num} * 4 = ${num*4}
     ${num} * 5 = ${num*5}
     ${num} * 6 = ${num*6}
     ${num} * 7 = ${num*7}
     ${num} * 8 = ${num*8}
     ${num} * 9 = ${num*9}
     ${num} * 10 = ${num*10}
     ${num} * 11 = ${num*11}
     ${num} * 12 = ${num*12}`);
}



function factorial(num) {
    let fac = num;
    num--;
    while (num > 0) {
        fac = fac * num;
        num--;
    }
    return fac;
}