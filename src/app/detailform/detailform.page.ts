import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.page.html',
  styleUrls: ['./detailform.page.scss'],
})
export class DetailformPage implements OnInit {

  nama_user:string;
  nama_form:any;
  row_data:any;
  status:string;
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
  	});
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.status = res.status;
      this.nama_user = res.nama;
      this.row_data = []; 
    });
    
  }

  lihatForm() {
    let data = {
      tanggal: this.tanggal,
      jenis: this.nama_form
    }
    this.router.navigate(['/cetakform', data]);
  }

}
