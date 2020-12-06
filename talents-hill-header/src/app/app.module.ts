import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  entryComponents: [HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {
    const headerElement = createCustomElement(HeaderComponent, {injector: this.injector});
    customElements.define('thx-header', headerElement);
  }

  ngDoBootstrap() {

  }
}
