import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu.component';



@NgModule({
  declarations: [BurgerMenuComponent],
  imports: [CommonModule],
  exports: [BurgerMenuComponent]
})
export class BurgerMenuModule { }
