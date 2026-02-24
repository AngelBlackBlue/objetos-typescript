
export interface Rol {
  rol(): string;

}

export class Ingeniero implements Rol {
  rol(): string {
    return 'desarrollador software';
  }

}

export class Youtuber implements Rol {
  rol(): string {
    return 'creandor de contenido para YouTube';
  }

}

export class Persona {
  private rol: Rol;

  constructor(rol: Rol ) {
    this.rol = rol
    
  }

  get getRol(): string {
    return `La persona es ${this.rol.rol()}`
  }

}

const rol = new Youtuber();

const persona = new Persona(rol);

console.log(persona.getRol)

