export class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`
  }

}

export class Ingeniero extends Persona {

  matricula: number;

  constructor(nombre: string, edad: number, matricula: number) {
    super(nombre, edad);
    this.matricula = matricula;
  }

  saludarProfesionalmente(): string {
    return `Hola, soy el Ingeniero ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }

}

export class IngenieroSobreescrito extends Persona {
  matricula: number;

  constructor(nombre: string, edad: number, matricula: number) {
    super(nombre, edad);
    this.matricula = matricula;
  }

  // Method override
  saludar(): string {
    return `Hola, soy el Ingeniero ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }

  saludarProfesionalmente(): string {
    return `Hola, soy el Ingeniero ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }


}

const datosIngeniero = {
  nombre: 'Angel',
  edad: 44,
  matricula: 123456
}

const ingeniero = new Ingeniero(
  datosIngeniero.nombre,
  datosIngeniero.edad,
  datosIngeniero.matricula
);

console.log(ingeniero.nombre)
console.log(ingeniero.edad)
console.log(ingeniero.matricula)
console.log(ingeniero.saludar())
console.log(ingeniero.saludarProfesionalmente())
