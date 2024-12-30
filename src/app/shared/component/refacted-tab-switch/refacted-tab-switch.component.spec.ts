import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactedTabSwitchComponent } from './refacted-tab-switch.component';

describe('RefactedTabSwitchComponent', () => {
  let component: RefactedTabSwitchComponent;
  let fixture: ComponentFixture<RefactedTabSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactedTabSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefactedTabSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
