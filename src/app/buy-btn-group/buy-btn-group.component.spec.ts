import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBtnGroupComponent } from './buy-btn-group.component';

describe('BuyBtnGroupComponent', () => {
  let component: BuyBtnGroupComponent;
  let fixture: ComponentFixture<BuyBtnGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBtnGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
