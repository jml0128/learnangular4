import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsNumComponent } from './goods-num.component';

describe('GoodsNumComponent', () => {
  let component: GoodsNumComponent;
  let fixture: ComponentFixture<GoodsNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
