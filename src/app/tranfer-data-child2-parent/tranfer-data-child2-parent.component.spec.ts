import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferDataChild2ParentComponent } from './tranfer-data-child2-parent.component';

describe('TranferDataChild2ParentComponent', () => {
  let component: TranferDataChild2ParentComponent;
  let fixture: ComponentFixture<TranferDataChild2ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferDataChild2ParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranferDataChild2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
