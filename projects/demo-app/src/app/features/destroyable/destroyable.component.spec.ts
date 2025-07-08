import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyableComponent } from './destroyable.component';

describe('DestroyableComponent', () => {
  let component: DestroyableComponent;
  let fixture: ComponentFixture<DestroyableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
