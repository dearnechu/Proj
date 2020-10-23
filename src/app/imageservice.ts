import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Iicustomerdetail } from './model/icustomerdetail';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export class ImageService {

    constructor(private http: HttpClient) {}
  
  
    public uploadImage(image: File): Observable<Response> {
      const formData = new FormData();
  
      formData.append('image', image);
  return
     //return this.http.post('/api/v1/image-upload', formData);
    }
  }