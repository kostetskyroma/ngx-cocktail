import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyableByPathComponent } from './destoyable-by-path.component';

describe('DestroyableByPath', () => {
  let component: DestroyableByPathComponent;
  let fixture: ComponentFixture<DestroyableByPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyableByPathComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyableByPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
