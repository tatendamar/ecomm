import { Component, OnInit } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEnd-coding';
  helper = new JwtHelperService();

  constructor() {
  }

  ngOnInit(): void {
  }
}
