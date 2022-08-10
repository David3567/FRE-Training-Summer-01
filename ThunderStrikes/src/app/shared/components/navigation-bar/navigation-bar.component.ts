import { Component, OnInit } from '@angular/core';
import { RoutingPages } from '../../interfaces/routing-pages.interface';
import { PageRouterService } from '../../services/page-router.service';
@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
    routingPages: typeof RoutingPages;
    constructor(private readonly pageRouter: PageRouterService) { 
        this.routingPages = RoutingPages;
    }
    toPage(page: RoutingPages): void{
        this.pageRouter.changeTo(page);
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