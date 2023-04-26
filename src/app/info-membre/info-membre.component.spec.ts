import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMembreComponent } from './info-membre.component';

describe('InfoMembreComponent', () => {
  let component: InfoMembreComponent;
  let fixture: ComponentFixture<InfoMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
