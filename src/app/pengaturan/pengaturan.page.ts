import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
})
export class PengaturanPage implements OnInit {

  username: string;
  status: string;
  nama: string;
  id_user:number;
  password_baru:string;
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
      this.username = res.username;
      this.status = res.status;
      this.nama = res.nama;
      this.id_user = res.id_user;
      // console.log('res profil:'+res);
    });
  }

  async updatePassword() {
  	let body = {
  		aksi: 'ubah_password',
  		password_baru: this.password_baru,
  		id_user: this.id_user
  	}

  	this.postPvdr.postData(body, 'user/index_post').subscribe(async data => {
  		if(data.success) {
  			const toast = await this.toastCtrl.create({
		      message: data.msg,
		  	  duration: 2000
		      });
		  toast.present();	
  		}
  	});
  }

}
