import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        email: 'admin@example.com',
        password: 'kcb',
      },
    ];
    return { users };
  }

  genId(users: User[]): number {
    return users.length > 0
      ? Math.max(...users.map((user) => user.id!)) + 1
      : 0;
  }
}
