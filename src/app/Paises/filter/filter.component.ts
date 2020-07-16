import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent {

  constructor(private sharedService: SharedService) { }

  public name: string;

  filterCountries() {
    this.sharedService.sendEvent(this.name);
  }

}
