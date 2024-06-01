import { Component } from '@angular/core';
import { ColDef ,GridOptions} from 'ag-grid-community';
import { GalleryData } from 'src/app/models/dataModel';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  imageList!: GalleryData[];
  page: number=1
  columnDefs: ColDef<GalleryData>[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Image', field: 'download_url' ,cellRenderer: this.imageCellRenderer},
    { headerName: 'Author', field: 'author' ,filter:true ,floatingFilter: true,},
    { headerName: 'URL', field: 'url' },
  ];
  defaultColDef={
    flex:1,
    minWidth:100,
  }
  public gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector : false,
    cacheBlockSize:10,
    onPaginationChanged: this.onPaginationChanged.bind(this)
  };
  constructor(private service: GalleryService) {}

  ngOnInit() {
    this.getGridDatas(1);
  }

  getGridDatas(page: number) {
    this.service.getGridDatas(page).subscribe(
      res => {
        console.log(res);
        this.imageList = res;
      },
      error => {
        console.log(error);
      }
    );
  }
  imageCellRenderer(params: any) {
    return `<img src="${params.value}" style="width: 70px; height: auto;">`;
  }
  onPaginationChanged(params: any) {
    if (params.newPage) {
      const newPage = params.api.paginationGetCurrentPage() + 1;
      this.getGridDatas(newPage);
    }
  }
  // onPageChange(page: any) {
  //   console.log(page,"edheb");
    
  //   this.page=page
  //   this.getGridDatas(page);
  // }
}
