import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGoodsComponent } from './choose-goods.component';

describe('ChooseGoodsComponent', () => {
  let component: ChooseGoodsComponent;
  let fixture: ComponentFixture<ChooseGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
