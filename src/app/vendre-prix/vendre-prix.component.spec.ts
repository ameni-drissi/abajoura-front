import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendrePrixComponent } from './vendre-prix.component';

describe('VendrePrixComponent', () => {
  let component: VendrePrixComponent;
  let fixture: ComponentFixture<VendrePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendrePrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendrePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
