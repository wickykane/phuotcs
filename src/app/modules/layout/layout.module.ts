import { NgModule } from '@angular/core';

import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { AsideMenuComponent } from "./menu/menu.component";
import { LayoutComponent } from "./layout.component";


@NgModule({
    imports: [],
    exports: [LayoutComponent, AppHeaderComponent,AppFooterComponent],
    declarations: [AppHeaderComponent, LayoutComponent, AppFooterComponent, AsideMenuComponent],
    providers: [],
})
export class LayoutModule { }
