import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  model: ICalculoModel = {
    altura: null,
    peso: null
  };

  result: IResult = null;

  constructor() { }

  onResultChange(result: IResult) {
    this.result = result;
  }
}
