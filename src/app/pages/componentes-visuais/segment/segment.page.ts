import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSegmentButton } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, { static: true } ) segment: IonSegmentButton;
  opcaoSelecionada: any;
  constructor() { }

  ngOnInit() {
    this.selecionado();
  }

  segmentChanged(ev: any) {}

  selecionado() {
    this.opcaoSelecionada = this.segment.value = 'frutas';
  }

  proximaAba() {
    this.opcaoSelecionada = 'cores';
  }

  anteriorAba() {
    this.opcaoSelecionada = this.segment.value = 'frutas';
  }

}
