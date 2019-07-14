import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-inputform',
	templateUrl: './inputform.page.html',
	styleUrls: ['./inputform.page.scss'],
})
export class InputformPage implements OnInit {
	nama_form:any;
	row_data:any;
	status:string;
	nama_admin:string;
	inputId:any[];
	tanggal:string;
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
			this.nama_form = data.jenis;
			this.inputId = [];
		});
	}

	setVal(id_alat, kondisi) {
		this.inputId[id_alat] = kondisi.detail.value;
		console.log(this.inputId);
	}

	ionViewWillEnter(){
		this.storage.get('session_storage').then((res)=>{
			this.status = res.status;
			this.nama_admin = res.nama;
			this.row_data = [];
			this.loadForm();
		});
		
	}

	submitform() {
    if(this.inputId.length>=this.row_data.length) {
    	console.log('sama');
      this.inputId[0]=0;
      let body = {
        aksi: "submitform",
        jenis: this.nama_form,
        admin: this.nama_admin,
        data: this.inputId,
        tanggal: this.tanggal
      }
      console.log(body);

      this.postPvdr.postData(body, 'user/index_post').subscribe( async data => {
        this.router.navigate(['/forms']);
        const toast = await this.toastCtrl.create({
          message: data.msg,
          duration: 2000
          });
         toast.present();
       });  
    }
  }

  loadForm() {
    return new Promise(resolve => {
      let body = {
        aksi : 'getform',
        jenis : this.nama_form

      };

      this.postPvdr.postData(body, 'user/index_post').subscribe(data => {
        for(let r of data.result){
          this.row_data.push(r);
        }
        resolve(true);
      });
    }); 
  }
}
