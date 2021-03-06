import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: {
      role: 'admin'
    }
  },
  {
    path: 'mentor', loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule), canActivate: [AuthGuard], data: {
      role: 'mentor'
    }
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard], data: {
      role: 'user'
    }
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'terms', component: TermsComponent, pathMatch: 'full' },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
