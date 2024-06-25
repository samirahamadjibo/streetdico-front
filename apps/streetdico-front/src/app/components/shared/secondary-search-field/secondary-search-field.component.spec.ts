import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySearchFieldComponent } from './secondary-search-field.component';

describe('SecondarySearchFieldComponent', () => {
  let component: SecondarySearchFieldComponent;
  let fixture: ComponentFixture<SecondarySearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondarySearchFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondarySearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
