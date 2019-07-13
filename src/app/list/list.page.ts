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
      console.log(this.pesans);
    });
  	
  }

  lihatPesan(id_pesan,isi,dari,untuk) {
    let detailpesan = {
      id_pesan: id_pesan,
      isi: isi,
      dari: dari,
      untuk: untuk
    }
    this.router.navigate(['/detailpesan', detailpesan]);
    // this.router.navigate(['login']);
  }

  loadPesan(){
  	return new Promise(resolve => {
      // console.log(this.id_user);
  		let body = {
  			aksi : 'getpesan',
        nama : this.user.nama
  		};

  		this.postPvdr.postData(body, 'user/index_post').subscribe(data => {
  			for(let pesan of data.result){
  				this.pesans.push(pesan);
  			}
  			resolve(true);
  		});
  	});    
  }

  hapusPesan(id_pesan) {
      let body = {
        aksi : 'deletepesan',
        id_pesan : id_pesan
      };

      this.postPvdr.postData(body, 'user/index_post').subscribe(data => {        
        this.ionViewWillEnter();      
      });
  }

  addpesan() {
    this.router.navigate(['/detailpesan']);
  }

  doRefresh(event){
    setTimeout(() =>{
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event:any){    
    setTimeout(() =>{
    this.loadPesan().then(()=>{
      event.target.complete();
    });
    }, 500);
  }

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }
  
}
