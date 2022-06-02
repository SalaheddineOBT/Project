import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsComponent } from './components/cars/cars.component';
import { SavesComponent } from './components/saves/saves.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'details/:id',
        component : CarDetailsComponent
    },
    {
        path : 'home',
        component : HomeComponent,
        children : [
            {
                path : 'cars',
                component : CarsComponent
            },
            {
                path : 'saves',
                component : SavesComponent
            }
        ]
    },
    {
        path : '',
        redirectTo : '/login',
        pathMatch : 'full'
    },
    {
        path : '**',
        component : PageNotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    SavesComponent,
    CarsComponent,
    CarDetailsComponent
]