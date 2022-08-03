import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { ProductsFacade } from '../../+state/products/products.facade';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectOrder: FormGroup;

  products$ = this.fac.allProducts$;
  public name: string;
  products
  page: number = 1;
  itemsPerPage: number = 10;
  totalItems : any;


  selectedLevel: string;



  sort = [
    {id:1, name: 'ASC'},
    {id:2, name:'DESC'}
  ]

  constructor(
    private route: ActivatedRoute,
    private srv: CategoriesService, 
    private fac: ProductsFacade,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.selectOrder = formBuilder.group({
        order: new FormControl('ASC', Validators.required),
      })
    }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getProducts()
  }


   getProducts() {
    const model =  {
      name: this.name,
      page: this.page,
      sort: this.selectOrder.value.order
    }

   this.fac.loadProducts(model)
    this.srv.products(this.name, this.page, this.selectOrder.value.order).subscribe(categories => {
      if(this.selectOrder.value.order === 'DESC'){
        this.products = categories.content.reverse();
        this.totalItems = categories.totalElements;
  
      }
      this.products = categories.content;
      this.totalItems = categories.totalElements;

      let currentUrl = this.router.url;
      this.router.navigateByUrl('.', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
    })
    
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.getProducts()
}
}
