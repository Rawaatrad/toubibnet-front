import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { SignUpService } from '../signUp.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {
  userInfo:User ={
    id:0,
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    password:"",
    roles:[],
  }
  constructor( private signUpService : SignUpService) { }

  ngOnInit() {
  }
  signUp(){
    this.signUpService.signUpUser(this.userInfo).subscribe(()=>{
      alert("SUCCESS")
    },
    (error) =>console.log(error)
    );
  }
}
