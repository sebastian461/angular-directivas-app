import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  selector: 'selector-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'sebastian@correo.com',
    first_name: 'Sebastián',
    last_name: 'Álava',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public counter = signal(10);

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;
      }

      return current;
    });
  }
}
