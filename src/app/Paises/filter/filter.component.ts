import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent {

  filter = new FormControl();

  constructor(private sharedService: SharedService) { }

  filterCountries() {
    this.sharedService.sendEvent(this.filter.value);
  }

}
