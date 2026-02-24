import { Persona, Ingeniero } from "../src/ejercicio-5-privacidad";

describe("Persona", () => {
  it("debería crear una persona con nombre y edad correctos", () => {
    const persona = new Persona("Angel", 30);

    expect(persona.nombre).toBe("Angel");
    expect(persona.saludar()).toBe(
      "Hola, soy Angel y tengo 30 años."
    );
  });
});

describe("Ingeniero", () => {
  it("debería heredar de Persona", () => {
    const ingeniero = new Ingeniero("Angel", 30, 3334, 40);

    expect(ingeniero).toBeInstanceOf(Persona);
  });

  it("debería crear un ingeniero con matrícula correcta", () => {
    const ingeniero = new Ingeniero("Angel", 30, 3334, 40);

    expect(ingeniero.nombre).toBe("Angel");
    expect(ingeniero.matricula).toBe(3334);
  });

  it("debería sobrescribir el método saludar()", () => {
    const ingeniero = new Ingeniero("Angel", 30, 3334, 40);

    expect(ingeniero.saludar()).toBe(
      "Hola, soy el Ingeniero Angel y tengo 30 años. Mi numero de matricula es 3334"
    );
  });

  it("debería calcular el sueldo correctamente", () => {
    const ingeniero = new Ingeniero("Angel", 30, 3334, 40);

    expect(ingeniero.calcularSueldo()).toBe(40 * 45);
  });

  it("debería permitir acceder a la edad solo mediante un método", () => {
    const ingeniero = new Ingeniero("Angel", 30, 3334, 40);

    expect(ingeniero.getEdad()).toBe(30);
  });

});