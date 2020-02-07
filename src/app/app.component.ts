import { Component } from '@angular/core';
import { DataService } from './login/data.service';
import { HeaderAuthService } from './header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService,HeaderAuthService]
})
export class AppComponent {
  title = 'Angular Application';
}
