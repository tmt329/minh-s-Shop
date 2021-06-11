
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { pathToFileURL } from 'url';
import { AdminComponent } from './admin/admin.component';
import { BagComponent } from './bag/bag.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ItemToBuyComponent } from './item-to-buy/item-to-buy.component';
import { KidCollectionComponent } from './kid-collection/kid-collection.component';

import { MainComponent } from './main/main.component';
import { MenCollectionComponent } from './men-collection/men-collection.component';
import { MenComponent } from './men/men.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserInforComponent } from './user-infor/user-infor.component';
import { WomenCollectionComponent } from './women-collection/women-collection.component';
import{AuthGuard} from './services/guards/auth.guard'
import { AdminGuard } from './services/guards/admin.guard';

export const appRoutes : Routes = [
    {
      path: "" ,
      component: MainComponent
    },
    {
       path:"men-collection",
       
       children:[
        {
          path: "",
          component: MenCollectionComponent ,
 
        },
        {
          path: ':id' ,
          component:ItemToBuyComponent 

        }
       ]
       
    },
    {
      path:'women-collection',
      children:[
        {path:'',
        component:WomenCollectionComponent,
        },
        {
          path:":id",
           component:ItemToBuyComponent
        }
      ]

    },
    {
      
        path:"kids-collection",
        
        children:[
         {
           path: "",
           component: KidCollectionComponent ,
  
         },
         {
           path: ':id' ,
           component:ItemToBuyComponent 
 
         }
        ]
        
     
    },
    {
      path:"register",
      component: RegisterComponent
    },
    {
      path:"sign-in",
      component:SignInComponent
    },
    {
      path:"bag",
      component:BagComponent
    },
    {
      path:"check-out",
      component:CheckOutComponent
    },
    {
      path:"user",
      component:UserInforComponent,
      canActivate:[AuthGuard]
    },
    {
      path:"admin",
      component:AdminComponent,
      canActivate:[AdminGuard]
    }


    
    
    
 ]