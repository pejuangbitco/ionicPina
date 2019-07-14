import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-detailpesan',
  templateUrl: './detailpesan.page.html',
  styleUrls: ['./detailpesan.page.scss'],
})
export class DetailpesanPage implements OnInit {

  isi_pesan: string = "";
  isi_balasan: string = "";
  dari: string = "";
  untuk: string = "";
  id_pesan: number;
  users:any;
  status:string;
  nama_user_sekarang:number;
  constructor(
  	private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute,
    private storage: Storage,
    public toastCtrl: ToastController
  ) { }
 
  ngOnInit() {

  	this.actRoute.params.subscribe((data: any) => {
  		this.id_pesan = data.id_pesan;
  		this.isi_pesan = data.isi;
  		this.dari = data.dari;
  		this.untuk = data.untuk  		
  	});
    if(!this.id_pesan) {
      let body = {
        aksi: 'getuser'
      }
      this.postPvdr.postData(body, 'user/index_post').subscribe( data => {
        this.users = data.result;
        // console.log("llll");
      });
    }
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.status = res.status;
      this.nama_user_sekarang = res.nama;
      console.log(this.status)      
    });
  }

  async balas(state){

  	if(state=='Berhasil membalas pesan') {
      let body = {
        aksi : 'balaspesan',
        dari : this.nama_user_sekarang,
        untuk : this.dari,
        isi_pesan : this.isi_balasan,
        id_pesan: this.id_pesan,
        dibalas: 1
      };
      console.log(body);
      this.postPvdr.postData(body, 'user/index_post').subscribe( async data => {
        this.router.navigate(['/list']);
        const toast = await this.toastCtrl.create({
          message: state,
          duration: 2000
          });
         toast.present();
       });
    } else {
  		let body = {
  			aksi : 'kirimpesan',
  			dari : this.nama_user_sekarang,
  			untuk : this.dari,
  			isi_pesan : this.isi_pesan
  		};
      console.log(body);
      this.postPvdr.postData(body, 'user/index_post').subscribe( async data => {
        this.router.navigate(['/list']);
        const toast = await this.toastCtrl.create({
          message: state,
          duration: 2000
          });
         toast.present();
       });
    }
  		
  }

}
