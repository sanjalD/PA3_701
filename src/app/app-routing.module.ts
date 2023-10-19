import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { InputFormComponent } from './input-form/input-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: 'display', component: DisplayDataComponent },
  { path: 'input', component: InputFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
