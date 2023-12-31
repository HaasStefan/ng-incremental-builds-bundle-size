import { Component } from '@angular/core';
import { NonBuildableModule } from '@ng-incremental-builds-bundle-size/non-buildable';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, NonBuildableModule],
  selector: 'ng-incremental-builds-bundle-size-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'no-incremental-builds';
}
