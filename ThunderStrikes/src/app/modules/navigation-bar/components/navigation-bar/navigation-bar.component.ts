import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingPages } from '../../../../shared/interfaces/routing-pages.interface';
@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    routingPages: typeof RoutingPages;
    readonly restrictedUrls: string[] = ['/', '/login', '/register'];
    constructor(readonly router: Router) {
        this.routingPages = RoutingPages;
    }
    get isRestrictedUrl() {
        return this.restrictedUrls.includes(this.router.url) ? true : false;
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