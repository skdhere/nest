import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  user: User;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    /*this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );*/
  }

}
