import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirstComponentService {

  personsChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) { }

  fetchApiPersons() {
    this.http.get<any>('https://gorest.co.in/public-api/users').pipe(
        map(responseData => {
          //responseData.data, the 'data' from that api variable
          //comping map() same as javascript model
          return responseData.data.map((charName: { name: any; }) => charName.name);
        })
      ).subscribe(transformedData => {
      console.log(transformedData);
      this.personsChanged.next(transformedData);
    });
  }

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons)
    this.personsChanged.next(this.persons);
  }

  removePerson(pName: string) {
    this.persons = this.persons.filter(pData => {
      return pData !== pName;
    });
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }
}
