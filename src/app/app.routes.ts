import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MiMusica } from './mi-musica/mi-musica';
import { ProductosAudiovisuales } from './productos-audiovisuales/productos-audiovisuales';
import { MiHistoria } from './mi-historia/mi-historia';
import { Contacto } from './contacto/contacto';
import { Clases } from './clases/clases';

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
        path: 'Mi-Musica',
        component: MiMusica
    },
    {
        path: 'Productos-Audiovisuales',
        component: ProductosAudiovisuales
    },
    {
        path:'Mi-Historia',
        component: MiHistoria
    },
    {
        path: 'Contacto',
        component: Contacto
    },
    {
        path: 'Clases',
        component: Clases
    }


];
