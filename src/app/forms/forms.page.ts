import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  status:string;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
  ) {  	
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.status = res.status;   
    });
  }

  showForm(jenis) {  	
  	let tipe = {
  		jenis: jenis
  	}
  	this.router.navigate(['/detailform', tipe]);
  }

  inputForm(jenis) {
    let tipe = {
      jenis: jenis
    }
    this.router.navigate(['/inputform', tipe]);
  }

}
