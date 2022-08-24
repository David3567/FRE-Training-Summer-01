import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.services';
import { RoutingPages } from '../../../../shared/interfaces/routing-pages.interface';
@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    routingPages: typeof RoutingPages;
    readonly restrictedUrls: string[] = ['/', '/login', '/register'];
    constructor(private readonly router: Router, private readonly authService: AuthService) {
        this.routingPages = RoutingPages;
    }

    get username(): string | undefined{
        return this.authService.username;
    }
    get isLoggedIn(): boolean{
        return this.authService.isLoggedIn;
    }

    signOut(){
        this.authService.signOut();
    }
    // will add routing to all below after merge, also need to pass account ID: number as each page will differ based on ID
    toSearch(): void {

    }
    toBookmarks(): void {

    }
    toAccountPage(): void {

    }
    toSettingsPage(): void {

    }
    ngOnInit() {
    }

}