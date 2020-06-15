import { CalculoImcService } from './../shared/calculoimc.service';
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

  constructor(private calculoImc: CalculoImcService) { }

  onSubmit() {
    if (this.model.peso <= 0 && this.model.altura <= 0) {
      return;
    }

    const imc = this.calculoImc.calculaImc(this.model.peso, this.model.altura);
    const classificacao = this.calculoImc.getClassificacao(imc);
    const grauObesidade = this.calculoImc.getGrauObesidade(imc);

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
}
