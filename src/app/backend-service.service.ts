import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { AngularFireAuth } from '@angular/fire/compat/auth';
 import { UserService } from './UserService'; 

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  
  
  constructor(private http: HttpClient,private UserService: UserService,private afAuth: AngularFireAuth) { }

  save(user: any): Observable<any> {
    return this.http.post("https://login-22df8-default-rtdb.firebaseio.com/data.json", user);
  }



  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>("https://login-22df8-default-rtdb.firebaseio.com/data.json");
  }

  async login(email: string, password: string): Promise<any> {

  
   const users:any = await this.UserService.getUsers().toPromise();

  
   for (const userId in users ) {

  let userdata = users[userId]
     if (userdata.Email === email && userdata.Password === password) {
             return email;
     }
    }
   throw new Error("User not found or incorrect credentials");
 } catch (error:any) {
   console.error("Error fetching user data:", error);
   throw error;
 }
}
