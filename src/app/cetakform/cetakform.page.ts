import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-cetakform',
	templateUrl: './cetakform.page.html',
	styleUrls: ['./cetakform.page.scss'],
})
export class CetakformPage implements OnInit {

	tanggal:string;
	jenis:string;
	row_data:any;

	constructor(
		private postPvdr: PostProvider,
		private router: Router,
		private actRoute: ActivatedRoute,
		private storage: Storage,
		public toastCtrl: ToastController
	) {
	}

	ngOnInit() {
		this.actRoute.params.subscribe((data: any) =>{
			this.tanggal = data.tanggal;
			this.jenis = data.jenis;
		});
	}

	ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
    	this.row_data = [];
      this.loadForm();
      // console.log(this.row_data);
    });
  }

  loadForm() {
    return new Promise(resolve => {
      let body = {
        aksi : 'lihatform',
        tanggal : this.tanggal,
        jenis: this.jenis

      };
      console.log(body)
      this.postPvdr.postData(body, 'user/index_post').subscribe(data => {
        for(let r of data.result){
          this.row_data.push(r);
        }
        resolve(true);
      });
    }); 
  }

  downloadForm() {
    
  }

}
