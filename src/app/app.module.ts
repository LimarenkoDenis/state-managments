import { ProductsState } from './state-managments/ngxs/product.state';
import { ProductsEffects } from './state-managments/ngrx/effects/product.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './state-managments/ngrx/reducers';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    StoreModule.forRoot(reducers, { runtimeChecks: {} }),
    EffectsModule.forRoot([ProductsEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // }),


  // NgxsModule.forRoot([ProductsState]),
  // NgxsLoggerPluginModule.forRoot(),
  // !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : [],


    !environment.production ? AkitaNgDevtools.forRoot() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
