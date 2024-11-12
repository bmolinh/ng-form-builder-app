import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../shared/logo.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
