import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  host = environment.BASE_API;
  page:number = 1;
  count:number = 0;
   public tablesize:number = 10;
  table_numberSize:any = [5,10,15];
  size:any = 5;
  formSP!:FormGroup
  active=true;
  image:any;
  Mode = '0'
  constructor(private api:HttpClient) { }

  ngOnInit(): void {
    this.get();
    this.formSP = new FormGroup({
      'txt_tensp': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'txt_giatien': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'txt_email': new FormControl('', [Validators.email]),
      'txt_address': new FormControl('', [Validators.required]),
      'txt_mota': new FormControl(''),
      'txt_soluong': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'txt_donvi': new FormControl(''),
    });
  }
  get tensp() {
    return this.formSP.get('txt_tensp')!;
  }
  get giatien() {
    return this.formSP.get('txt_giatien')!;
  }
  get mota() {
    return this.formSP.get('txt_mota')!;
  }
  get soluong() {
    return this.formSP.get('txt_soluong')!;
  }
  
  get donvi() {
    return this.formSP.get('txt_donvi')!;
  }
  add_Product(item:any){
    this.image = document.getElementById('files');
    var obj ={
    name: item.txt_tensp,
    idLoaiSp: "1",
    idNcc: "1",
    motaSp: "abcd",
    unitPrice: item.txt_giatien,
    soLuong: item.txt_soluong,
    image :this.image.files[0].name,
    donViTinh: item.txt_donvi,
    }
    console.log(obj);
    this.api.post(this.host+'/add_Sp',obj).subscribe(data => {
      if(data){
        alert("success");
        this.get();
      }
    })
  }
  sizeChange(event:any):void{
    this.tablesize = event.target.value; debugger
    this.page = 1;
    this. get();
  }
  dataChange(event:any):void{
    this.page = event;
  }
  close(){
    this.active = true;
  }
  Show(value:any){
      if(value==this.Mode){
      this.active=false;
      }
  }
  get():void{
    this.api.get(this.host+'/get_list_product').subscribe(data=>{
      this.product = data;
    });
  }
  search(){
    let name = (<HTMLInputElement>document.getElementById('searchs')).value;
    console.log(name);
    this.api.get(this.host+'/Search?name='+name).subscribe(data=>{
       
      this.product = data;
    });
  }
}
