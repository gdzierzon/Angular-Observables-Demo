import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjaxDemoComponent} from './ajax-demo/ajax-demo.component';
import {ObservableDemoComponent} from './observable-demo/observable-demo.component';
import {PromiseDemoComponent} from './promise-demo/promise-demo.component';
import {AsyncDemoComponent} from './async-demo/async-demo.component';

const routes: Routes = [
  {path: 'ajax', component: AjaxDemoComponent},
  {path: 'promises', component: PromiseDemoComponent},
  {path: 'async', component: AsyncDemoComponent},
  {path: 'observable', component: ObservableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
