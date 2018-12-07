import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDihobqgTXA6DFekLdMKcTYwv0k8AoEgcY'
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
