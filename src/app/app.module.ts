import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugaresPage } from '../pages/lugares/lugares';
import { DecoracionPage } from '../pages/decoracion/decoracion';
import { ComidaPage } from '../pages/comida/comida';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugaresPage,
    ComidaPage,
    DecoracionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugaresPage,
    ComidaPage,
    DecoracionPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
