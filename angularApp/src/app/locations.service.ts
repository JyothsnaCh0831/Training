import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpObj: HttpClient) { }

  getLocations() {
    let url = "https://demo8890059.mockable.io/getLocations";
    return this.httpObj.get(url);
  }
}
