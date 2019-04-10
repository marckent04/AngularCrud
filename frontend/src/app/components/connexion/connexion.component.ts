import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IsAuthService } from 'src/app/services/Auth/is-auth.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  emailErr: string;
  mdpErr:string;
  constructor(private Auth: IsAuthService, private apiService: ApiService, private router: Router) { }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    this.apiService.connexion(form['mail']).subscribe((data)=> {
      this.emailErr = this.mdpErr = '';
      
      if (data) {
        if (data[8] != form['pass']) {
          this.mdpErr = 'Mot de passe incorrect';
        }
        else {
          this.Auth.isAuth = true;
          this.Auth.Id = data[0];
          this.Auth.mail = form['mail'];
          this.router.navigate(['/users']);

        }
      }
      else {
        this.emailErr = 'Email introuvable';
      }
    })
  }

  ngOnInit() {
  }

}
