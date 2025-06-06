import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditFormComponent } from './credit-form.component';

describe('CreditFormComponent', () => {
  let component: CreditFormComponent;
  let fixture: ComponentFixture<CreditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
