import { Component, OnInit } from '@angular/core';
import { DataService } from '../login/data.service';
import { Product } from '../products/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  productList: Array<Product>;
  constructor(private dstaser: DataService,
              private activatedroute: ActivatedRoute) {
    this.productList = this.dstaser.getProduct();
  }

  public id: any;
  ngOnInit() {
    this.activatedroute.params.subscribe((data) => {
      this.id = Number(data.abc);
    });
  }

}
