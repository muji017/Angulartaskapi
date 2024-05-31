import { Component } from '@angular/core';
import { GalleryData } from 'src/app/models/dataModel';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryData!: GalleryData[];

  constructor(private service: GalleryService) { }

  ngOnInit() {
    this.getGalleryData();
  }

  getGalleryData() {
    this.service.getGridDatas(1).subscribe(data => {
      this.galleryData = data;
    });
  }
}
