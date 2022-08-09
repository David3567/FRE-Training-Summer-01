import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

    constructor(private router: Router) { }
    toHomePage(): void {
        this.router.navigate(['']);
    }

    // will add routing to all below after merge, also need to pass account ID: number as each page will differ based on ID
    toMovieList(): void {

    }
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