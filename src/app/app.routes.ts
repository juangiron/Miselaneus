import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { USUARIO_ROUTES } from './componets/usuario/usuario.routes';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id', 
        component: UsuarioComponent,
        children: USUARIO_ROUTES 
        //[   //se remplaza lo comentado por el archivo usuario/usuario.routes.ts
        //     { path: 'nuevo', component: UsuarioNuevoComponent },
        //     { path: 'editar', component: UsuarioEditarComponent },
        //     { path: 'detalle', component: UsuarioDetalleComponent }
        //     { path: '**', pathMatch: 'full', redirectTo: 'editar'},
        // ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
