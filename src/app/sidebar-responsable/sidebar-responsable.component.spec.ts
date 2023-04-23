import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarResponsableComponent } from './sidebar-responsable.component';

describe('SidebarResponsableComponent', () => {
  let component: SidebarResponsableComponent;
  let fixture: ComponentFixture<SidebarResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
