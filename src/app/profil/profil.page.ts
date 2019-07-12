import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  admin: any;
  username: string;
  status: string;
  nama: string;
  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.admin = res;
      this.username = this.admin.username;
      this.status = this.admin.status;
      this.nama = this.admin.nama;
      console.log('res profil:'+res);
    });
  }

  manage_user() {
    this.router.navigate(['/users']);
  }
}
