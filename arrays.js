/*
    21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
let elevarAlCuadrado=(array)=>{
    if(!Array.isArray(array) || array===undefined) return 'No ingresaste un array válido';
    if(array.length<1) return 'Ingresaste un array vacío';
    array.forEach((element,index)=> {
        array[index]=Math.pow(element,2)
    });
    return array
}
console.log(elevarAlCuadrado([2,3,5,6,10]))
/*
    22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
let valorMinimoMaximo=(arreglo)=>{
    if(!Array.isArray(arreglo) || arreglo===undefined) return 'No ingresaste un array válido';
    if(arreglo.length<1) return 'Ingresaste un array vacío';
    let max,min;
    max=Math.max(...arreglo);
    min=Math.min(...arreglo);
    return `El valor máximo es ${max} y el valor minímo es ${min}`;
}
console.log(valorMinimoMaximo([23,56,78,90,100,-67]));
/*
    23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
let parImpar=(arreglo)=>{
    if(!Array.isArray(arreglo) || arreglo===undefined) return 'No ingresaste un array válido';
    if(arreglo.length<1) return 'Ingresaste un array vacío';
    let numeros={
        par:[],
        impar:[]
    }
    for(let dato of arreglo){
        (dato%2==0)?numeros.par.push(dato):numeros.impar.push(dato);
    }
    return numeros;
}
console.log(parImpar([1,2,3,4,5,6,7,8,9,0]));

/*
  
    24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
let ordenar=(arreglo)=>{
    if(!Array.isArray(arreglo) || arreglo===undefined) return 'No ingresaste un array válido';
    if(arreglo.length<1) return 'Ingresaste un array vacío';
    let ordenado={
    }
    ordenado.ascendente=arreglo.slice().sort((a,b)=>a-b);
    ordenado.descendente=arreglo.slice().sort((a,b)=>b-a);
    return ordenado;
}
console.log(ordenar([34,200,-45,90,45,78,-19]));
/*
    25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
let unicos=(arreglo)=>{
    if(!Array.isArray(arreglo) || arreglo===undefined) return 'No ingresaste un array válido';
    if(arreglo.length<1) return 'Ingresaste un array vacío';
    //return arreglo.filter((item,index)=> arreglo.indexOf(item)===index)
    let data=new Set(arreglo);
    return [...data];
}
console.log(unicos(["x", 10, "x", 2, "10", 10, true, true]));
/*
    26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.  
*/
let promedio=(arreglo)=>{
    if(!Array.isArray(arreglo) || arreglo===undefined) return 'No ingresaste un array válido';
    if(arreglo.length<1) return 'Ingresaste un array vacío';
    return (arreglo.reduce((a,b)=>a+b,0))/arreglo.length
}
console.log(promedio([34,67,8,9,0,6]))