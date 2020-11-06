import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { TopComponent } from './navigator/top/top.component';
import { WallWrapperComponent } from './wall-wrapper/wall-wrapper.component';
import { TrendingComponent } from './trending/trending.component';
import { MoreComponent } from './more/more.component';
import { CountingAnimationComponent } from './counting-animation/counting-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TopComponent,
    WallWrapperComponent,
    TrendingComponent,
    MoreComponent,
    CountingAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
