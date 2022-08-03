import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

import { RootObject, Image } from '../../shared/models/Categories';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromActions from '../+state/categories.actions';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryFacade } from '../+state/categories.facade';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, retry, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories$ = this.categoryFacade.allCategories$;
  categories;
  imageToShow: any;
  isImageLoading

  currVerifiedLoanOfficerPhoto: any;

  constructor(
     private srv: CategoriesService,
     private domSanitizer: DomSanitizer,
      private router: Router,
      private categoryFacade: CategoryFacade,
      private http: HttpClient,
      protected sanitizer: DomSanitizer
      ) {
        this.categoryFacade.loadCategories()
      }

  ngOnInit(): void {

    this.getImageFromService()
    // const id = "59e3562d8bee14115effd4da"
    // this.getImage(id).subscribe(image => {

    //   const blob = new Blob([image], {type: "image/png"});
    //   console.log("🚀 ~ file: home.component.ts ~ line 44 ~ HomeComponent ~ this.getImage ~ blob", image)
    //   this.imageToShow = image
    // })
  }

  getImage(id: string) : Observable<Blob>{

    const headers = new HttpHeaders({
      "Accept": "*/*"
    });

    const url = `https://www.nichea.co.za/nichea/file/${id}`;
    return this.http.get(url,{headers: headers, responseType: 'blob'});
  }


  getProducts(event, name) {
    event.preventDefault();
    const page = 1
    const sort = 'ASC'
    this.srv.products(name, page,sort).subscribe(categories => {
      console.log("🚀 ~ file: home.component.ts ~ line 48 ~ HomeComponent ~ getProducts ~ categories", categories)

      this.router.navigate([`/products/${name}`]);
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }


  getImageFromService() {
    const id = "59e3562d8bee14115effd4da"

    const url = `https://www.nichea.co.za/nichea/file/${id}`;
    this.isImageLoading = true;
    return this.http.get(url,{responseType: 'blob'}).subscribe(data => {
      console.log("🚀 ~ file: home.component.ts ~ line 89 ~ HomeComponent ~ returnthis.http.get ~ data", data)
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
}


}
