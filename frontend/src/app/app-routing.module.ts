import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppViewComponent } from './components/app-view/app-view.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
   {path: 'inscription', canActivate: [AuthGuardService], component: InscriptionComponent},
   {path: 'profile/:id', canActivate: [AuthGuardService], component: ProfilComponent},
   {path: 'users', canActivate: [AuthGuardService], component: AppViewComponent},
   {path: '', component: ConnexionComponent},
   {path: 'E404', component: Error404Component},
   {path: "**", redirectTo: '/E404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
