import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroautoPage } from './registroauto.page';

describe('RegistroautoPage', () => {
  let component: RegistroautoPage;
  let fixture: ComponentFixture<RegistroautoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroautoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
