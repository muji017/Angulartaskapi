import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  imageList:any[]=[]
  constructor(private service:GalleryService){}

  ngOnInit(){
    this.getGridDatas(1)
  }
  getGridDatas(page:number){
    this.service.getGridDatas(page).subscribe(
      res=>{
        console.log(res);
        this.imageList=res
      },
      error=>{
        console.log(error);
      }
    )
  }
}
