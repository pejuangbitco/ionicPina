import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  nama_user:string="";
  username_user:string="";
  password_user:string="";
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
  ) {
  
  }

  ngOnInit() {
  }

  createdProses() {
    let body = {
      aksi: 'adduser',
      username: this.username_user,
      nama: this.nama_user,
      password: this.password_user,
    }

    this.postPvdr.postData(body, 'user/index_post').subscribe( async data=>{
      if(data.success) {
        const toast = await this.toastCtrl.create({
          message: data.msg,
          duration: 2000
        });
        toast.present();
      }
    });
  	this.router.navigate(['/users']);
  }

}
