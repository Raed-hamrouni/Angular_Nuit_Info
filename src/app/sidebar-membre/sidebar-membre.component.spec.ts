import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMembreComponent } from './sidebar-membre.component';

describe('SidebarMembreComponent', () => {
  let component: SidebarMembreComponent;
  let fixture: ComponentFixture<SidebarMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
