import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoLoginComponent } from './hijo-login.component';

describe('HijoLoginComponent', () => {
  let component: HijoLoginComponent;
  let fixture: ComponentFixture<HijoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HijoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
