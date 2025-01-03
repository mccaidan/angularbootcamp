import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-photo-show',
  standalone: true,
  imports: [NgIf],
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css'
})
export class PhotoShowComponent {
  photoUrl: string = '';

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
  }

}
