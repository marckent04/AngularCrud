import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Observable, Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}
  PHP_API_SERVER = 'http://127.0.0.1/debut/backend/php';
  infos: object;
  userSubscription: Subscription;
  id: number;

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/r.php`);
  }


  createUser(user: User) {
    // return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/c.php`, user);
    this.httpClient
    .post(`${this.PHP_API_SERVER}/api/c.php`, user)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getUser(id: number) {
    
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/profile.php?id=${id}`);
      
  }

  connexion(mail) {
    
    return this.httpClient.get<object>(`${this.PHP_API_SERVER}/api/connexion.php?mail=${mail}`);
  }

}
