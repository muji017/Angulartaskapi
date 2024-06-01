import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryData } from '../models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private apiUrl:string='https://picsum.photos/v2/list?'
  constructor(
    private http:HttpClient
  ) {}

  getGridDatas(page:number,limit:number=30):Observable<GalleryData[]>{
    return this.http.get<GalleryData[]>(`${this.apiUrl}page=${page}&limit=${limit}`)
  }
}
