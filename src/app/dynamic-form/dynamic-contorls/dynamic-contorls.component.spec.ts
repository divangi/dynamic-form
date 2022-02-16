import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContorlsComponent } from './dynamic-contorls.component';

describe('DynamicContorlsComponent', () => {
  let component: DynamicContorlsComponent;
  let fixture: ComponentFixture<DynamicContorlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicContorlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContorlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
