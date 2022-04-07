import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  user:User = new User();

  response!:any;
  
  ngOnInit(): void {
  }
constructor(private communicationService: CommunicationService, private _router: Router){}
public validateCredentials(){
  this.response ="";

  console.log(this.user);
  let token = this.communicationService.generateToken(this.user);
    token.subscribe(data=>{
      if(data=="Invalid Username/Password"){
        this.response=data;
        this._router.navigate(["/login"]); 
      } else {
          this.communicationService.accessHomePage(data).subscribe(data1=>
            {
              this._router.navigate(['/dashboard']);
            }
            )
      }}      );     
 }

  title = 'Login Home';
}
