import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootObject, Image } from '../../shared/models/Categories';
import { ProductRootObject} from '../../shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesUrl = "https://www.nichea.co.za/nichea";

  constructor(private http: HttpClient) { }

  categories(): Observable<RootObject[]> {
    return this.http.get(`${this.categoriesUrl}/categories/all`).pipe(
      map((response: []) => {
      console.log("🚀 ~ file: categories.service.ts ~ line 18 ~ CategoriesService ~ map ~ response", response)

     
        return response.map(item => {
          const data: RootObject = {
            id: item['id'],
            description: item['description'],
            name: item['name'],
            image: item['image']
          };
          return data;
        });
      })
    )
  }

  // getImageData(): Observable<Image> {
  //   return this.http.get(`${this.categoriesUrl}/file/{}`, { responseType: 'blob' })
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )}


  products(name,page, sort): Observable<any> {
    return this.http.get(`${this.categoriesUrl}/products/${page}/10/${sort}/20/${name}?keyword=`).pipe(
      map(response => {
        if (!response){
          throw new Error("not found");
        }
        
        const data = Object.assign({}, response);
        return data
      }
      )
    )
  }


}
