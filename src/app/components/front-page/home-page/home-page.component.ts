import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/posts/post.service';
import { MenusService } from 'src/app/services/menus/menus.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  postCount = 0;
  menuCount = 0;

  constructor(
    private posts: PostService,
    private menus: MenusService
  ) {}

  ngOnInit(): void {
    this.posts.getPosts().subscribe(posts => this.postCount = posts.length);
    this.menus.getMenus().subscribe(menus => this.menuCount = menus.length);
  }
}
