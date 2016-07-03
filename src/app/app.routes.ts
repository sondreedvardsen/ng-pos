import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'category/dash'
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
    }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
