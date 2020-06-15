import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoImcService {

  constructor() { }

  calculaImc(peso: number, altura: number) {
    return peso / (altura * altura);
  }

  getClassificacao(imc: number) {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'Obesidade';
    } else {
      return 'Obesidade grave';
    }
  }

  getGrauObesidade(imc: number) {
    if (imc < 18.5) {
      return '0';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return '0';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'I';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'II';
    } else {
      return 'III';
    }
  }
}
