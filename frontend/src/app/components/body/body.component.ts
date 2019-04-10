import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service';
import { User } from '../../models/user';
import { IsAuthService } from 'src/app/services/Auth/is-auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  connected = {
    'mail' : null,
    'id': null
  }
  users: User[];
  selectedUser: User = {id: null, name: null, firstname: null, birth: null, gender: null, commune: null};
  constructor(private apiService: ApiService, private Auth: IsAuthService) { }

  ngOnInit() {

      this.apiService.getUsers().subscribe((users: User[])=>{
      this.users = users;
      this.connected.id = this.Auth.Id;
      this.connected.mail = this.Auth.mail;

    })
  }

}
