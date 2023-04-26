import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionResponsableComponent } from './inscription-responsable.component';

describe('InscriptionResponsableComponent', () => {
  let component: InscriptionResponsableComponent;
  let fixture: ComponentFixture<InscriptionResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
