import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaldeckComponent } from './paldeck.component';

describe('PaldeckComponent', () => {
  let component: PaldeckComponent;
  let fixture: ComponentFixture<PaldeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaldeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaldeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
