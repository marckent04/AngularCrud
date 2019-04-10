import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  id: number;
  user: object = {id: null};
  
  selectedUser: User = {id: null, name: null, firstname: null, birth: null, gender: null, commune: null};
  constructor(private route: ActivatedRoute, private apiService: ApiService) {

  }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //this.apiService.getUser(+this.id);

    this.apiService.getUser(+this.id).subscribe(
      (data: any[]) => {
        this.selectedUser.id = data[0];
        this.selectedUser.name = data[1];
        this.selectedUser.firstname = data[2];
        this.selectedUser.birth = data[3];
        this.selectedUser.gender = data[4];
        this.selectedUser.commune = data[5];
      }
    );
    
    // this.selectedUser.id =
  }






}
