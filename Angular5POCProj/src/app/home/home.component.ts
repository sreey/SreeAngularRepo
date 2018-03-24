import { Component, OnInit } from '@angular/core';

import {UserProfile } from '../amo/user-profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userProfile: UserProfile = new UserProfile();
  constructor() {
  }

  ngOnInit() {
  }

}
