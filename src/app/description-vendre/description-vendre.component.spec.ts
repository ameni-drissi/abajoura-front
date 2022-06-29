import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionVendreComponent } from './description-vendre.component';

describe('DescriptionVendreComponent', () => {
  let component: DescriptionVendreComponent;
  let fixture: ComponentFixture<DescriptionVendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionVendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionVendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
