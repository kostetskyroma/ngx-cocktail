import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyableByNgifChildComponent } from './destoyable-by-ngif-child.component';

describe('DestroyableByNgifChildComponent', () => {
  let component: DestroyableByNgifChildComponent;
  let fixture: ComponentFixture<DestroyableByNgifChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestroyableByNgifChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyableByNgifChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
