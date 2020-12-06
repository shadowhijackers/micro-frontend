import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import {createCustomElement} from "@angular/elements";

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
  ],
  entryComponents: [CategoriesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatPaginatorModule,
    MatChipsModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {

  constructor(private injector: Injector) {
    const categoriesElement = createCustomElement(CategoriesComponent, {injector: this.injector});
    customElements.define('thx-categories', categoriesElement);
  }

  ngDoBootstrap() {
 }
}
