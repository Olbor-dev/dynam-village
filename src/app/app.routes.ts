import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Au petit village'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Accueil'
    },
    {
        path: 'product/:id',
        component: DetailsComponent,
        title: 'Page produit'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'A propos'
    }
];
