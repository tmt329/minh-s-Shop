import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { TopComponent } from './navigator/top/top.component';
import { WallWrapperComponent } from './wall-wrapper/wall-wrapper.component';
import { TrendingComponent } from './trending/trending.component';
import { MoreComponent } from './more/more.component';
import { FooterComponent } from './footer/footer.component';
import { SaleComponent } from './sale/sale.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { MainComponent } from './main/main.component';
import { MenComponent } from './men/men.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ItemToBuyComponent } from './item-to-buy/item-to-buy.component';

import {appRoutes} from './app.routes';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component'
import{HttpClientModule} from '@angular/common/http';
import { MenCollectionComponent } from './men-collection/men-collection.component';
import { WomenCollectionComponent } from './women-collection/women-collection.component';
import { KidCollectionComponent } from './kid-collection/kid-collection.component';
import { BagComponent } from './bag/bag.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { UserInforComponent } from './user-infor/user-infor.component';
import { AdminComponent } from './admin/admin.component'
import{AuthGuard} from './services/guards/auth.guard';
import { SortPipe } from './pipe/sort.pipe'
import { AdminGuard } from './services/guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TopComponent,
    WallWrapperComponent,
    TrendingComponent,
    MoreComponent,
    
    FooterComponent,
    SaleComponent,
    NewCollectionComponent,
    MainComponent,
    MenComponent,
    LeftNavComponent,
    ItemToBuyComponent,
    RegisterComponent,
    SignInComponent,
    MenCollectionComponent,
    WomenCollectionComponent,
    KidCollectionComponent,
    BagComponent,
    CheckOutComponent,
    UserInforComponent,
    AdminComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
