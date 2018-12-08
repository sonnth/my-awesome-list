import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAwesomeComponent} from './list-awesome/list-awesome.component';
import {EditAwesomeComponent} from './edit-awesome/edit-awesome.component';

const routes: Routes = [
  {
    path: 'list-awesome',
    component: ListAwesomeComponent
  },
  {
    path: 'edit-awesome',
    component: EditAwesomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
