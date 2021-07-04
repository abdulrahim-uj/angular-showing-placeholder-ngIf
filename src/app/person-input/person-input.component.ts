import { Component, OnInit } from '@angular/core';
import { FirstComponentService } from '../first-component.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  private personServiceFirst: FirstComponentService;
  txt_personName: string = '';

  constructor(personFirstService: FirstComponentService) {
    this.personServiceFirst = personFirstService;
  }

  ngOnInit(): void {
  }

  // @Output() personCreateName = new EventEmitter<string>();

  onCreatePerson() {
    console.log("Event handling!, Person name is " + this.txt_personName);
    // this.personCreateName.emit(this.txt_personName);
    this.personServiceFirst.addPerson(this.txt_personName);
    this.txt_personName = '';
  }
}
