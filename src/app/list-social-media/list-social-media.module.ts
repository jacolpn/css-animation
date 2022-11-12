import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListSocialMediaComponent } from './list-social-media.component';

@NgModule({
  declarations: [ListSocialMediaComponent],
  exports: [ListSocialMediaComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class ListSocialMediaModule { }
