import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminGuard } from './guards/admin.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "admin", 
    loadChildren: () => import('./components/admin-page/admin-page.module').then(m => m.AdminPageModule), 
    canActivate: [AdminGuard]
  },
  {
    path: "", 
    loadChildren: () => import('./components/front-page/front-page.module').then(m => m.FrontPageModule)
  },
  { path: "login", component: LoginPageComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
