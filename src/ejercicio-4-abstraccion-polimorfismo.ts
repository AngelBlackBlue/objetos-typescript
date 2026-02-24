export abstract class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  abstract calcularSueldo(): number;
}

export class Ingeniero extends Persona {
  matricula: number;
  horasTrabajadas: number;
  valorPorHora: number = 45;

  constructor(nombre: string, edad: number, matricula: number, horasTrabajadas: number) {
    super(nombre, edad);
    this.matricula = matricula;
    this.horasTrabajadas = horasTrabajadas;
  }

  saludar(): string {
    return `Hola, soy el Ingeniero ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorPorHora
  }

}

export class Youtuber extends Persona {
  canalYoutube: string;
  seguidores: number;
  gananciaPorSeguidores: number = 5;

  constructor(nombre: string, edad: number, canalYoutube: string, seguidores: number) {
    super(nombre, edad);
    this.canalYoutube = canalYoutube;
    this.seguidores = seguidores;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años. Mi canal de youtube es ${this.canalYoutube}`;
  }

  calcularSueldo(): number {
    return this.seguidores * this.gananciaPorSeguidores;
  }

}

const datosIngeniero = {
  nombre: 'Angel',
  edad: 44,
  matricula: 123456,
  horasTrabajadas: 5

}

const ingeniero = new Ingeniero(
  datosIngeniero.nombre,
  datosIngeniero.edad,
  datosIngeniero.matricula,
  datosIngeniero.horasTrabajadas
);

console.log(ingeniero.saludar());
console.log(ingeniero.calcularSueldo())

const datosYoutuber = {
  nombre: 'Angel',
  edad: 44,
  canalYoutube: "nose_jaja",
  seguidores: 4000
}

const youtuber = new Youtuber(datosYoutuber.nombre, datosYoutuber.edad, datosYoutuber.canalYoutube, datosYoutuber.seguidores)

console.log(youtuber.saludar());
console.log(youtuber.calcularSueldo())

const personas: Persona[] = [ingeniero, youtuber]

console.log(personas.reduce((acumulador, rol) => {
  return acumulador + rol.calcularSueldo();
}, 0))