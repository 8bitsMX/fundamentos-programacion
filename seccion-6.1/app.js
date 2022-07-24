let persona1 = {
    nombre: 'Sabino',
    edad: 29
};
let persona2 = {
    nombre: 'Tania',
    edad: 25
};
let persona3 = {
    nombre: 'Fernanda',
    edad: 18
};

let personas = [persona1,persona2,persona3];

console.log(personas)

for(i = 0;i<personas.length;i++){
    //let persona = personas[i]
    //console.log(`${persona.nombre} -- ${persona.edad}`);
    console.log('nombre '+ personas[i]['nombre'] + ' -- ' + personas[i]['edad']);
}

//nombre persona -- edad