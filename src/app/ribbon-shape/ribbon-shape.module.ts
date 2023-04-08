import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonShapeComponent } from './ribbon-shape.component';



@NgModule({
  declarations: [RibbonShapeComponent],
  imports: [CommonModule],
  exports: [RibbonShapeComponent]
})
export class RibbonShapeModule { }
