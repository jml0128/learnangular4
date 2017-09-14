import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsComfirmComponent } from './goods-comfirm.component';

describe('GoodsComfirmComponent', () => {
  let component: GoodsComfirmComponent;
  let fixture: ComponentFixture<GoodsComfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsComfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
