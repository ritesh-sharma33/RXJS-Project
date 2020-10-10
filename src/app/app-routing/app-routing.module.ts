import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { PromiseComponent } from '../promise/promise.component';

const routes: Routes = [
  { path: "promise", component: PromiseComponent },
  { path: "**", redirectTo: "promise" }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }