import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/category',
        pathMatch: 'full'
    },
    {
        path: 'category',
        component: CategoryNavComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: ':id',
                component: CategoryComponent
            }
        ]
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
