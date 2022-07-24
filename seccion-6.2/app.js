//definir objeto
/*let carro = {
    marca: 'Toyota',
    tipo: 'sedan'
}*/

//definimos la clase
class Carro{
    constructor(marca,tipo,puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

        encenderCarro(){
            if (this.encendido){
                console.log('El carro ya está encendido');
            }else{

                this.encendido = true;
                console.log('El carro encendido');
            }
            return this;
        }
        realizarViaje(consumo){
           /* if (this.encendido === false|| consumo > this.gasolina){
                return 'No cuentas con suficiente o el carro se encuentra apagado, Combustible restante: ' + this.gasolina + '%' + ' estado del auto es: ' + this.encendido;
            }else{
                this.gasolina = this.gasolina - consumo;
                return 'Combustible restante: ' + this.gasolina + '%';
            }*/
            
            if(!this.encendido) return console.log('Carro Apagado');
            if(consumo > this.gasolina) return console.log('No cuentas con suficiente combustible, restante: ' + this.gasolina);
            
            this.gasolina = this.gasolina - consumo;
            return 'Combustible restante: ' + this.gasolina + '%';
        }   
}

//instanciamos el objeto
let carro = new Carro('Mazda', 'Sedan',4);
console.log(carro);