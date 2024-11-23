import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisautosPage } from './misautos.page';

describe('MisautosPage', () => {
  let component: MisautosPage;
  let fixture: ComponentFixture<MisautosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisautosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
