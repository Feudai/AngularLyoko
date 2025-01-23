import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    menus : Array<string>=["AELITA","ULRICH","ODE","UNKNOWN"];
  logo:string = "./assets/oui.png"
}
