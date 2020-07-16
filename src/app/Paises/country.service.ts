import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  protected baseUri: string = "https://restcountries.eu/rest/v2/";

  getAllCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.baseUri + "all");
  }

  getCountryByName(name: string): Observable<Country>{
    return this.http.get<Country>(this.baseUri + "name/" + name)
  }

  getCountriesByRegion(region: string): Observable<Country[]>{
    return this.http.get<Country[]>(this.baseUri + "region/" + region)
  }
}
