import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './modules/layout/layout.component';
import { CollectionComponent } from './modules/collection/collection.component';
import { ProductComponent } from './modules/product/product.component';


const routes: Routes = [
    { path: '', component: LayoutComponent },
    { 
        path: 'collection', 
        children: [
            { path: '', component:  CollectionComponent},
            { path: 'product/:id', component:  ProductComponent}
          ]
    },
    
    // {
    //     path: '**',
    //     data: {
    //         title: 'PLDM'
    //     },
    //     redirectTo: '/404',
    //     pathMatch: 'full'

    // }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

