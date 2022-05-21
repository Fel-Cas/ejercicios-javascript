/* 
    9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
let randomNumber=()=>{
    return Math.round(Math.random()*(600-501+1)+501);
}
console.log(randomNumber());
/* 
    10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
*/
let capicua=(numero)=>{
    if(typeof(numero)==='number') return ((numero.toString().split('').reverse().join(''))==numero.toString());
    return 'No ingresaste un número'
}
console.log(capicua(2020));
/* 
    11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
*/
let factorial=(numero)=>{
    if(typeof(numero)==='number') {
        if(numero==0 || numero==1) return 1;
        let res=1;
        for(let i=numero;i>0;i--) res=res*i;
        return res
    }
    return 'No ingresaste un número'
}
console.log(factorial(3));

/* 
    12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no
*/
let esPrimo=(numero)=>{
    if(typeof(numero)!=='number') return 'No ingresaste un número';
    if(numero<2) return false;
    for(let i=2;i<numero;i++){
        if(numero%i==0) return false;
    }
    return true;
}
console.log(esPrimo(7));
/* 
 13) Programa una función que determine si un número es par o impar   
*/
let esParImpar=(numero)=>{
    if(typeof(numero)!=='number') return 'No ingresaste un número';
    return (numero%2==0)?true:false
}
console.log(esParImpar(33));
/*
  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa  
*/
let convertirTemperatura=(temperatura,representacion)=>{
    if(typeof(temperatura)!=='number') return 'No ingresaste un número';
    switch(representacion){
        case 'C':
                return `${(temperatura*1.8)+32}°F`;
        case 'F':
                return `${(temperatura-32)/1.8}°C`;
        default:
            return `${temperatura}°${representacion}, no ingresaste un formato valido`;
    }
}
console.log(convertirTemperatura(34,'C'))

/* 
    15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
let convertirNumero=(numero, base)=>{
    if(typeof(numero)!=='number'||typeof(base)!=='number')  return 'El numero o la base no son datos válidos';
    switch(base){
        case 2:
            return `${numero} en base ${base} = ${parseInt(numero,base)} en base 10`;
        case 10:
            return `${numero} en base ${base} = ${numero.toString(2)} en base 2`
        default:
            return 'La base que esntraste no es válida'
    }
} 
console.log(convertirNumero(23,10))   
/*
    16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
let descuento=(cantidad,descuento)=>{
    if(typeof(cantidad)!=='number'||typeof(descuento)!=='number')  return 'La cantidad o el descuento no son datos válidos';
    if(cantidad<0) return 'La cantidad ingresada no es válida';
    if(descuento<0 || descuento>100) return 'El descuento ingresado no es válido';
    return cantidad-(cantidad*(descuento/100));
}
console.log(descuento(1000,0))
/* 
    17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
let calcularAnos=(fecha)=>{
    if(typeof(fecha)!=='object' || !fecha instanceof Date) return 'No ingresaste un fecha válida';
    let anios=Date.now()-fecha.getTime();
    let tiempo=1000*60*60*24*365;
    return Math.floor(anios/tiempo);
}
let cumple=new Date(2010,4,19)
console.log(calcularAnos(cumple));