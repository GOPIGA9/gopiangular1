import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  getXtListsFilter(filterType, data) {
    if (filterType === 'year') {
      return this.http.get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${data}`
      );
    } else if (filterType === 'lunch') {
      return this.http.get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${data}`
      );
    } else {
      return this.http.get(
        `https://api.spaceXdata.com/v3/launches?limit=100`
      );
    }
  }

  constructor(private http: HttpClient) {}
  // Uses http.get() to load data from a single API endpoint
  public getXtLists() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
}
