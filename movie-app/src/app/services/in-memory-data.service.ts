import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const users: User[] = [
      {
        email: 'admin@example.com',
        password: 'kcb'
      }
    ];
    return { users };
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map((user) => user.id!)) + 1 : 0;
  }
}
