import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentPersonsComponent } from './first-component-persons.component';

describe('FirstComponentPersonsComponent', () => {
  let component: FirstComponentPersonsComponent;
  let fixture: ComponentFixture<FirstComponentPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponentPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
