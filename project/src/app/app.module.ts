import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { TopComponent } from './navigator/top/top.component';
import { WallWrapperComponent } from './wall-wrapper/wall-wrapper.component';
import { TrendingComponent } from './trending/trending.component';
import { MoreComponent } from './more/more.component';
import { CountingAnimationComponent } from './counting-animation/counting-animation.component';
import { FooterComponent } from './footer/footer.component';
import { SaleComponent } from './sale/sale.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { MainComponent } from './main/main.component';
import { MenComponent } from './men/men.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ItemToBuyComponent } from './item-to-buy/item-to-buy.component';

import {appRoutes} from './app.routes'


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TopComponent,
    WallWrapperComponent,
    TrendingComponent,
    MoreComponent,
    CountingAnimationComponent,
    FooterComponent,
    SaleComponent,
    NewCollectionComponent,
    MainComponent,
    MenComponent,
    LeftNavComponent,
    ItemToBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
