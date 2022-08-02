import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public name: string;
  products
  page: number = 1;
  itemsPerPage: number = 10;
  totalItems : any

  constructor(private route: ActivatedRoute, private srv: CategoriesService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getProducts()
  }

  getProducts() {

    this.srv.products(this.name, this.page).subscribe(categories => {
      this.products = categories.content;
      this.totalItems = categories.totalElements;
    })
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.getProducts()
}
}
