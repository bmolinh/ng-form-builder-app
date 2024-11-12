import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../shared/logo.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Form Builder App';

  sourceCodeUrl = environment.sourceCodeUrl;
  profileCodeUrl = environment.profileCodeUrl;
}
