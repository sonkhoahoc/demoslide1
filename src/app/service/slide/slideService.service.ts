import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlideServiceService {

constructor(private _htpp:HttpClient) { }

getSlides(){
  return this._htpp.get<any[]>('http://localhost:3000/slide');
}

}
