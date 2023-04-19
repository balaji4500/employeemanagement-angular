import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'contact',component: ContactComponent },
 {path : 'view', component : ViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
