import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country.model';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private countryService: CountryService, private sharedService: SharedService) {
    this.subscription = this.sharedService.getEvent()
      .subscribe(
        (result) => {
          this.filterList(result.name);
        }
      )
  }

  public countries: Country[];

  public hasError: boolean = false;

  private subscription: Subscription;

  ngOnInit(): void {
    this.countryService.getAllCountries()
      .subscribe(
        countries => {
          this.hasError = false
          this.countries = countries
        },
        error => {
          this.hasError = true
        }
      )
  }

  filterList(name: string): void {

    if (name == undefined || name == '') {
      this.ngOnInit();
      return;
    }

    name = name.toLowerCase();

    if (name == 'asia' || name == 'americas' || name == 'africa' || name == "polar" || name == 'oceania' || name == "europe")
      this.countryService.getCountriesByRegion(name)
        .subscribe(
          countries => {
            this.hasError = false
            this.countries = countries
          },
          error => {
            this.hasError = true
          }
        );
    else
      this.countryService.getCountryByName(name)
        .subscribe(
          countries => {
            this.hasError = false
            this.countries = countries
          },
          error => {
            this.hasError = true
          }
        );
  }
}
