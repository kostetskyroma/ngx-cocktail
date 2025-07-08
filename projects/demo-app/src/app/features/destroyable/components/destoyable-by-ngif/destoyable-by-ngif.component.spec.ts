import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyableByNgifComponent } from './destoyable-by-ngif.component';

describe('DestroyableByNgifComponent', () => {
  let component: DestroyableByNgifComponent;
  let fixture: ComponentFixture<DestroyableByNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyableByNgifComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyableByNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
