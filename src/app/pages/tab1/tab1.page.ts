import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service'


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  user: User;
  users: Observable<any>;
  contentLoaded: boolean = false;
  posts: any = [];
  page: number = 1;
  constructor(private authService: AuthService, private postsService: PostsService) {     
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000)
  }
  ngOnInit() {
    this.getdata(this.page);
  }

  getdata(page) {
    // Get the information from the API
    this.postsService.getComments(page).subscribe(result => {      
      let res: any = result;     
      this.posts = res.data;
      //this.contentLoaded = true;
    });
    }

    
  loadData(event){
    this.contentLoaded = false;
    this.page++;
    this.postsService.getComments(this.page).subscribe(result => {      
      let res: any = result;     
      for(const item of res.data){
        this.posts.push(item);
        this.contentLoaded = true;
        event.target.complete();
      }
    });
  }

  ionViewWillEnter() {
    /*this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );*/
  }

}

