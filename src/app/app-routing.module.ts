import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '', component:SigninComponent},
  {path: 'rectiveForm', component: AppComponent},
  {path: 'user-data', component: DynamicFormComponent},
  {path: 'first', component: DynamicFormComponent},
  {path: 'second', component: DynamicFormComponent},
  {path: 'third', component: DynamicFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
