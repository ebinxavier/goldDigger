import { Component, OnInit } from '@angular/core';
import { RaTranslationsService } from '../../services/ra-translations.service';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  public tabStatus = 'ra-tab';// or ss-tab
  public tabStatusL1 = 'obs-ra-tab'; // or trans-ra-tab
  public obsRaFilter = "all";
  public sortOrderClass = "sort";
  public sortValues = ['sort', 'sort-up', 'sort-down'];
  public selectedRA = "";

  public response = {
    "request_meta": {
        "": "application/json"
    },
    "message": "Successfully processed request.",
    "success": true,
    "meta": {
        "paginator": {
            "has_previous": false,
            "start_index": 1,
            "has_other_pages": true,
            "total_pages": 54,
            "end_index": 10,
            "next_page": 2,
            "page_number": 1,
            "page_range": [
                1,
                2,
                3,
                4,
                5
            ],
            "has_next": true,
            "per_page": 10,
            "total_count": 537
        }
    },
    "registered_agents": [
        {
            "_id": "5bb6f98517d19035af16fd2d",
            "name": "RESIDENT AGENTS INC",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd2e",
            "name": "RANDY K. DOLYNUIK",
            "mapped_name": "Company LLC",
            "is_mapped": true
        },
        {
            "_id": "5bb6f98517d19035af16fd2f",
            "name": "ANDREW BANK",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd30",
            "name": "THE CORPORATION COMPANY",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd31",
            "name": "CORPORATION SERVICE COMPANY DBA CSC - LAWYERS INCO",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd32",
            "name": "JOHN S. DONNELLON",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd33",
            "name": "LEGALINC CORPORATE SERVICES",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd34",
            "name": "WOLF HALDENSTEIN ADLER FREEMAN & HERZ LLP",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd35",
            "name": "JON HUFFMASTER, DAVIS SR",
            "mapped_name": "",
            "is_mapped": false
        },
        {
            "_id": "5bb6f98517d19035af16fd36",
            "name": "STEPHANIE SANDROCK",
            "mapped_name": "",
            "is_mapped": false
        }
    ]
}





  constructor(private raService: RaTranslationsService) { }

  ngOnInit() {

  }
  handleSortHeaderClick() {
    let pos = this.sortValues.indexOf(this.sortOrderClass);
    this.sortOrderClass = this.sortValues[++pos % 3]
  }
  onHide() {
  }

  /*
  -page (page number, Eg: 1,2,3 etc. Default: 1)
  -per_page (number of records per page, Eg: 10, 50, etc. Default: 10
  -sort (sort string, Eg: name (sort by name in ascending order), -name (sort by name in descending order). Default: sort in ascending order of id)
  -match_status (filter by match status Eg: matched, unmatched, Default: all)
  */
  updateTable(page=1,per_page=10,sort='id',match_status='all') {
    this.raService.getPage().subscribe(res => {
      console.log(res);
    })
  }
  setRA(RA){
    this.selectedRA=RA;
  }
}
