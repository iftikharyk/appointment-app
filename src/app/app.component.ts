import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome, User';
  theList: object[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<object[]>('../assets/data.json').subscribe(data => {
      console.log(data);
      this.theList = data;
    });
  }
}
