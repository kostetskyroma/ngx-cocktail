import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleNestedSecondComponent } from './title-nested-second.component';

describe('TitleNestedSecondComponent', () => {
  let component: TitleNestedSecondComponent;
  let fixture: ComponentFixture<TitleNestedSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleNestedSecondComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleNestedSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
