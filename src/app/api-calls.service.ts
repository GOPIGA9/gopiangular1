import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  spinnerAdd() {
    var element = document.getElementById('myDIV');
    element.classList.add('spinner');
  }

  spinnerRemove() {
    var element = document.getElementById('myDIV');
    element.classList.remove('spinner');
  }

  getXtListsFilter(filterObj) {
    return this.http.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${filterObj.launch}&launch_year=${filterObj.year}`
    );
  }

  constructor(private http: HttpClient) {}
  public getXtLists() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
}
