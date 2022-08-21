import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( ev ) {
    console.log(ev.detail.value);
    this.porcentaje = ev.detail.value /100;
  }

}
