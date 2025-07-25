import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MiMusica } from './mi-musica/mi-musica';

export const routes: Routes = [

    {
        path: '',
        component: Home
    },
    {
        path:'home',
        redirectTo:'',
        pathMatch:'full'
    },
    {
        path: 'mi-musica',
        component: MiMusica
    }

];
