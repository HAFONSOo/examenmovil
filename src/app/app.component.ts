
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      console.log(user ? 'Usuario autenticado' : 'No autenticado');
    });
  }
}