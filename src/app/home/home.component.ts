import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../shared/logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Form Builder App';

  startItem = { title: 'Start the app!', link: '/forms' };

  sourceItem = {
    title: 'Source code',
    link: 'https://angular.dev/tools/devtools',
  };
}
