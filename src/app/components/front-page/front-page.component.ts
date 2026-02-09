import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from 'src/app/route-animations';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  animations: [routeAnimations]
})
export class FrontPageComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
