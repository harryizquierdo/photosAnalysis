import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//Se añade está importación para soportar la camara de la PC
import { defineCustomElements } from '@ionic/pwa-elements/loader';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//llama al elemento loader despues que el APP ha sido renderizada por primera vez
defineCustomElements(window);