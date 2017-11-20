import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ThemingService } from './theming.service';
import { SharedModule } from '../shared/shared.module';
import {CreateShirtComponent} from "./shirt/create.shirt.component";
import {ListShirtsComponent} from "./shirt/list.shirts.component";
import {ShirtService} from "./services/shirt.service";
import {AppRoutingComponent} from "../app-routing/app-routing.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'shirts',
        component: ListShirtsComponent,
      },
      {
        path: 'create-shirt',
        component: CreateShirtComponent,
      }
    ]),
    HttpModule,


  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    CreateShirtComponent,
    ListShirtsComponent,
    AppRoutingComponent

  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    CreateShirtComponent,
    ListShirtsComponent,
    AppRoutingComponent
  ],
  providers: [
    SidenavService,
    ThemingService,
    ShirtService
  ]
})
export class CoreModule { }
