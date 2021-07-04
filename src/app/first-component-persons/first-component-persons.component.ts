import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirstComponentService } from '../first-component.service';

@Component({
  selector: 'app-first-component-persons',
  templateUrl: './first-component-persons.component.html',
  styleUrls: ['./first-component-persons.component.css']
})
export class FirstComponentPersonsComponent implements OnInit, OnDestroy {

  isFetching: boolean = false;
  personList: string[] | undefined;
  private firstComponentService: FirstComponentService;
  private personsListSubscription = Subscription.EMPTY;

  constructor(frstCmpntService: FirstComponentService) {
    // this.personList = firstComponentService.persons
    this.firstComponentService = frstCmpntService;
  }

  ngOnInit(): void {
    // this.personList = this.firstComponentService.persons;
    this.personsListSubscription = this.firstComponentService.personsChanged.subscribe(dataPersons => {
      this.personList = dataPersons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.firstComponentService.fetchApiPersons();
  }

  onRemovePerson(personName: string) {
    this.firstComponentService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personsListSubscription.unsubscribe();
  }

}
