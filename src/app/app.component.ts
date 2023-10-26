import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ProgramacionReactivaMartinez';
  users: any;
  subscription: Observable<Number>;

  getClock(): Observable<Number> {
    return new Observable((subscriber) => {
      let count = 0;
      setInterval(() => {
        count++;
        subscriber.next(count);
        if (count === 12) subscriber.complete();
      }, 1000);
    });
  }

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();

    const countUsers = new Promise((resolve, reject) => {
      const count = this.users.length;
      setTimeout(() => {
        if (count <= 5) {
          resolve(`Hay ${count} usuarios registrados`);
        } else {
          reject(`Hay más usuarios que los permitidos`)
        }
      }, 2000);
    });

    countUsers
      .then((result) => alert(result))
      .catch((error) => alert(error));

    this.subscription = this.getClock()
    
    this.subscription.subscribe({
      next: (v) => { console.log(v) },
      error: (error) => { alert(error) },
      complete: () => { 
        alert('Han pasado 10 segundos desde que hizo click en aceptar');
      }
    });
  }
}
