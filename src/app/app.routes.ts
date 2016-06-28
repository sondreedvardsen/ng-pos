import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

export const routes: RouterConfig = [
    { path: 'category/:id', component: CategoryComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
