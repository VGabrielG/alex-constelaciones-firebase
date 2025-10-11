import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MiMusica } from './mi-musica/mi-musica';
import { ProductosAudiovisuales } from './productos-audiovisuales/productos-audiovisuales';
import { MiHistoria } from './mi-historia/mi-historia';
import { Contacto } from './contacto/contacto';
import { Clases } from './clases/clases';
import { ProximosEventos } from './proximos-eventos/proximos-eventos';
import { NoticiasComponent } from './noticias/noticias';

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
    },
    {
        path: 'Proximos-Eventos',
        component: ProximosEventos
    },
    {
        path: 'Noticias',
        component: NoticiasComponent
    }


];
