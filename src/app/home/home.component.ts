import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from './../api-calls.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  XTdatas: any;
  years = [];
  constructor(public XTservice: ApiCallsService) {}

  ngOnInit(): void {
    this.setBreakPoint(window.innerWidth);
    this.makeArray();
    this.XTservice.getXtLists().subscribe((data) => (this.XTdatas = data));
  }
  applyFilter(filterType, data) {
    this.XTservice.getXtListsFilter(filterType, data).subscribe(
      (data) => (this.XTdatas = data)
    );
  }
  makeArray() {
    for (var i = 2006; i <= 2019; i++) {
      this.years.push(i);
    }
  }
  setBreakPoint = (BreakPointVal) => {
    if (BreakPointVal <= 700) {
      this.breakpoint = 1;
    } else if (BreakPointVal > 700 && BreakPointVal < 1200) {
      this.breakpoint = 2;
    } else if (BreakPointVal > 1200 && BreakPointVal < 1440) {
      this.breakpoint = 4;
    } else {
      this.breakpoint = 6;
    }
  };
}
