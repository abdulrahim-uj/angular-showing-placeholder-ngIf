import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentPersonsComponent } from '../first-component-persons/first-component-persons.component';
import { PersonInputComponent } from '../person-input/person-input.component';

const routes: Routes = [
  { path: '', component: FirstComponentPersonsComponent },
  { path: 'input', component: PersonInputComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
