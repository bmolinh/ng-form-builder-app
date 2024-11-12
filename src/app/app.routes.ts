import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./forms/forms.component').then((c) => c.FormsComponent),
  },
  {
    path: 'forms/:id',
    loadComponent: () =>
      import('./forms/submission/submission.component').then((c) => c.SubmissionComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
