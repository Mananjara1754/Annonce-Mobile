import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttentePage } from './attente.page';

describe('AttentePage', () => {
  let component: AttentePage;
  let fixture: ComponentFixture<AttentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
