import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferDataComponent } from './tranfer-data.component';

describe('TranferDataComponent', () => {
  let component: TranferDataComponent;
  let fixture: ComponentFixture<TranferDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranferDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
