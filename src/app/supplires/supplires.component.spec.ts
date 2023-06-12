import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliresComponent } from './supplires.component';

describe('SuppliresComponent', () => {
  let component: SuppliresComponent;
  let fixture: ComponentFixture<SuppliresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
