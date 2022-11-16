import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BubbleAnimatedComponent } from './bubble-animated.component';

@NgModule({
  declarations: [BubbleAnimatedComponent],
  imports: [CommonModule],
  exports: [BubbleAnimatedComponent]
})
export class BubbleAnimatedModule { }
