import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Ruta/add/add.component';
import { EditComponent } from './Ruta/edit/edit.component';
import { ListarComponent } from './Ruta/listar/listar.component';
import { InterceptorService } from './Interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
