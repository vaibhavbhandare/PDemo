import { Component } from '@angular/core';
import { DataService } from './login/data.service';
import { HeaderAuthService } from './header.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatDialog } from '@angular/material/dialog';
import { SignUpFormComponent } from './signup/signupform.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, HeaderAuthService]
})
export class AppComponent {
  title = 'Angular Application';
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignUpFormComponent, {
      width: '250px', height: '500px'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
     // console.log('The dialog was closed');
      console.log(result);
    });
  }


}
