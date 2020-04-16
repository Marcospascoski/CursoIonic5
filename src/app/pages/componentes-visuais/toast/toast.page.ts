import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async toastSimples() {
    let toast = await this.toastCtrl.create({
      message: 'Ola mundo!',
      duration: 2000
    });

    toast.present();
  }

  async toastComOpcoes() {
    const toast = await this.toastCtrl.create({
      header: 'Cabeçalho Toast',
      message: 'Click para fechar',
      position: 'top',
      mode: 'md',
      translucent: true,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorito',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
