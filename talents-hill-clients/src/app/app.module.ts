import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientsComponent} from './clients/clients.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {ClientsProfileComponent} from './clients/clients-profile/clients-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsProfileComponent,
  ],
  entryComponents: [
    ClientsComponent,
    ClientsProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
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
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const clientsElement = createCustomElement(ClientsComponent, {injector: this.injector});
    customElements.define('thx-clients', clientsElement);
  }
}
