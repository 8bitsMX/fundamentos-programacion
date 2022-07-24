//CONVERIR DE LBS A KGM
let kg = 0.0;
let lb = 160;
let base = 2.2046;

kg = (lb)/(base);

kg *= 100;
kg = Math.round(kg);
kg /= 100;

console.log('LIBRAS: ' + lb + ' SON: ' + kg);


//KM A MILLAS
let millas = 0.0;
let km = 20;
let factor = 0.62;

millas = km * factor;
console.log('MILLAS: ' + millas);


//AREA TRIANGULO RECTANGULO
let b = 10;
let h = 5;
let area = (b*h)/2;
console.log('RESULTADO: ' + area);

//NUMERO MAYOR DENTRO DE UN ARRAY
let numeros = [1,6,8,4,2,7,10,3,5,50];
let numMayor = 0;
for(let i = 0; i <= numeros.length ;i++){
    console.log(numeros[i]);
    if(numeros[i] >= numMayor){
        numMayor = numeros[i];        
    }
}

console.log('El Número Mayor dentro del array es: ' + numMayor);

//PAR E IMPAR
let num = [1,6,8,4,2,7,10,3,5];
for(let j = 0; j < num.length; j++){
    if(num[j]%2 === 0){
        console.log('El número: ' + num[j] + ' es PAR');
    }else{
        console.log('El número: ' + num[j] + ' es IMPAR');
    }
}

//TABLA DE MULTIPLICAR
for(let k = 1;k <= 5;k++){        
    let renglon = '';
    for(let l = 1;l <= 5;l++){
        renglon +=(`${l * k}  `);
    }
    console.log(renglon);
}

//FUNCION MAYOR DE 3
function max(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;

    if(this.a > this.b && this.a > this.c){
        return 'A es el mayor';
    }else if(this.b > this.c && this.b > this.a){
        return 'B es el mayor';
    }else{
        return 'C es el mayor';
    }

}

let mayor = max(5,20,6);
console.log(mayor);

//FUNCION NOMBRE MAS LARGO
let heroes = ['Deadpool','Ciclope','Magneto','Profesor Xarles Xavier','Profesor Xarles Xavi'];

function masLargo(arr){
    let nombreLargo = '';
        for(let o = 0; o < arr.length; o++){
            let nombre = arr[o];

            if(nombre.length > nombreLargo.length){
                nombreLargo = nombre;
            }
        }

    return nombreLargo;
}

let heroeLargo = masLargo(heroes);
console.log(heroeLargo);

//ARRAY FILTRADO
let marvel = ['Doom','Ciclope','Dr. Strange','Hulk','She Hulk', 'Spiderman', 'Captain Marvel', 'Deadpool'];

function filtrarPorLetra(arrMarvel,letra){    
    this.letra = letra;
    let query = [];
        for(let p = 0; p < arrMarvel.length; p++){            
            let nombreMarvel = arrMarvel[p];

             if(nombreMarvel[0] === letra){
                query.push(nombreMarvel);
            }      
    }
          
    return query;
}

let marvelFiltrado = filtrarPorLetra(marvel, 'D');
console.log(marvelFiltrado);