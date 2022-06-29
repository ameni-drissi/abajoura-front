import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierPaiementComponent } from './verifier-paiement.component';

describe('VerifierPaiementComponent', () => {
  let component: VerifierPaiementComponent;
  let fixture: ComponentFixture<VerifierPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifierPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
