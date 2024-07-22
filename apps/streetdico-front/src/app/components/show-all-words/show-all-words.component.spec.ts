import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllWordsComponent } from './show-all-words.component';

describe('ShowAllWordsComponent', () => {
  let component: ShowAllWordsComponent;
  let fixture: ComponentFixture<ShowAllWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllWordsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAllWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
