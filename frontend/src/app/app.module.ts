import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { BodyComponent } from './components/body/body.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppViewComponent } from './components/app-view/app-view.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { IsAuthService } from './services/Auth/is-auth.service';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftnavComponent,
    BodyComponent,
    AppViewComponent,
    InscriptionComponent,
    ProfilComponent,
    ConnexionComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [IsAuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
