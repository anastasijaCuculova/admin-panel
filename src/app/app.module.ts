import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from "@angular/router";
import {CreateShirtComponent} from "./core/shirt/create.shirt.component";
import {ListShirtsComponent} from "./core/shirt/list.shirts.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
