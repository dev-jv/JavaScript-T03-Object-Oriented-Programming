
//--------------------------------------------------------------------- public

// class Cliente{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo  = saldo;
//     }

//     mostrarInformacion(){
//         return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
//     }

//     static bienvenida() {
//         return `Bienbenido al cajero`
//     }
// }


// const juan = new Cliente('Juan', 200);
// console.log(juan.nombre);

//--------------------------------------------------------------------- private

class Cliente{

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida() {
        return `Bienbenido al cajero`
    }
}


const juan = new Cliente('Juan', 200);
console.log(juan.mostrarInformacion()); // De esta forma si
// console.log(juan.#nombre); //Error, no sepuede accder pues nombre es private

//--------------------------------------------------------------------- private [set and get]

// class Cliente{

//     #nombre;

//     setNombre(nombre){
//         this.nombre = nombre;

//     }

//     getNombre() {
//         return this.#nombre;
//     }

// }

// const juan = new Cliente();
// juan.setNombre('Juan'); // Ingresar
// console.log(juan.getNombre()); // Obtener