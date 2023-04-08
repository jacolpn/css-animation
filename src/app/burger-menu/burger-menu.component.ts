import { Component } from '@angular/core';

@Component({
  selector: 'burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent {
  clicked: boolean;

  constructor() {
    this.clicked = false;
  }
}
