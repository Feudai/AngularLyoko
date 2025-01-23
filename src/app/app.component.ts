import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './page/home/home.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title : string = 'TP01';

}
