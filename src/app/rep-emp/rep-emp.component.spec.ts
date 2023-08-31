import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepEmpComponent } from './rep-emp.component';

describe('RepEmpComponent', () => {
  let component: RepEmpComponent;
  let fixture: ComponentFixture<RepEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepEmpComponent]
    });
    fixture = TestBed.createComponent(RepEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
