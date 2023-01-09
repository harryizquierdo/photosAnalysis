import { Component } from '@angular/core';
import { PhotoService } from '../../service/photo.service';
import { IPhotoResponse } from '../../interfaces/iphoto-response'

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html'
})
export class GaleryComponent {

  photos: IPhotoResponse[] = [];

  constructor(
    private photoService: PhotoService
  ) {
    //igualo mi array con el del servicio para siempre tener actualizados los datos
    this.photos = this.photoService.photos;
  }

  ngOnInit(): void {
  }

  async takePhoto(){
    //tomo la foto del servicio
    await this.photoService.addNewPhoto();
  }
}
