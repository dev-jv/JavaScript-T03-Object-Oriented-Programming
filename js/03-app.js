class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida() {
        return `Bienbenido al cajero`
    }
}

// Herencia
class Empresa extends Cliente{
    constructor (nombre, saldo, telefono, categoria){
        
        super(nombre, saldo); // Forma de llamar al constructor padre
        // this.nombre = nombre;
        // this.saldo = saldo;
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienbenido al cajero de la empresa` // Sobreescribir al método del padre
    }
}

const juan = new Cliente ('Juan', 400 );


const empresa = new Empresa('Dinosaurios T-800!', 5000000, 933173456, 'Entretenimiento')

console.log(empresa);

console.log(empresa.mostrarInformacion()); // Hereda el método también

console.log(Cliente.bienvenida()); // Usa la clase
console.log(Empresa.bienvenida()); // Usa la clase
