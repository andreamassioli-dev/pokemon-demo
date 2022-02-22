import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { filter, map, Observable, tap } from "rxjs";
import { Breadcrumb } from "../../../models/breadcrumb";

@Component({
  selector: 'am-breadcrumb',
  template: `
    <div class="p-3">
      <span *ngFor="let breadcrumb of (breadcrumbs$ | async); let last = last">
        <span *ngIf="!last">
          <a [routerLink]="breadcrumb.route">{{ breadcrumb.name }}</a>
          <span class="mx-2">></span>
        </span>
        <b *ngIf="last">{{ breadcrumb.name }}</b>
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class BreadcrumbComponent {

  breadcrumbs$: Observable<Breadcrumb[]> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.mapToBreadcrumbs(this.router.routerState.snapshot.root))
  );

  constructor(
    private router: Router
  ) { }

  private mapToBreadcrumbs(rootRouteSnapshot: ActivatedRouteSnapshot): Breadcrumb[] {
    if (!rootRouteSnapshot.firstChild) {
      return [];
    }

    return this.buildBreadcrumbTrail(rootRouteSnapshot.firstChild, '');
  }

  private buildBreadcrumbTrail(routeSnapshot: ActivatedRouteSnapshot, baseRoute: string): Breadcrumb[] {
    const breadcrumbName = routeSnapshot.data['breadcrumb'];

    if (!breadcrumbName) {
      return [];
    }

    const route = `${baseRoute}${routeSnapshot.url[0].path}/`;

    return [
      {
        name: breadcrumbName,
        route
      },
      ...(routeSnapshot.firstChild ? this.buildBreadcrumbTrail(routeSnapshot.firstChild, route) : [])
    ];
  }

}
