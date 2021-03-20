import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.getUsers();
  // this.getUser(2);
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

  getUser(id: number){
    this.http.get('https://localhost:5001/api/user/' + id).subscribe(response =>{
      this.user = response;
    }, error => {
      console.log(error);
    })
  }

}
