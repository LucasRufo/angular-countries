import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  public countries: Country[];

  ngOnInit(): void {
    this.countryService.getAllCountries()
      .subscribe(
        countries => this.countries = countries,
        error => console.log(error)
      );
  }

}
