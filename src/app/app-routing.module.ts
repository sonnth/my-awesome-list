import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAwesomeComponent} from './list-awesome/list-awesome.component';
import {EditAwesomeComponent} from './edit-awesome/edit-awesome.component';
import {AddAwesomeComponent} from './add-awesome/add-awesome.component';

const routes: Routes = [
  {
    path: 'list-awesome',
    component: ListAwesomeComponent
  },
  {
    path: 'edit-awesome',
    component: EditAwesomeComponent
  },
  {
    path: 'add-awesome',
    component: AddAwesomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
