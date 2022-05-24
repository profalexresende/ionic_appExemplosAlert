/* eslint-disable radix */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string;

  constructor(public toastController: ToastController,
    public alertController: AlertController,
    private router: Router) {}

    async exibirToast(mensagem: string) {
      const toast = await this.toastController.create({
        message: mensagem,
        duration: 2000
      });
      toast.present();
    }

    async alertaEntrada() {
      const alert = await this.alertController.create({
        header: 'Exemplo Input',
        inputs: [
          {
            name: 'inputNome',
            type: 'text',
            placeholder: 'Digite seu nome'
          },
          {
            name: 'inputIdade',
            type: 'number',
            placeholder: 'Idade',
            max:5,
            min:0
          },
          {
            name: 'inputNascimento',
            type: 'date',
            max:'2022-05-31',
            min:'2022-01-01'
          },
          {
            name: 'inputHora',
            type: 'time'
          },
          {
            name: 'inputDataHora',
            type: 'datetime-local'
          },
          {
            name: 'inputSenha',
            type: 'password'
          }
        ],
        buttons: [
           {
            text: 'Ok',
            handler: (valor: any) => {
                this.nome=valor['inputNome'];
              }
            }
        ]
      });

      await alert.present();
    }

  abrirTela(){
    this.router.navigateByUrl(`/teste/${this.nome}`);
  }
}
