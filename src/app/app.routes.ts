import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/vistas/template/template.component').then(m => m.TemplateComponent),
    children: [
        {
          path: 'eventos',
          loadComponent: () => import('../app/vistas/gestion-eventos/gestion-eventos.component').then(m => m.GestionEventosComponent)
        },
        {
          path: 'entradas',
          loadComponent: () => import('../app/vistas/entradas/entradas.component').then(m => m.EntradasComponent)
        },
        {
          path: '',
          redirectTo: 'eventos',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '**',
    redirectTo: 'eventos'
  }
];
