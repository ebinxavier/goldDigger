import { Component, OnInit } from '@angular/core';
import { ScrapeCompaniesService } from '../../services/scrape-companies.service'

@Component({
  selector: 'app-select-state',
  templateUrl: './select-state.component.html',
  styleUrls: ['./select-state.component.css']
})
export class SelectStateComponent implements OnInit {
  public states = [];
  constructor(private service: ScrapeCompaniesService) { }

  ngOnInit() {
    this.service.getStateListing().subscribe(states=>{
      for(let i in states){
        this.states.push({key:i,value:states[i]});
      } 
      console.log(this.states);
    })

  }

}
