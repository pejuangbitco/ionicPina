import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Profil',
      url: '/profil',
      icon: 'contact'
    },
    {
      title: 'Manage Form',
      url: '/peralatan',
      icon: 'copy'
    },
    {
      title: 'Manage User',
      url: '/users',
      icon: 'copy'
    },
    {
      title: 'Pesan',
      url: '/list',
      icon: 'mail'
    },
    {
      title: 'Pengaturan',
      url: '/pengaturan',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
