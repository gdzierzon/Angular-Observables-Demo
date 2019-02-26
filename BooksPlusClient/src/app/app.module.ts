import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { AjaxDemoComponent } from './ajax-demo/ajax-demo.component';
import { AsyncDemoComponent } from './async-demo/async-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ShoppingCartService } from './services/shopping-cart.service';
import { HeaderCartComponent } from './header-cart/header-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseDemoComponent,
    AjaxDemoComponent,
    AsyncDemoComponent,
    ObservableDemoComponent,
    HeaderCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
