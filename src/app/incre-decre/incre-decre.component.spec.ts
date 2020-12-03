import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreDecreComponent } from './incre-decre.component';

describe('IncreDecreComponent', () => {
  let component: IncreDecreComponent;
  let fixture: ComponentFixture<IncreDecreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreDecreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreDecreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
