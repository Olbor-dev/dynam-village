import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Au petit village'
    },
    {
        path: 'accueil',
        component: HomeComponent,
        title: 'Accueil'
    },
    {
        path: 'product',
        component: DetailsComponent,
        title: 'Product'
    }
];
