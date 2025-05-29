// src/models/Questionario.ts

export interface Preguntes {
  pregunta1: string;
  pregunta2: string;
  pregunta3: string;
  pregunta4: string;
  pregunta5: string;
  pregunta6: string;
}

export class Questionario {
  Edad: string;
  Puntuacion: number;
  preguntes: Preguntes;

  constructor() {
    this.Edad = "";
    this.Puntuacion = 0;
    this.preguntes = {
      pregunta1: "",
      pregunta2: "",
      pregunta3: "",
      pregunta4: "",
      pregunta5: "",
      pregunta6: ""
    };
  }

  seleccionarRespuesta(pregunta: keyof Preguntes, respuesta: string, puntuacion: number) {
    this.preguntes[pregunta] = respuesta;
    this.Puntuacion += puntuacion;
  }
}