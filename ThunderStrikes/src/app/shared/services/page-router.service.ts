import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingPages } from '../interfaces/routing-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class PageRouterService {
  constructor(private readonly router: Router) { }
  changeTo(page: RoutingPages): void {
    this.router.navigate([page]);
  }
}
