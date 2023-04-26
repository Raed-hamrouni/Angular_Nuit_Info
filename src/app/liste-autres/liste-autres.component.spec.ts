import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAutresComponent } from './liste-autres.component';

describe('ListeAutresComponent', () => {
  let component: ListeAutresComponent;
  let fixture: ComponentFixture<ListeAutresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAutresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
