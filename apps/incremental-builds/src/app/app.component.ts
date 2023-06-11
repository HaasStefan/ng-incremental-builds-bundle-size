import { Component } from '@angular/core';
import { BuildableModule } from '@ng-incremental-builds-bundle-size/buildable';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, BuildableModule],
  selector: 'ng-incremental-builds-bundle-size-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'incremental-builds';
}
