import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsPropertyComponent } from './goods-property.component';

describe('GoodsPropertyComponent', () => {
  let component: GoodsPropertyComponent;
  let fixture: ComponentFixture<GoodsPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
