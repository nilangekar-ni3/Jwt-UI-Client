import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http : HttpClient) { }

  public generateToken(user: User){
    console.log("in the generate toekn");
     return this.http.post("http://localhost:8089/validateUser",user,{responseType : 'text' as 'json'})
  }
  public accessHomePage(token: any){
    let finalToken = 'Bearer '+token;
    const headers = new HttpHeaders().set("Authorization",finalToken);
    return this.http.get("http://localhost:8089/",{headers, responseType: 'text' as 'json'})

  }
  
}
