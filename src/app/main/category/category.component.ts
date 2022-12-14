import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any;
  host = environment.BASE_API;
  page:number = 1;
  count:number = 0;
   public tablesize:number = 10;
  table_numberSize:any = [5,10,15];
  size:any = 5;
  formLSP!:FormGroup
  active=true;
  image:any;
  Mode = '0'
  constructor(private api:HttpClient) { }

  ngOnInit(): void {
    this.get();
    this.formLSP = new FormGroup({
      'txt_tenlsp': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  }
  get tenlsp() {
    return this.formLSP.get('txt_tenlsp')!;
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
    this.api.get(this.host+'/get_all_category').subscribe(data=>{
      this.categories = data;
    });
  }
  search(){
    let name = (<HTMLInputElement>document.getElementById('searchs')).value;
    console.log(name);
    this.api.get(this.host+'/Search?name='+name).subscribe(data=>{
       
      this.categories = data;
    });
  }

}
