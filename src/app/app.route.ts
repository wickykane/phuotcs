import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
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

