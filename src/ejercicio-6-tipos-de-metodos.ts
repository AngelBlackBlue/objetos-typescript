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
  horasTrabajadas: number;
  valorPorHora: number = 45;
  static profesion: string = "Ingeniero";

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

  getEdad(): number {
    return this.edad;
  }

  static getProfesion(): string {
    return this.profesion;
  }
  

}
