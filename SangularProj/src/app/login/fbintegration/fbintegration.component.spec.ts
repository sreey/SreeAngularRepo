import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbintegrationComponent } from './fbintegration.component';

describe('FbintegrationComponent', () => {
  let component: FbintegrationComponent;
  let fixture: ComponentFixture<FbintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
