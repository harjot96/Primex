import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _location: Location, private platform: Platform,
    public alertController: AlertController) { }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
        console.log('Back press handler!');
        if (this._location.isCurrentPathEqualTo('/home')) {
          // Show Exit Alert!
          console.log('Show Exit Alert!');
          this.showExitConfirm();
          processNextHandler();
        } else {
          // Navigate to back page
          console.log('Navigate to back page');
          this._location.back();
        }
      });
    });
  }
  

     showExitConfirm ()  {
      this.alertController.create({
        header: 'App termination',
        message: 'Do you want to close the app?',
        backdropDismiss: false,
        buttons: [{
          text: 'Stay',
          role: 'cancel',
          handler: () => {
            console.log('Application exit prevented!');
          }
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      })
        .then(alert => {
          alert.present();
        });
    }
  }

