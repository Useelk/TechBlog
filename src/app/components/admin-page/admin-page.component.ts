import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from 'src/app/route-animations';
import { Section } from 'src/app/providers/section';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations: [routeAnimations]
})
export class AdminPageComponent {
  links: Section[] = [
    { name: "Dashboard", link: "dashboard" },
    { name: "Posts", link: "posts" },
    { name: "Menus", link: "menus" },
  ];

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
