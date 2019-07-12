import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.page.html',
  styleUrls: ['./detailform.page.scss'],
})
export class DetailformPage implements OnInit {

  nama_form:any;
  // row_data:string[] = [
  // 	'DFR TLKLP 1,2',
  // 	'DFR SJARO 1,2',
  // 	'DFR BTRJA 1,2',
  // 	'DFR GUMEG 1,2', 
  // 	'DFR MRINA 1,2',
  // 	'DFR KRSAN 1,2',
  // 	'DFR PBLIH 1,2',
  // 	'DFR KRSAN 1,2',
  // 	'DFR TLKLP - TLDKU',
  // 	'DFR GUMEG 1,2',
  // 	'DFR KRSAN 1,2'
  // ];
  row_data:string[]=[
  	'RoIP Palembang-Lokal',
  	'Kantor UPB Sumbagsel',
  	'Repeater Palembang',
  	'Kantor UPB Sumbagsel',
  	'GI Keramasan',
  	'PLTG 1 Keramasan',
  	'PLTG 2 Keramasan',
  	'PLTG 3 Keramasan',
  	'PLTD Sungai Juaro',
  	'PLTG AGP Borang'
  ];

  constructor(
  	private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
  	
  	this.actRoute.params.subscribe((data: any) =>{
  		
  		this.nama_form = data.jenis
  		console.log(data);
  	});
  }

}
