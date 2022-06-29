import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    })
  }

  ngOnInit(): void {
  }

}
