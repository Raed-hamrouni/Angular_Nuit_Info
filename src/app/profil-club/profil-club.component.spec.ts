import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilClubComponent } from './profil-club.component';

describe('ProfilClubComponent', () => {
  let component: ProfilClubComponent;
  let fixture: ComponentFixture<ProfilClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
