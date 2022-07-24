function describirPersona(p) {  
    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);    
}
//objeto
let persona = {
    //propiedades
    nombre: 'Sabino RM',
    edad: 29,
    estatura: 1.72,
    peso: 106
};

describirPersona(persona);
