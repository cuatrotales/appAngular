import { Component, enableProdMode } from '@angular/core';


if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor() { }

}
