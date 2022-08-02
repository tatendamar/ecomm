import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { HomeComponent } from './pages/home/home.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './pages/+state/categories.effects';
import { ProductsComponent } from './pages/home/products/products.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CategoryFacade } from './pages/+state/categories.facade';
import { CATEGORIES_FEATURE_KEY } from './pages/+state/category.state';
import { reducer } from './pages/+state/categories.reducer';


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [] // [storeFreeze, debug]
  : [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    
    StoreModule.forRoot({}),
    StoreModule.forFeature(CATEGORIES_FEATURE_KEY, reducer),
    EffectsModule.forRoot([CategoriesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
    
  ],
  providers: [CategoryFacade],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
