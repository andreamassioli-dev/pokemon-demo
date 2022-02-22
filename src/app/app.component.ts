import { Component } from '@angular/core';

@Component({
  selector: 'am-root',
  template: `
    <div class="h-100 d-flex">
      <am-menu class="p-3"></am-menu>
      <div class="h-100 p-3 flex-fill d-flex flex-column">
        <am-breadcrumb class="me-2"></am-breadcrumb>
        <div class="flex-fill p-3 overflow-auto">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    am-menu {
      width: 400px;
      min-width: 400px;
    }
  `]
})
export class AppComponent {
  title = 'TestBreadcrumb';
}
