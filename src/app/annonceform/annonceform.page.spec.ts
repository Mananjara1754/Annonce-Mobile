import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnonceformPage } from './annonceform.page';

describe('AnnonceformPage', () => {
  let component: AnnonceformPage;
  let fixture: ComponentFixture<AnnonceformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnonceformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
