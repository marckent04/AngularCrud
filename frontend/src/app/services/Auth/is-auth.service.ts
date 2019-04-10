import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  constructor() { }

  
  isAuth:boolean = false;

  Id:number = null;

  mail:number = null;


}
