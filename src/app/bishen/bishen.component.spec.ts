import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BishenComponent } from './bishen.component';

describe('BishenComponent', () => {
  let component: BishenComponent;
  let fixture: ComponentFixture<BishenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BishenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BishenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
