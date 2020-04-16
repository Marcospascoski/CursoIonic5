import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.scss'],
})
export class ModalInternoComponent implements OnInit {

  constructor( private modalCtrl: ModalController, private navParams: NavParams) {
    console.log(this.navParams.get("nome"));
  }

  ngOnInit() { }

  fecharModal() {
    this.modalCtrl.dismiss();
  }

}
