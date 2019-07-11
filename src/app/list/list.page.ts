import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  id_user: number;
  user:any;
  pesans: any;
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
      this.user = res;
      this.id_user = this.user.nama;
      this.pesans = [];
      this.loadPesan();
      console.log(res);
    });
  	
  }

  lihatPesan(id_pesan,isi,dari,untuk) {
    let detailpesan = {
      id_pesan: id_pesan,
      isi: isi,
      dari: dari,
      untuk: untuk
    }
    this.router.navigate(['/detailpesan/', detailpesan]);
    // this.router.navigate(['login']);
  }

  coba() {
    console.log('aaaaaaaaa');
  }

  loadPesan(){
  	return new Promise(resolve => {
      console.log(this.id_user);
  		let body = {
  			aksi : 'getdatapesan',
        nama : this.user.nama
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
