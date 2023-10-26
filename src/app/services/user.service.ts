import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      {
        name: 'Sofía',
        surname: 'Ibañez',
        age: 34,
      },
      {
        name: 'Gabriel',
        surname: 'García',
        age: 25,
      },
      {
        name: 'Ricardo',
        surname: 'Jiménez',
        age: 47,
      },
      {
        name: 'Adriana',
        surname: 'Román',
        age: 22,
      },
      {
        name: 'Ivanna',
        surname: 'Crespo',
        age: 31,
      },
      /* {
        name: 'John',
        surname: 'Perez',
        age: 40,
      } */
    ]
  }
}
