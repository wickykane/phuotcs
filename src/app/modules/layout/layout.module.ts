import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { AsideMenuComponent } from "./menu/menu.component";
import { MenuSliderComponent } from "./menu/slider.component";
import { ContentComponent } from "./menu/content.component";
import { CollectionComponent } from "../collection/collection.component";
import { ProductComponent } from "../product/product.component";


import { LayoutComponent } from "./layout.component";


@NgModule({
    imports: [CarouselModule.forRoot()],
    exports: [LayoutComponent, AppHeaderComponent, AppFooterComponent],
    declarations: [AppHeaderComponent, LayoutComponent, AppFooterComponent, AsideMenuComponent, MenuSliderComponent, ContentComponent, CollectionComponent, ProductComponent],
    providers: [],
})
export class LayoutModule { }
