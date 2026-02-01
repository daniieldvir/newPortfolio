import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/pages/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('./components/pages/about/about').then(m => m.About) },
    { path: 'projects', loadComponent: () => import('./components/pages/projects/projects').then(m => m.Projects) }
];
