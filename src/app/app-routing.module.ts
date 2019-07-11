import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'detailpesan', loadChildren: './detailpesan/detailpesan.module#DetailpesanPageModule' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsPageModule' },
  { path: 'detailform', loadChildren: './detailform/detailform.module#DetailformPageModule' },
  { path: 'adduser', loadChildren: './adduser/adduser.module#AdduserPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
