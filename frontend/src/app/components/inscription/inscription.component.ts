import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {User} from '../../models/user';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  selectedUser: User = {id: null, name: null, firstname: null, birth: null, gender: null, commune: null};

  onSubmit(form: NgForm) {
    this.selectedUser.name = form.value['name'];
    this.selectedUser.firstname = form.value['fname'];
    this.selectedUser.birth = form.value['birth'];
    this.selectedUser.gender = form.value['gender'];
    this.selectedUser.commune = form.value['commune'];

    this.apiService.createUser(this.selectedUser);
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
