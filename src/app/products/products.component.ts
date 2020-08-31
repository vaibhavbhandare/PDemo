import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { DataService } from '../login/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers:[DataService]
})
export class ProductsComponent implements OnInit {
  productList: Array<Product>;
  isAdmin = true;
  constructor(private productservice: DataService) {
    this.productList = this.productservice.getProduct();
   }

  ngOnInit() {
  }

  delete(index: number) {
    this.productList.splice(index, 1);

  }

  validate(value) {
    console.log(value);

  }

  updatedvalue(value , i) {
     this.productList[i].price = value;
  }

}
