let cadena='Hola puto';
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto
retorna -1, si no es una cadena, de lo contrario retorna la longitud de la cadena.
*/
let longitud=(cadena)=>{
    if(typeof(cadena)==='string') return cadena.length;
    return -1;
}
console.log(longitud());

/* 
    2) Programa una función que te devuelva el texto recortado según el número de caracteres
*/
let subcadena=(cadena,longitud)=>{
    if(typeof(cadena)==='string' && (cadena.length)>=longitud && longitud>=0) return cadena.substring(0,longitud);
    return 'No es un cadena de texto o la cantidad de letras supera la longitud de la cadena';
}
console.log(subcadena(cadena,0));

/* 
    3) Programa una función que dada una String te devuelva un Array de textos separados por cierto
*/
let cadenaVector=(cadena,caracter)=>{
    if(typeof(cadena)==='string') {
        let vector=cadena.split(caracter);
        if(vector.length>1) return vector
    }
    return 'No es un cadena de texto o La cadena no tiene ese caracter para ser separada';
}
cadena="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
console.log(cadenaVector(cadena,','));

/* 
    4) Programa una función que repita un texto X veces
*/
cadena='Hola';
let repeticion=(cadena,repeticion)=>{
    if(typeof(cadena)==='string' && repeticion>-1) return cadena.repeat(repeticion);
    return 'No es un cadena de texto o la veces que quiere repetir la cadena es menor a 0'
}
console.log(repeticion(cadena,2));
/* 
    5) Programa una función que invierta las palabras de una cadena de texto
*/
let reversar=(cadena)=>{
    
    if(typeof(cadena)==='string') return cadena.split('').reverse().join('')
    return 'No es un cadena de texto'
}
cadena='medico';
console.log(reversar(cadena));
/* 
    6) Programa una función para contar el número de veces que se repite una palabra en un texto largo
*/
let coincidencias=(cadena,palabra)=>{
    if(typeof(cadena)==='string') return (cadena.split(palabra).length-1)
    return 'No es un cadena de texto'
}
cadena='hola mundo adios mundo'
console.log(coincidencias(cadena,'mundo'));

/* 
    7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro)
*/
let palindrome=()=>{
    if(typeof(cadena)==='string'){
        let invertida=cadena.split('').reverse().join('');
        return (cadena==invertida)?true:false;
    }
    return 'No es un cadena de texto';
}
cadena='salas'
console.log(palindrome(cadena));
/* 
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado
*/

let eliminar=(cadena,eliminar)=>{
    if(typeof(cadena)==='string'){
        return cadena.replace(new RegExp(eliminar,'ig'),'')//cadena.split(eliminar).join('');
    }
    return 'No es un cadena de texto';
}
cadena='xyz1, xyz2, xyz3, xyz4 y xyz5'
console.log(eliminar(cadena,'xyz'))