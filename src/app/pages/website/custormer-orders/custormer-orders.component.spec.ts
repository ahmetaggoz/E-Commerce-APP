import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustormerOrdersComponent } from './custormer-orders.component';

describe('CustormerOrdersComponent', () => {
  let component: CustormerOrdersComponent;
  let fixture: ComponentFixture<CustormerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustormerOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustormerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
