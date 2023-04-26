import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSalleComponent } from './reservation-salle.component';

describe('ReservationSalleComponent', () => {
  let component: ReservationSalleComponent;
  let fixture: ComponentFixture<ReservationSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
