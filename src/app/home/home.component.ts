import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public productList : any ;
 
  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

  }

}


