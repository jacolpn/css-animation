import { BubbleAnimatedModule } from './bubble-animated/bubble-animated.module';
import { LoginAnimatedModule } from './login-animated/login-animated.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { ListSocialMediaModule } from './list-social-media/list-social-media.module';
import { TextRollModule } from './text-roll/text-roll.module';

import { AppComponent } from './app.component';
import { BoxShadowModule } from './box-shadow/box-shadow.module';
import { BurgerMenuModule } from './burger-menu/burger-menu.module';
import { RibbonShapeModule } from './ribbon-shape/ribbon-shape.module';
import { PopupBoxModule } from './popup-box/popup-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ListSocialMediaModule,
    TextRollModule,
    LoginAnimatedModule,
    BubbleAnimatedModule,
    BoxShadowModule,
    BurgerMenuModule,
    RibbonShapeModule,
    PopupBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
