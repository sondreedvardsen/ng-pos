import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: RouterConfig = [
    {
        path: '',
        component: CategoryComponent
    },
    {
        path: 'category/:id',
        component: CategoryComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
