import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActifPage } from './actif.page';

describe('ActifPage', () => {
  let component: ActifPage;
  let fixture: ComponentFixture<ActifPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
