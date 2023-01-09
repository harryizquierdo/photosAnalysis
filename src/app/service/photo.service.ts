import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface PhotoResponse {
  id: number;
  url: string;
  description: string;
  type: string;
  name: string;
  createdAt: string;
}



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  //URL del servicio REST al que quieres enviar las fotos
  serviceUrl = environment.serviceUrl;

  //creamos un array de fotos que tendrá todas las fotos que han sido tomadas
  photos: PhotoResponse[] = [];

  constructor(private http: HttpClient) { }

  async addNewPhoto(){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri, //defino como quiero tener el resultado de la foto
      source: CameraSource.Camera, //Desde donde quiero obtener la foto (camara, galeria, popup)
      quality: 90 // Que calidad quiero para las fotos
    });
    //consultamos si tiene la foto
    if(photo.webPath){
      //Preparamos los headers para la petición HTTP
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      //Preparamos el cuerpo de la petición con la foto en base64
      const body = {
        photo: photo.base64String
      };
      //Enviamos la petición POST al servicio REST
      this.http.post<PhotoResponse>(this.serviceUrl, body, {headers}).subscribe(response => {
        //Creamos una instancia de la interfaz PhotoResponse con los datos recibidos del servicio y la foto
        const newPhoto: PhotoResponse = {
          id: response.id,
          url: photo.webPath ?? '',
          description: response.description,
          type: response.type,
          name: response.name,
          createdAt: new Date().toISOString()
        };
        //Añadimos la nueva foto al inicio del array
        this.photos.unshift(newPhoto);
      });
    }
  }
}
