import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  @Output()
  resultChange = new EventEmitter<IResult>();

  model: ICalculoModel = {
    altura: null,
    peso: null
  };

  constructor() { }

  onSubmit() {
    if (this.model.peso <= 0 && this.model.altura <= 0) {
      return;
    }

    const imc = this.calculaImc(this.model.peso, this.model.altura);
    const classificacao = this.getClassificacao(imc);
    const grauObesidade = this.getGrauObesidade(imc);

    console.log(imc);
    console.log(classificacao);
    console.log(grauObesidade);

    const result: IResult = {
      imc,
      classificacao,
      grauObesidade
    };

    this.resultChange.emit(result);
  }

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
