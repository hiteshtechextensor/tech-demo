import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLandingComponent } from './classic-landing.component';

describe('ClassicLandingComponent', () => {
  let component: ClassicLandingComponent;
  let fixture: ComponentFixture<ClassicLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
