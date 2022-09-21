import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleNestedComponent } from './title-nested.component';

describe('TitleNestedComponent', () => {
  let component: TitleNestedComponent;
  let fixture: ComponentFixture<TitleNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
