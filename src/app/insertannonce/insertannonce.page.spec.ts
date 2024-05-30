import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertannoncePage } from './insertannonce.page';

describe('InsertannoncePage', () => {
  let component: InsertannoncePage;
  let fixture: ComponentFixture<InsertannoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsertannoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
