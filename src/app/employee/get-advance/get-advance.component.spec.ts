import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdvanceComponent } from './get-advance.component';

describe('GetAdvanceComponent', () => {
  let component: GetAdvanceComponent;
  let fixture: ComponentFixture<GetAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
