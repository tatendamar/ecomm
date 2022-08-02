import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

import { RootObject, Image } from '../../shared/models/Categories';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromActions from '../+state/categories.actions';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryFacade } from '../+state/categories.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories$ = this.categoryFacade.allCategories$;
  categories;

  constructor(
     private srv: CategoriesService,
     private domSanitizer: DomSanitizer,
      private router: Router,
      private categoryFacade: CategoryFacade
      ) {
        this.categoryFacade.loadCategories()
      }

  ngOnInit(): void {
    this.categoriesList()
  }


   async categoriesList() {
    
    await this.srv.categories().subscribe(categories => {
      this.categories = categories;
      const id = categories.map(item => item.image.id);
      this.getImage(id)
    })

  }

  getImage(id){
    this.srv.image(id).subscribe()
  }

  getProducts(event, name) {

    event.preventDefault();

    const page = 1
  
    this.srv.products(name, page).subscribe(categories =>{
      console.log("🚀 ~ file: home.component.ts ~ line 48 ~ HomeComponent ~ getProducts ~ categories", categories)

      this.router.navigate([`/products/${name}`]);
    }
   
    )

  }

}
