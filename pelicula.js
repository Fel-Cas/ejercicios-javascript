/*
    27) Programa una clase llamada Pelicula.

    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
        7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
        aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
        instancias de la clase de forma automatizada e imprime la ficha técnica 
        de cada película.

    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula{

    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;
        this.generosAceptados=['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
        this.validarIMDB(id)
        this.validarDirector(director);
        this.validarTitulo(titulo);
        this.validarAnio(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }
    validarCadena(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if(typeof(valor)!=='string') return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);
        return true;
    }
    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length>longitud || valor.length<1) return console.error(`${propiedad} "${valor}", excede el número de caracteres perimitidos(${longitud})`);
        return true;
    }
    validarIMDB(id){
        if(this.validarCadena('IMDB id',id)){
            let regExp=/^([a-z]){2}([0-9]){7}$/
            if(!regExp.test(id)) return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primero lestras minuscular, los 7 restantes números`)
        }
    }
    validarArreglos(arreglo,propiedad){
        if(!arreglo instanceof Array) return console.error(`${propiedad} "${arreglo}", NO es un array`);
        if(arreglo.length<1) return console.error(`${propiedad} "${arreglo}", es un array vacío`)
        return true
    }
    validarTitulo(titulo){
        if(this.validarCadena('Titulo',titulo)){
            this.validarLongitudCadena('Titulo',titulo,100)
        }
    }
    validarDirector(director){
        if(this.validarCadena('Director',director)){
            this.validarLongitudCadena('Director',director,50)
        }
    }
    validarAnio(anio){
        if(typeof(anio)!=='number'||!Number.isInteger(anio) || anio<0)  return console.error(`El valor ${anio} entrado para el año no es un numero entero`);
        if(!/^([0-9]){4}$/.test(anio.toString())) return console.error(`El valor ${anio} ingresado para el año no tiene 4 digitos`); 
        return true;
    }
    validarPais(pais){
        this.validarArreglos(pais,'País o Paises');
    }
    validarGeneros(generos){
        if(this.validarArreglos(generos,'Generos')){
            if(!this.generosAceptados.includes(...generos)) return console.error(`Los generos ingresados(${generos}), no son válidos`);
        }
    }
    validarCalificacion(calificacion){
        if(typeof(calificacion)!=='number') return console.error(`La calificación "${calificacion}", No es un dato númerico`);
        if(calificacion<0 || calificacion>10) return console.error(`La calificación "${calificacion}", No es un valor entre 0 y 10`);
        let regExp=/^\d+(\.\d{1})?$/;
        if(!regExp.test(calificacion.toString())) return console.error(`La calificación "${calificacion}", No tiene el formato correspondiente`);

    }
    mostrarFichaTecnica(){
        return console.log(`Ficha Tecnica:\nTitulo: ${this.titulo}\nIMDb id: ${this.id}\nDirector: ${this.director}\nAño de estreno: ${this.estreno}\nPaís o paises donde fue realizada: ${this.pais.toString()}\nGenero(s): ${this.generos.toString()}\nCalificación: ${this.calificacion}`);
    }
    static mostrarGenerosPermitidos(){
        let generos=['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
        return console.log(`Los géneros permitidos son: ${generos.toString()}`)
    }
}

let peli=new Pelicula({id:'ls0255988',titulo:'Breaking Bad',director:'Vince Gilligan',estreno:2008, pais:['Estados Unidos','España'],generos:['Crime','Drama','Thriller'],calificacion:9.4});
peli.mostrarFichaTecnica();