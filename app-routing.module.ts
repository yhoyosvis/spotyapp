import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './componentes/app.routes'

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
