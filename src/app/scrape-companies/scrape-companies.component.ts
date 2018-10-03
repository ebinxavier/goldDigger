import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-scrape-companies',
  templateUrl: './scrape-companies.component.html',
  styleUrls: ['./scrape-companies.component.css']
})
export class ScrapeCompaniesComponent implements OnInit {

  public currentPage = 'scrape';
  public tabStatus = 'search'; //can be 'upload'

  @Output() setTitleTab = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  this.setTitleTab.emit('scrape');
  }

}
