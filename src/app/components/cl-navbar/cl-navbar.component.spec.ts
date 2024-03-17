import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClNavbarComponent } from './cl-navbar.component';

describe('ClNavbarComponent', () => {
  let component: ClNavbarComponent;
  let fixture: ComponentFixture<ClNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
