import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoixPage } from './choix.page';

describe('ChoixPage', () => {
  let component: ChoixPage;
  let fixture: ComponentFixture<ChoixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChoixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
