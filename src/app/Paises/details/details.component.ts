import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  name: string;

  country: Country;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.countryService.getCountryByName(this.name)
      .subscribe(
        countries => {
          this.country = countries[0]
        },
        error => {
          console.log(error)
        }
      );
  }
}
