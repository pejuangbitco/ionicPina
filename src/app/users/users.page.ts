import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  pesans: any;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  	this.pesans = [];
  	this.loadPesan();
  }

  loadPesan(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdatapesan'
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let pesan of data.result){
  				this.pesans.push(pesan);
  			}
  			resolve(true);
  		});
  	});
  }
}
