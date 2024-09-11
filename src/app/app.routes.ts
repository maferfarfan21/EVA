import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlantIdentifyComponent } from './plant-identify/plant-identify.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'plant-identify', component: PlantIdentifyComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
