import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  constructor(
  	private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute,
    public toastCtrl: ToastController
  ) { }
 
  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) => {
  		this.id_pesan = data.id_pesan;
  		this.isi_pesan = data.isi;
  		this.dari = data.dari;
  		this.untuk = data.untuk
  		console.log(data);
  	});
  }

  async balas(){
  	
  		let body = {
  			aksi : 'balaspesan',
  			dari : this.untuk,
  			untuk : this.dari,
  			isi_pesan : this.isi_balasan
  		};
  		console.log(body);
  		this.postPvdr.postData(body, 'user/index_post').subscribe( async data => {
  			this.router.navigate(['/list']);
  			const toast = await this.toastCtrl.create({
          message: 'Berhasil membalas pesan',
          duration: 2000
          });
         toast.present();
  		 });
  }

}
