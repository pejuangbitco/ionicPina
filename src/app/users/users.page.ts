import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  dataDB: any;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  	this.dataDB = [];
  	this.loadDataDB();
  }

  loadDataDB(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdatauser'
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let d of data.result){
  				this.dataDB.push(d);
  			}
  			resolve(true);
  		});
  	});
  }

  adduser() {
    this.router.navigate(['/adduser']);
  }
}
