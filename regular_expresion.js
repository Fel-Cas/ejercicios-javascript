/* 
    18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
let contarVocalesConsonantes=(cadena)=>{
    if(typeof(cadena)!=='string') return 'No ingresaste una cadena válida';
    let vocales='aeiouAEIOUÁÉÍÓÚáéíóú';
    let canVocales=0,canConsonantes=0;
    for(let letra of cadena){
        if(letra!=' '){
            (vocales.includes(letra))?canVocales+=1:canConsonantes+=1;
        }
    }
    return `Cantidad de vocales ${canVocales}, Cantidad de consonantes ${canConsonantes}`
}
console.log(contarVocalesConsonantes('hola Mundo'))

/*
    19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
let esNombre=(nombre)=>{
    if(typeof(nombre)!=='string') return 'No ingresaste una cadena válida';
    let expReg=/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g
    return (expReg.test(nombre))?true:false;
}
console.log(esNombre('Andrés Felipe'));
/*
    20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
let esCorreo=(correo)=>{
    if(typeof(correo)!=='string') return 'No ingresaste una correo válida';
    let regExp=/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z]{2,15})/i;
    return(regExp.test(correo))?true:false;
}
console.log(esCorreo(''));