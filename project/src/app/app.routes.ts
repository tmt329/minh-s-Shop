
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { ItemToBuyComponent } from './item-to-buy/item-to-buy.component';

import { MainComponent } from './main/main.component';
import { MenComponent } from './men/men.component';

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
          component: MenComponent ,
 
        },
        {
          path: ':name' ,
          component:ItemToBuyComponent 

        }
       ]
       
    },

    
 ]