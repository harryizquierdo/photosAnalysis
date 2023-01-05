import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  //creamos un array de fotos que tendrá todas las fotos que han sido tomadas
  photos: String[] = [];

  constructor() { }

  async addNewPhoto(){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri, //defino como quiero tener el resultado de la foto
      source: CameraSource.Camera, //Desde donde quiero obtener la foto (camara, galeria, popup)
      quality: 90 // Que calidad quiero para las fotos
    });
    //consultamos si tiene la foto
    if(photo.webPath){
      //agrega la foto al inicio del array
      this.photos.unshift(photo.webPath);
    }
  }
}
